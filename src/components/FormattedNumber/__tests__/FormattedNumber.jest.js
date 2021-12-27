import React from "react";
import { render, cleanup } from "@testing-library/react";
import FormattedNumber from "../FormattedNumber";

describe("FormattedNumber Tests", () => {
  beforeEach(() => cleanup());
  afterEach(() => cleanup());

  describe("emptyPlaceHolder", () => {
    it("no props where provided", () => {
      const { getByText } = render(<FormattedNumber id="test" />);
      expect(getByText("N/A")).toBeTruthy();
    });

    it("invalid value - empty string", () => {
      const { getByText } = render(<FormattedNumber id="test" value={" "} />);
      expect(getByText("N/A")).toBeTruthy();
    });

    it("invalid value - mixed content", () => {
      const { getByText } = render(<FormattedNumber id="test" value="a1s2d" />);
      expect(getByText("N/A")).toBeTruthy();
    });

    it("invalid value - mixed content", () => {
      const emptyPlaceHolderText = "Test";
      const { getByText } = render(<FormattedNumber id="test" emptyPlaceHolder={emptyPlaceHolderText} />);
      expect(getByText(emptyPlaceHolderText)).toBeTruthy();
    });
  });

  describe("Correct format", () => {
    const smallNumber = 98;
    const largeNumber = 987654321;
    const decimalNumber = 987654321.123456;

    it("should format small number without sign", () => {
      const expectedText = "98";
      const { getByText } = render(<FormattedNumber id="test" value={smallNumber} />);
      expect(getByText(expectedText)).toBeTruthy();
    });

    it("should format large number with sign", () => {
      const expectedText = "987.6543M";
      const { getByText } = render(<FormattedNumber id="test" value={largeNumber} decimalPrecision={4} />);
      expect(getByText(expectedText)).toBeTruthy();
    });

    it("should format large number without sign", () => {
      const expectedText = "987,654,321";
      const { getByText } = render(<FormattedNumber id="test" value={largeNumber} compact={false} />);
      expect(getByText(expectedText)).toBeTruthy();
    });

    it("should format large number without sign and limited decimal numbers", () => {
      const expectedText = "987,654,321.123";
      const { getByText } = render(
        <FormattedNumber id="test" value={decimalNumber} compact={false} decimalPrecision={3} />
      );
      expect(getByText(expectedText)).toBeTruthy();
    });

    it("should format with MIN precision for precision below MIN", () => {
      const expectedText = "987,654,321";
      const { getByText } = render(
        <FormattedNumber id="test" value={decimalNumber} compact={false} decimalPrecision={-10} />
      );
      expect(getByText(expectedText)).toBeTruthy();
    });

    it("should format with MAX precision for precision above MAX", () => {
      const expectedText = "987,654,321.123456";
      const { getByText } = render(
        <FormattedNumber id="test" value={decimalNumber} compact={false} decimalPrecision={50} />
      );
      expect(getByText(expectedText)).toBeTruthy();
    });
  });

  describe("local support", () => {
    const value = 456;

    it("should use handle unsupported local", () => {
      const badLocal = "bad";
      const { getByText } = render(<FormattedNumber id="test" value={value} local={badLocal} />);
      expect(getByText("456")).toBeTruthy();
    });
  });

  describe("forward ref", () => {
    it("should be able to forward ref", () => {
      const ref = React.createRef();
      render(<FormattedNumber ref={ref} id="test" className="ref-class-name" value={1248} />);
      expect(ref.current.classList.contains("ref-class-name")).toEqual(true);
    });
  });

  describe("Prefix && Suffix", () => {
    const value = 456;
    const prefix = "pref";
    const suffix = "suf";

    it("should render predix and suffix in the correct order if provided", () => {
      const { container } = render(<FormattedNumber id="test" value={value} prefix={prefix} suffix={suffix} />);
      const { childNodes } = container.firstChild;

      expect(childNodes.length).toBe(3);
      expect(childNodes[0].textContent).toBe(prefix);
      expect(childNodes[2].textContent).toBe(suffix);
    });

    it("should render rtl", () => {
      const { container } = render(
        <FormattedNumber id="test" value={value} prefix={prefix} suffix={suffix} rtl={true} />
      );
      const { childNodes } = container.firstChild;

      expect(childNodes.length).toBe(3);
      expect(childNodes[0].textContent).toBe(suffix);
      expect(childNodes[2].textContent).toBe(prefix);
    });
  });
});
