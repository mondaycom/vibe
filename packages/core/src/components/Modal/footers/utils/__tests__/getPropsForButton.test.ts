import { getPropsForButton } from "../getPropsForButton";
import cx from "classnames";

describe("getPropsForButton", () => {
  it("should return undefined when button is undefined", () => {
    expect(getPropsForButton(undefined, "my-button-class")).toBeUndefined();
  });

  it("should apply buttonClassName to className when tooltipProps are not present", () => {
    const result = getPropsForButton({ className: "existing-class", text: "Click Me" }, "my-button-class");
    expect(result).toEqual({
      text: "Click Me",
      className: cx("existing-class", "my-button-class"),
      tooltipProps: undefined
    });
  });

  it("should apply buttonClassName to tooltipProps.referenceWrapperClassName when tooltipProps exist", () => {
    const result = getPropsForButton(
      { text: "Click Me", tooltipProps: { content: "Hello", referenceWrapperClassName: "tooltip-class" } },
      "my-button-class"
    );
    expect(result).toEqual({
      text: "Click Me",
      className: undefined,
      tooltipProps: { content: "Hello", referenceWrapperClassName: cx("tooltip-class", "my-button-class") }
    });
  });

  it("should keep className unchanged if tooltipProps exist", () => {
    const result = getPropsForButton(
      { className: "existing-class", text: "Click Me", tooltipProps: { content: "Hello" } },
      "my-button-class"
    );
    expect(result).toEqual({
      text: "Click Me",
      className: "existing-class",
      tooltipProps: { content: "Hello", referenceWrapperClassName: "my-button-class" }
    });
  });

  it("should attach the button className to button itself and return undefined tooltipProps if tooltip content is empty", () => {
    const result = getPropsForButton(
      {
        className: "existing-class",
        text: "Click Me",
        tooltipProps: { referenceWrapperClassName: "original-tooltip-class", content: "" }
      },
      "my-button-class"
    );
    expect(result).toEqual({
      text: "Click Me",
      className: cx("existing-class", "my-button-class"),
      tooltipProps: undefined
    });
  });
});
