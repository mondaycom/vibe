import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Button from "../Button";

const text = "Click Me!";
const className = "test-class";

function renderComponent(props) {
  return render(<Button {...props}>{text}</Button>);
}

describe("<Buttoon />", () => {
  let clickActionStub;
  let onMouseDownStub;
  let buttonComponent;

  beforeEach(() => {
    clickActionStub = jest.fn();
    onMouseDownStub = jest.fn();
    buttonComponent = render(
      <Button className={className} onClick={clickActionStub} onMouseDown={onMouseDownStub}>
        {text}
      </Button>
    );
  });

  afterEach(() => {
    cleanup();
  });
  describe("click", () => {
    it("should call the click callback when clicked", () => {
      const { getByText } = buttonComponent;
      fireEvent.click(getByText(text));
      expect(clickActionStub.mock.calls.length).toEqual(1);
    });

    describe("disabled click", () => {
      it("should be disabled in the dom", () => {
        const { rerender, getByText } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} disabled>
            {text}
          </Button>
        );
        expect(getByText(text)).toBeDisabled;
      });

      it("should not call the callback if disabled", () => {
        const { rerender, getByText } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} disabled>
            {text}
          </Button>
        );
        fireEvent.click(getByText(text));
        expect(clickActionStub.mock.calls.length).toEqual(0);
      });

      it("should not call the callback on loading", () => {
        const { rerender, getByRole } = buttonComponent;
        rerender(
          <Button onClick={clickActionStub} loading>
            {text}
          </Button>
        );
        fireEvent.click(getByRole("alert"));
        expect(clickActionStub.mock.calls.length).toEqual(0);
      });

      describe("Success", () => {
        it("should not display the successText if not success", () => {
          const { rerender, queryByText } = buttonComponent;
          const successText = "Done!";
          rerender(
            <Button onClick={clickActionStub} successText={successText}>
              {text}
            </Button>
          );
          const element = queryByText(successText);
          expect(element).toEqual(null);
        });

        it("should not call the callback if success", () => {
          const { rerender, getByText } = buttonComponent;
          const successText = "Done!";
          rerender(
            <Button onClick={clickActionStub} success successText={successText}>
              {text}
            </Button>
          );
          fireEvent.click(getByText(successText));
          expect(clickActionStub.mock.calls.length).toEqual(0);
        });
      });
    });
  });

  it("should call on blur", () => {
    const onBlur = jest.fn();
    cleanup();
    const { getByText } = renderComponent({ onBlur });
    const button = getByText(text);
    fireEvent.blur(button);
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  it("should call do blur on mouseup", () => {
    const onBlur = jest.fn();
    cleanup();
    const { getByText } = renderComponent({ onBlur, blurOnMouseUp: false });
    const button = getByText(text);
    fireEvent.focus(button);
    fireEvent.mouseUp(button);
    expect(button).not.toHaveFocus;
  });

  it("should call on focus", () => {
    const onFocus = jest.fn();
    cleanup();
    const { getByText } = renderComponent({ onFocus });
    const button = getByText(text);
    fireEvent.focus(button);
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  describe("mouse down", () => {
    it("should call the click callback when clicked", () => {
      const { getByText } = buttonComponent;
      fireEvent.mouseDown(getByText(text));
      expect(clickActionStub.mock.calls.length).toEqual(0);
    });

    it("should call mouse down callback", () => {
      const { getByText, rerender } = buttonComponent;
      const onMouseDown = jest.fn();
      rerender(
        <Button onClick={clickActionStub} onMouseDown={onMouseDown}>
          {text}
        </Button>
      );
      fireEvent.mouseDown(getByText(text));
      expect(onMouseDown.mock.calls.length).toEqual(1);
    });
  });
  describe("a11y", () => {
    it("Aria label should be connected to the button", () => {
      const ariaLabel = "Icon Name";
      const { getByLabelText } = render(
        <Button ariaLabel={ariaLabel} className={className} onClick={clickActionStub} onMouseDown={onMouseDownStub}>
          {text}
        </Button>
      );
      const buttonElement = getByLabelText(ariaLabel);
      fireEvent.click(buttonElement);
      expect(clickActionStub.mock.calls.length).toEqual(1);
    });
  });
});
