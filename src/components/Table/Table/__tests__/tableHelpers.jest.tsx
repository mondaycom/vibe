import { generateWidth } from "../tableHelpers";

describe("tableHelpers", () => {
  describe("generateWidth", () => {
    it("should convert numbers to string with px unit", () => {
      expect(generateWidth(100)).toBe("100px");
    });

    it("should accept percentage strings without modification", () => {
      expect(generateWidth("25%")).toBe("25%");
    });

    it("should accept pixel strings without modification", () => {
      expect(generateWidth("150px")).toBe("150px");
    });

    it("should accept fraction strings without modification", () => {
      expect(generateWidth("3fr")).toBe("3fr");
    });

    it("should handle minmax with different units", () => {
      expect(generateWidth({ min: 50, max: 75 })).toBe("minmax(50px, 75px)");
    });

    it("should handle minmax with different units", () => {
      expect(generateWidth({ min: 50, max: "75%" })).toBe("minmax(50px, 75%)");
    });

    it("should handle minmax with different units", () => {
      expect(generateWidth({ min: "50%", max: "75%" })).toBe("minmax(50%, 75%)");
    });

    it("should return default minmax for undefined width", () => {
      expect(generateWidth(undefined)).toBe("minmax(112px, 1fr)");
    });

    it("should return default minmax for null width", () => {
      expect(generateWidth(null)).toBe("minmax(112px, 1fr)");
    });
  });
});
