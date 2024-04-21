import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BaseInput from "../BaseInput";
import { BaseInputProps } from "../BaseInput.types";

function renderBaseInput(props?: Partial<BaseInputProps>) {
  return render(<BaseInput aria-label="base-input" {...props} />);
}

describe("BaseInput", () => {
  it("should render correctly", () => {
    const { getByLabelText } = renderBaseInput();
    expect(getByLabelText("base-input")).toBeInTheDocument();
  });

  describe("with declared props", () => {
    it("should apply the size class", () => {
      const { getByLabelText } = renderBaseInput({ size: "large" });
      expect(getByLabelText("base-input").parentNode).toHaveClass("large");
    });

    it("should show left and right elements when provided", () => {
      const renderLeft = <div>Left</div>;
      const renderRight = <div>Right</div>;
      const { getByText } = renderBaseInput({ renderLeft, renderRight });

      expect(getByText("Left")).toBeInTheDocument();
      expect(getByText("Right")).toBeInTheDocument();
    });

    it("should apply the success class", () => {
      const { getByLabelText } = renderBaseInput({ success: true });
      expect(getByLabelText("base-input").parentNode).toHaveClass("success");
    });

    it("should apply wrapper and input role correctly", () => {
      const { getByRole } = renderBaseInput({ wrapperRole: "search", inputRole: "combobox" });
      expect(getByRole("search")).toBeInTheDocument();
      expect(getByRole("combobox")).toBeInTheDocument();
    });

    it("should apply the className for input and wrapperClassName for wrapper", () => {
      const { getByLabelText } = renderBaseInput({ className: "customWrapper", inputClassName: "inputClass" });
      expect(getByLabelText("base-input")).toHaveClass("inputClass");
      expect(getByLabelText("base-input").parentNode).toHaveClass("customWrapper");
    });

    it("should forward ref to the input element", () => {
      const ref = React.createRef<HTMLInputElement>();
      const { getByLabelText } = render(<BaseInput aria-label="input-base" ref={ref} />);
      expect(ref.current).toBe(getByLabelText("input-base"));
    });
  });

  describe("a11y", () => {
    it("should not apply aria-invalid when error prop is not supplied", () => {
      const { getByLabelText } = renderBaseInput();
      expect(getByLabelText("base-input")).not.toHaveAttribute("aria-invalid");
    });

    it("should apply aria-invalid when error prop is supplied", () => {
      const { getByLabelText } = renderBaseInput({ error: true });
      expect(getByLabelText("base-input")).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("interactions", () => {
    it("should capture user input correctly", () => {
      const expectedValue = "Hello, World!";
      const { getByLabelText } = renderBaseInput();
      const input = getByLabelText("base-input");
      userEvent.type(input, expectedValue);
      expect(input).toHaveValue(expectedValue);
    });

    it("should call onChange on every input", () => {
      const expectedValue = "Hello, World!";
      const onChange = jest.fn();
      const { getByLabelText } = renderBaseInput({ onChange });
      const input = getByLabelText("base-input");
      userEvent.type(input, expectedValue);
      expect(onChange).toHaveBeenCalledTimes(expectedValue.length);
    });

    it("should handle focus and blur events", () => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      const { getByLabelText } = renderBaseInput({ onFocus, onBlur });
      const input = getByLabelText("base-input");
      userEvent.click(input);
      expect(onFocus).toHaveBeenCalled();
      userEvent.tab();
      expect(onBlur).toHaveBeenCalled();
    });

    it("should handle key down and up", () => {
      const onEnterDown = jest.fn();
      const onKeyDown = (e: React.KeyboardEvent) => e.key === "Enter" && onEnterDown();
      const onEnterUp = jest.fn();
      const onKeyUp = (e: React.KeyboardEvent) => e.key === "Enter" && onEnterUp();
      const { getByLabelText } = renderBaseInput({ onKeyDown, onKeyUp });

      const input = getByLabelText("base-input");
      userEvent.type(input, "{enter}");
      expect(onEnterDown).toHaveBeenCalled();
      expect(onEnterUp).toHaveBeenCalled();
    });
  });
});
