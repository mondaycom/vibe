import { describe, expect, it } from "vitest";
import { buildCssVarStyle } from "../lib/cssVarOverrides";
import { EMPTY_TOKEN_OVERRIDES } from "../lib/tokenDefinitions";

describe("buildCssVarStyle", () => {
  it("maps radius spacing typography overrides to CSS properties", () => {
    const style = buildCssVarStyle(
      {
        ...EMPTY_TOKEN_OVERRIDES,
        radius: { "--border-radius-medium": "12px" },
        spacing: { "--space-16": "20px" },
        typography: { "--font-size-30": "18px" },
      },
      "light",
      "original"
    );
    expect(style["--border-radius-medium"]).toBe("12px");
    expect(style["--space-16"]).toBe("20px");
    expect(style["--font-size-30"]).toBe("18px");
  });
});
