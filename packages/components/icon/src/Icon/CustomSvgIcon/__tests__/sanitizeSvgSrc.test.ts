import { describe, it, expect } from "vitest";
import { sanitizeSvgSrc } from "../sanitizeSvgSrc";

describe("sanitizeSvgSrc", () => {
  it.each([
    "https://cdn.monday.com/icon.svg",
    "http://cdn.monday.com/icon.svg",
    "HTTPS://cdn.monday.com/icon.svg",
    "//cdn.monday.com/icon.svg",
    "/static/icon.svg",
    "./icon.svg",
    "icon.svg",
    "data:image/svg+xml;base64,PHN2Zz48L3N2Zz4=",
    "data:image/svg+xml;utf8,<svg></svg>"
  ])("keeps safe src %s", src => {
    expect(sanitizeSvgSrc(src)).toBe(src);
  });

  it.each([
    "javascript:alert(1)",
    "JaVaScRiPt:alert(1)",
    "  javascript:alert(1)",
    "java\tscript:alert(1)",
    "java\nscript:alert(1)",
    "\u0000javascript:alert(1)",
    "vbscript:msgbox(1)",
    "data:text/html;base64,PHNjcmlwdD5hbGVydCgxKTwvc2NyaXB0Pg==",
    "data:image/png;base64,AAAA",
    "file:///etc/passwd",
    "blob:https://example.com/uuid",
    "",
    "   "
  ])("rejects unsafe src %j", src => {
    expect(sanitizeSvgSrc(src)).toBeNull();
  });

  it("trims surrounding whitespace on safe src", () => {
    expect(sanitizeSvgSrc("  https://cdn.monday.com/icon.svg ")).toBe("https://cdn.monday.com/icon.svg");
  });
});
