import { describe, it, expect, vi, beforeEach } from "vitest";
import { readFile } from "fs/promises";
import { parseMajor, parseMajorFromRange } from "../server/version-detector.js";

vi.mock("fs/promises", () => ({
  readFile: vi.fn(),
}));

const mockedReadFile = vi.mocked(readFile);

describe("detectVibeVersion", () => {
  beforeEach(() => {
    vi.resetModules();
    mockedReadFile.mockReset();
  });

  it("detects v4 from node_modules/@vibe/core/package.json", async () => {
    mockedReadFile.mockImplementation(async (path) => {
      if (String(path).includes("node_modules/@vibe/core/package.json")) {
        return JSON.stringify({ version: "4.2.1" });
      }
      throw new Error("ENOENT");
    });

    const { detectVibeVersion } = await import("../server/version-detector.js");
    const version = await detectVibeVersion();
    expect(version).toBe(4);
  });

  it("detects v3 from node_modules/@vibe/core/package.json", async () => {
    mockedReadFile.mockImplementation(async (path) => {
      if (String(path).includes("node_modules/@vibe/core/package.json")) {
        return JSON.stringify({ version: "3.1.0" });
      }
      throw new Error("ENOENT");
    });

    const { detectVibeVersion } = await import("../server/version-detector.js");
    const version = await detectVibeVersion();
    expect(version).toBe(3);
  });

  it("falls back to package.json dependencies when node_modules not found", async () => {
    mockedReadFile.mockImplementation(async (path) => {
      if (String(path).includes("node_modules")) {
        throw new Error("ENOENT");
      }
      if (String(path).endsWith("package.json")) {
        return JSON.stringify({
          dependencies: { "@vibe/core": "^3.0.0" },
        });
      }
      throw new Error("ENOENT");
    });

    const { detectVibeVersion } = await import("../server/version-detector.js");
    const version = await detectVibeVersion();
    expect(version).toBe(3);
  });

  it("defaults to v4 when nothing is found", async () => {
    mockedReadFile.mockRejectedValue(new Error("ENOENT"));

    const { detectVibeVersion } = await import("../server/version-detector.js");
    const version = await detectVibeVersion();
    expect(version).toBe(4);
  });

  it("detects from devDependencies", async () => {
    mockedReadFile.mockImplementation(async (path) => {
      if (String(path).includes("node_modules")) {
        throw new Error("ENOENT");
      }
      if (String(path).endsWith("package.json")) {
        return JSON.stringify({
          devDependencies: { "@vibe/core": "~3.2.0" },
        });
      }
      throw new Error("ENOENT");
    });

    const { detectVibeVersion } = await import("../server/version-detector.js");
    const version = await detectVibeVersion();
    expect(version).toBe(3);
  });
});

describe("parseMajor", () => {
  it("parses v3", () => expect(parseMajor("3.1.0")).toBe(3));
  it("parses v4", () => expect(parseMajor("4.0.2")).toBe(4));
  it("defaults future versions to v4", () => expect(parseMajor("5.0.0")).toBe(4));
  it("returns null for invalid", () => expect(parseMajor("invalid")).toBeNull());
});

describe("parseMajorFromRange", () => {
  it("parses ^3.0.0", () => expect(parseMajorFromRange("^3.0.0")).toBe(3));
  it("parses ^4.1.2", () => expect(parseMajorFromRange("^4.1.2")).toBe(4));
  it("parses ~3.2.0", () => expect(parseMajorFromRange("~3.2.0")).toBe(3));
  it("parses >=4.0.0", () => expect(parseMajorFromRange(">=4.0.0")).toBe(4));
  it("parses bare 3", () => expect(parseMajorFromRange("3")).toBe(3));
  it("returns null for *", () => expect(parseMajorFromRange("*")).toBeNull());
  it("returns null for latest", () => expect(parseMajorFromRange("latest")).toBeNull());
  it("returns null for workspace:*", () => expect(parseMajorFromRange("workspace:*")).toBeNull());
});
