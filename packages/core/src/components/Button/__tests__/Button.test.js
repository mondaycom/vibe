import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import Button from "../Button";

const text = "Click Me!";

describe("<Button />", () => {
  afterEach(() => {
    cleanup();
  });

  describe("click", () => {
    let clickActionStub;
    let onMouseDownStub;
    let buttonComponent;

    beforeEach(() => {
      clickActionStub = jest.fn();
      onMouseDownStub = jest.fn();
      buttonComponent = render(
        <Button onClick={clickActionStub} onMouseDown={onMouseDownStub}>
          {text}
        </Button>
      );
    });

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
        waitFor(() => {
          fireEvent.click(getByRole("alert"));
          expect(clickActionStub.mock.calls.length).toEqual(0);
        });
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
    const { getByText } = render(<Button onBlur={onBlur}>{text}</Button>);
    const button = getByText(text);
    fireEvent.blur(button);
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  it("should call do blur on mouseup", () => {
    const onBlur = jest.fn();
    const { getByText } = render(
      <Button onBlur={onBlur} blurOnMouseUp={false}>
        {text}
      </Button>
    );
    const button = getByText(text);
    fireEvent.focus(button);
    fireEvent.mouseUp(button);
    expect(button).not.toHaveFocus;
  });

  it("should call on focus", () => {
    const onFocus = jest.fn();
    const { getByText } = render(<Button onFocus={onFocus}>{text}</Button>);
    const button = getByText(text);
    fireEvent.focus(button);
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  describe("mouse down", () => {
    const onClick = jest.fn();
    it("should call the click callback when clicked", () => {
      const { getByText } = render(<Button onClick={onClick}>{text}</Button>);
      fireEvent.mouseDown(getByText(text));
      expect(onClick).not.toBeCalled();
    });

    it("should call mouse down callback", () => {
      const onMouseDown = jest.fn();
      const { getByText } = render(
        <Button onClick={onClick} onMouseDown={onMouseDown}>
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
      const onClick = jest.fn();
      const { getByLabelText } = render(
        <Button ariaLabel={ariaLabel} onClick={onClick}>
          {text}
        </Button>
      );
      const buttonElement = getByLabelText(ariaLabel);
      fireEvent.click(buttonElement);
      expect(onClick.mock.calls.length).toEqual(1);
    });

    it("should apply aria-hidden attribute to button", () => {
      const { getByRole } = render(<Button aria-hidden>{text}</Button>);
      const buttonElement = getByRole("button", { hidden: true });
      expect(buttonElement).toHaveAttribute("aria-hidden", "true");
    });

    it("should not apply aria-hidden attribute to button", () => {
      const { getByRole } = render(<Button>{text}</Button>);
      const buttonElement = getByRole("button");
      expect(buttonElement).not.toHaveAttribute("aria-hidden");
    });
  });
});
