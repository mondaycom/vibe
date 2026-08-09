import { describe, it, expect, vi, beforeEach } from "vitest";

vi.mock("../server/version-detector.js", () => ({
  detectVibeVersion: vi.fn().mockResolvedValue(4)
}));

const curlMock = vi.fn();

vi.mock("child_process", () => {
  const exec = vi.fn() as any;
  exec[Symbol.for("nodejs.util.promisify.custom")] = curlMock;
  return { exec };
});

const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

describe("getVibeComponentExamples", () => {
  beforeEach(async () => {
    vi.resetModules();
    vi.clearAllMocks();
    mockFetch.mockReset();
  });

  it("fetches examples from unpkg and returns content", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => "## Button examples\n\n```tsx\n<Button>Click</Button>\n```"
    });

    const { getVibeComponentExamples } = await import("../server/tools/get-vibe-component-examples.js");
    const result = await getVibeComponentExamples.execute({ componentName: "Button" });

    expect(mockFetch).toHaveBeenCalledWith(
      "https://unpkg.com/@vibe/core@4/dist/metadata/examples/Button.md"
    );
    expect(result.isError).toBeFalsy();
    expect(result.content[1].text).toContain("Button examples");
  });

  it("caches result and does not fetch again on second call", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => "## Checkbox examples"
    });

    const { getVibeComponentExamples } = await import("../server/tools/get-vibe-component-examples.js");
    await getVibeComponentExamples.execute({ componentName: "Checkbox" });
    await getVibeComponentExamples.execute({ componentName: "Checkbox" });

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("falls back to curl when fetch fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));
    curlMock.mockResolvedValueOnce({ stdout: "## Button from curl", stderr: "" });

    const { getVibeComponentExamples } = await import("../server/tools/get-vibe-component-examples.js");
    const result = await getVibeComponentExamples.execute({ componentName: "Button" });

    expect(result.isError).toBeFalsy();
    expect(result.content[1].text).toBe("## Button from curl");
  });

  it("returns error when both fetch and curl fail", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));
    curlMock.mockResolvedValueOnce({ stdout: "", stderr: "" });

    const { getVibeComponentExamples } = await import("../server/tools/get-vibe-component-examples.js");
    const result = await getVibeComponentExamples.execute({ componentName: "Button" });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain("Error in getComponentExampleCode");
  });

  it("returns error when component not found (404)", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found"
    });

    const { getVibeComponentExamples } = await import("../server/tools/get-vibe-component-examples.js");
    const result = await getVibeComponentExamples.execute({ componentName: "NonExistent" });

    expect(result.isError).toBe(true);
  });

  it("uses correct unpkg url for v3", async () => {
    const { detectVibeVersion } = await import("../server/version-detector.js");
    vi.mocked(detectVibeVersion).mockResolvedValueOnce(3);

    mockFetch.mockResolvedValueOnce({ ok: true, text: async () => "content" });

    const { getVibeComponentExamples } = await import("../server/tools/get-vibe-component-examples.js");
    await getVibeComponentExamples.execute({ componentName: "Button" });

    expect(mockFetch).toHaveBeenCalledWith(
      "https://unpkg.com/@vibe/core@3/dist/metadata/examples/Button.md"
    );
  });
});
