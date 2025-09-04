import { describe, it, expect, vi } from "vitest";
import { resolveAttentionBoxIcon } from "../iconUtils";
import { ATTENTION_BOX_DEFAULT_ICONS } from "../../consts/icons";

vi.mock("../../consts/icons", () => ({
  ATTENTION_BOX_DEFAULT_ICONS: {
    primary: "MockPrimaryIcon",
    positive: "MockPositiveIcon",
    negative: "MockNegativeIcon",
    warning: "MockWarningIcon",
    neutral: "MockNeutralIcon"
  } satisfies typeof ATTENTION_BOX_DEFAULT_ICONS
}));

describe("iconUtils", () => {
  describe("resolveAttentionBoxIcon", () => {
    it("returns null when icon is false", () => {
      const result = resolveAttentionBoxIcon(false, "primary");
      expect(result).toBeNull();
    });

    it("returns custom icon when provided", () => {
      const result = resolveAttentionBoxIcon("test-icon", "primary");
      expect(result).toBe("test-icon");
    });

    it("returns default icon for type when no custom icon", () => {
      const result = resolveAttentionBoxIcon(undefined, "primary");
      expect(result).toBe(ATTENTION_BOX_DEFAULT_ICONS.primary);
    });

    it("returns default icon for primary type when no type specified", () => {
      const result = resolveAttentionBoxIcon(undefined, undefined);
      expect(result).toBe(ATTENTION_BOX_DEFAULT_ICONS.primary);
    });

    it("returns default icon for negative type when type negative is specified", () => {
      const result = resolveAttentionBoxIcon(undefined, "negative");
      expect(result).toBe(ATTENTION_BOX_DEFAULT_ICONS.negative);
    });

    it("prioritizes custom icon over default icon when type is provided", () => {
      const result = resolveAttentionBoxIcon("test-icon", "negative");
      expect(result).toBe("test-icon");
    });
  });
});
