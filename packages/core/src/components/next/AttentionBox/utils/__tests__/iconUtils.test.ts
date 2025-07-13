import { describe, it, expect, vi } from "vitest";
import { resolveAttentionBoxIcon } from "../iconUtils";
import { ATTENTION_BOX_DEFAULT_ICONS } from "../../consts/icons";

vi.mock("../../consts/icons", () => ({
  ATTENTION_BOX_DEFAULT_ICONS: {
    primary: "MockPrimaryIcon",
    success: "MockSuccessIcon",
    danger: "MockDangerIcon",
    warning: "MockWarningIcon",
    dark: "MockDarkIcon"
  } satisfies typeof ATTENTION_BOX_DEFAULT_ICONS
}));

describe("iconUtils", () => {
  describe("resolveAttentionBoxIcon", () => {
    it("returns null when hideIcon is true", () => {
      const result = resolveAttentionBoxIcon("test-icon", true, "primary");
      expect(result).toBeNull();
    });

    it("returns custom icon when provided", () => {
      const result = resolveAttentionBoxIcon("test-icon", false, "primary");
      expect(result).toBe("test-icon");
    });

    it("returns default icon for type when no custom icon", () => {
      const result = resolveAttentionBoxIcon(undefined, false, "primary");
      expect(result).toBe(ATTENTION_BOX_DEFAULT_ICONS.primary);
    });

    it("returns default icon for primary type when no type specified", () => {
      const result = resolveAttentionBoxIcon(undefined, false, undefined);
      expect(result).toBe(ATTENTION_BOX_DEFAULT_ICONS.primary);
    });

    it("returns default icon for danger type when type danger is specified", () => {
      const result = resolveAttentionBoxIcon(undefined, false, "danger");
      expect(result).toBe(ATTENTION_BOX_DEFAULT_ICONS.danger);
    });

    it("prioritizes custom icon over default icon when type is provided", () => {
      const result = resolveAttentionBoxIcon("test-icon", false, "danger");
      expect(result).toBe("test-icon");
    });
  });
});
