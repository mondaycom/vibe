import { describe, it, expect } from "vitest";
import { hasForeignObject, toImgSrc } from "../foreignObjectFallback";

describe("foreignObjectFallback", () => {
  it("detects foreignObject regardless of case", () => {
    expect(hasForeignObject('<svg><foreignObject width="1"><div/></foreignObject></svg>')).toBe(true);
    expect(hasForeignObject("<svg><FOREIGNOBJECT><div/></FOREIGNOBJECT></svg>")).toBe(true);
    expect(hasForeignObject("<svg><foreignObject/></svg>")).toBe(true);
  });

  it("does not flag plain svg", () => {
    expect(hasForeignObject('<svg><path d="M0 0"/><linearGradient id="g"/></svg>')).toBe(false);
  });

  it("keeps urls as is", () => {
    expect(toImgSrc("https://cdn.monday.com/a.svg")).toBe("https://cdn.monday.com/a.svg");
  });

  it("converts raw svg markup to a data uri", () => {
    const result = toImgSrc("<svg><foreignObject/></svg>");
    expect(result.startsWith("data:image/svg+xml;charset=utf-8,")).toBe(true);
    expect(decodeURIComponent(result.split(",")[1])).toBe("<svg><foreignObject/></svg>");
  });
});
