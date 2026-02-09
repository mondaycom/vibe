import { describe, it, expect } from "vitest";
import { cleanUpAccessibilityContent } from "../extract-accessibility.js";

describe("cleanUpAccessibilityContent", () => {
  describe("UsageGuidelines extraction", () => {
    it("should extract numbered guidelines from quoted strings", () => {
      const content = `<UsageGuidelines guidelines={[
        "Use labels for all interactive elements",
        "Ensure color contrast meets WCAG AA"
      ]} />`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toBe(
        "1. Use labels for all interactive elements\n2. Ensure color contrast meets WCAG AA"
      );
    });

    it("should extract guidelines wrapped in React fragments", () => {
      const content = `<UsageGuidelines guidelines={[
        <>First guideline text</>,
        <>Second guideline text</>
      ]} />`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toBe("1. First guideline text\n2. Second guideline text");
    });

    it("should convert <code> tags to backticks within guidelines", () => {
      const content = `<UsageGuidelines guidelines={[
        <>Use the <code>aria-label</code> prop for accessibility</>
      ]} />`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toContain("`aria-label`");
      expect(result).not.toContain("<code>");
      expect(result).not.toContain("</code>");
    });

    it("should handle mixed quoted strings and React fragments", () => {
      const content = `<UsageGuidelines guidelines={[
        "Simple string guideline",
        <>Fragment with <code>code</code> inside</>
      ]} />`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toContain("1. Simple string guideline");
      expect(result).toContain("2. Fragment with `code` inside");
    });

    it("should number guidelines sequentially", () => {
      const content = `<UsageGuidelines guidelines={[
        "First",
        "Second",
        "Third"
      ]} />`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toBe("1. First\n2. Second\n3. Third");
    });

    it("should skip whitespace-only React fragment guidelines", () => {
      const content = `<UsageGuidelines guidelines={[
        <>Valid guideline</>,
        <>   </>,
        <>Another valid guideline</>
      ]} />`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toBe("1. Valid guideline\n2. Another valid guideline");
    });
  });

  describe("fallback cleanup", () => {
    it("should remove UsageGuidelines JSX components", () => {
      const content = `Some text before\n<UsageGuidelines someProp="value" />\nSome text after`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).not.toContain("UsageGuidelines");
      expect(result).toContain("Some text before");
      expect(result).toContain("Some text after");
    });

    it("should replace <code> tags with backticks in fallback mode", () => {
      const content = `Use the <code>role</code> attribute for elements.`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toBe("Use the `role` attribute for elements.");
    });

    it("should remove React fragment tags in fallback mode", () => {
      const content = `<>Some content inside fragments</>`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).toBe("Some content inside fragments");
    });

    it("should remove lines with only brackets or punctuation", () => {
      const content = `Valid content\n  [\n  ]\nMore valid content`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).not.toMatch(/^\s*[\[\]]\s*$/m);
      expect(result).toContain("Valid content");
      expect(result).toContain("More valid content");
    });

    it("should reduce multiple empty lines to double newlines", () => {
      const content = `First paragraph\n\n\n\nSecond paragraph`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).not.toContain("\n\n\n");
      expect(result).toContain("First paragraph\n\nSecond paragraph");
    });

    it("should return fallback message for empty content", () => {
      const result = cleanUpAccessibilityContent("");

      expect(result).toBe("No accessibility guidelines found in expected format.");
    });

    it("should return fallback message for whitespace-only content", () => {
      const result = cleanUpAccessibilityContent("   \n  \n   ");

      expect(result).toBe("No accessibility guidelines found in expected format.");
    });

    it("should remove guidelines= attribute syntax in fallback mode", () => {
      const content = `Some preamble\nguidelines={something}\nAfter text`;

      const result = cleanUpAccessibilityContent(content);

      expect(result).not.toContain("guidelines=");
      expect(result).toContain("Some preamble");
      expect(result).toContain("After text");
    });
  });
});
