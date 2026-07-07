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

describe("getVibeComponentAccessibility", () => {
  beforeEach(async () => {
    vi.resetModules();
    vi.clearAllMocks();
    mockFetch.mockReset();
  });

  it("fetches accessibility from unpkg and returns content", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => "## Accessibility\n\nUse aria-label..."
    });

    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    const result = await getVibeComponentAccessibility.execute({ componentName: "Checkbox" });

    expect(mockFetch).toHaveBeenCalledWith(
      "https://unpkg.com/@vibe/core@4/dist/metadata/accessibility/Checkbox.md"
    );
    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toContain("Accessibility");
  });

  it("caches result and does not fetch again on second call", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      text: async () => "## Accessibility"
    });

    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    await getVibeComponentAccessibility.execute({ componentName: "Button" });
    await getVibeComponentAccessibility.execute({ componentName: "Button" });

    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  it("falls back to curl when fetch fails", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));
    curlMock.mockResolvedValueOnce({ stdout: "## Checkbox accessibility from curl", stderr: "" });

    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    const result = await getVibeComponentAccessibility.execute({ componentName: "Checkbox" });

    expect(result.isError).toBeFalsy();
    expect(result.content[0].text).toBe("## Checkbox accessibility from curl");
  });

  it("returns error when both fetch and curl fail", async () => {
    mockFetch.mockRejectedValueOnce(new Error("network error"));
    curlMock.mockResolvedValueOnce({ stdout: "", stderr: "" });

    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    const result = await getVibeComponentAccessibility.execute({ componentName: "Checkbox" });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toContain("Error retrieving accessibility requirements");
  });

  it("returns error when component not found (404)", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      statusText: "Not Found"
    });

    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    const result = await getVibeComponentAccessibility.execute({ componentName: "NonExistent" });

    expect(result.isError).toBe(true);
  });

  it("returns error when componentName is missing", async () => {
    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    const result = await getVibeComponentAccessibility.execute({ componentName: "" });

    expect(result.isError).toBe(true);
    expect(result.content[0].text).toBe("Error: componentName is required");
    expect(mockFetch).not.toHaveBeenCalled();
  });

  it("uses correct unpkg url for v3", async () => {
    const { detectVibeVersion } = await import("../server/version-detector.js");
    vi.mocked(detectVibeVersion).mockResolvedValueOnce(3);

    mockFetch.mockResolvedValueOnce({ ok: true, text: async () => "content" });

    const { getVibeComponentAccessibility } = await import("../server/tools/get-vibe-component-accessibility.js");
    await getVibeComponentAccessibility.execute({ componentName: "Button" });

    expect(mockFetch).toHaveBeenCalledWith(
      "https://unpkg.com/@vibe/core@3/dist/metadata/accessibility/Button.md"
    );
  });
});
