import {
  ALLOWED_COLORS,
  EXCEPTIONAL_ICONS,
  extractColorsFromSvg,
  isEligibleForValidation,
  validateColors
} from "../icons/utils";

const mockRealSVGInvalid = `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6413 4.31058C11.6411 4.31074 11.6414 4.31043 11.6413 4.31058L10.1221 5.82974L14.5799 10.2875L16.0991 8.76837C16.0992 8.76824 16.0989 8.7685 16.0991 8.76837C16.1376 8.72937 16.1597 8.67635 16.1597 8.62149C16.1597 8.56664 16.138 8.514 16.0995 8.47501C16.0993 8.47488 16.0996 8.47514 16.0995 8.47501L11.935 4.31058C11.9349 4.31045 11.9352 4.31071 11.935 4.31058C11.896 4.27202 11.843 4.25 11.7882 4.25C11.7333 4.25 11.6803 4.27207 11.6413 4.31058ZM13.696 11.1714L9.23825 6.71362L3.31058 12.6413C3.31043 12.6414 3.31074 12.6411 3.31058 12.6413C3.27207 12.6803 3.25 12.7333 3.25 12.7882C3.25 12.843 3.27164 12.8957 3.3102 12.9346C3.31033 12.9348 3.31007 12.9345 3.3102 12.9346L6.45954 16.084H8.78344L13.696 11.1714ZM10.5512 16.084L16.9843 9.65094L16.9856 9.64962C17.2572 9.37638 17.4097 9.00676 17.4097 8.62149C17.4097 8.23622 17.2572 7.86661 16.9856 7.59337L12.8176 3.42538L12.8163 3.42407C12.543 3.15246 12.1734 3 11.7882 3C11.4029 3 11.0333 3.15246 10.76 3.42407L10.7587 3.42539L2.42539 11.7587L2.42407 11.76C2.15246 12.0333 2 12.4029 2 12.7882C2 13.1734 2.15246 13.543 2.42407 13.8163L2.42539 13.8176L5.75872 17.1509C5.87593 17.2681 6.0349 17.334 6.20066 17.334H15.3673C15.7125 17.334 15.9923 17.0542 15.9923 16.709C15.9923 16.3638 15.7125 16.084 15.3673 16.084H10.5512Z" fill="#676879"/>
    </svg>
  `;

const mockSVGInvalid = `
    <svg fill="currentColor" stroke="none">
      <rect fill="currentColor" stroke="blue"/>
      <circle fill="none" stroke="#123456"/>
      <path fill="green" stroke="none"/>
    </svg>
  `;

const mockSVGValid = `
    <svg fill="none" stroke="currentColor">
      <path stroke="none"/>
      <rect fill="currentColor" stroke="currentColor"/>
      <circle fill="none" stroke="currentColor"/>
    </svg>
  `;

const mockSVGWithoutColors = `
      <svg>
        <path />
        <circle />
      </svg>
    `;

describe("validate-icons-colors", () => {
  describe("isEligibleForValidation", () => {
    it("should return true for a valid svg file", () => {
      expect(isEligibleForValidation("valid-icon.svg")).toBe(true);
    });

    it("should return false for an svg file in the EXCEPTIONAL_ICONS list", () => {
      expect(isEligibleForValidation(EXCEPTIONAL_ICONS[0])).toBe(false);
    });

    it("should return false for a non-svg file", () => {
      expect(isEligibleForValidation("not-an-svg.png")).toBe(false);
    });
  });

  describe("validateColors", () => {
    const disallowedColors = ["red", "#123456", "helloworld"];
    disallowedColors.forEach(color => {
      it(`should throw an error for disallowed color ${disallowedColors}`, () => {
        const colors = [
          { attribute: "fill", color: "currentColor" },
          { attribute: "stroke", color }
        ];
        const svgFileName = "valid-icon.svg";
        expect(() => validateColors(colors, svgFileName)).toThrow();
      });
    });

    const allowedColors = ALLOWED_COLORS;
    allowedColors.forEach(color => {
      it(`should not throw an error for allowed color ${color}`, () => {
        const colors = [
          { attribute: "fill", color },
          { attribute: "stroke", color: "none" }
        ];
        const svgFileName = "valid-icon.svg";
        expect(() => validateColors(colors, svgFileName)).not.toThrow();
      });
    });

    it("should throw an error for disallowed colors", () => {
      const colors = [{ attribute: "fill", color: "#123456" }];
      const svgFileName = "invalid-icon.svg";
      expect(() => validateColors(colors, svgFileName)).toThrowErrorMatchingSnapshot();
    });
  });

  describe("extractColorsFromSvg", () => {
    it("should extract colors from an invalid svg", () => {
      const colors = extractColorsFromSvg(mockSVGInvalid);
      const expectedColors = [
        { attribute: "fill", color: "currentColor" },
        { attribute: "stroke", color: "none" },
        { attribute: "fill", color: "currentColor" },
        { attribute: "stroke", color: "blue" },
        { attribute: "fill", color: "none" },
        { attribute: "stroke", color: "#123456" },
        { attribute: "fill", color: "green" },
        { attribute: "stroke", color: "none" }
      ];
      expect(colors).toEqual(expectedColors);
    });

    it("should extract colors from a valid svg", () => {
      const colors = extractColorsFromSvg(mockSVGValid);
      const expectedColors = [
        { attribute: "fill", color: "none" },
        { attribute: "stroke", color: "currentColor" },
        { attribute: "stroke", color: "none" },
        { attribute: "fill", color: "currentColor" },
        { attribute: "stroke", color: "currentColor" },
        { attribute: "fill", color: "none" },
        { attribute: "stroke", color: "currentColor" }
      ];
      expect(colors).toEqual(expectedColors);
    });

    it("should extract colors from a real invalid svg", () => {
      const colors = extractColorsFromSvg(mockRealSVGInvalid);
      const expectedColors = [
        { attribute: "fill", color: "none" },
        { attribute: "fill", color: "#676879" }
      ];
      expect(colors).toEqual(expectedColors);
    });

    it("should handle SVG without color attributes", () => {
      const colors = extractColorsFromSvg(mockSVGWithoutColors);
      expect(colors).toEqual([]);
    });
  });
});
