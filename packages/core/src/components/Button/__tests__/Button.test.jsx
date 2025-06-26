import { vi, beforeEach, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import Button from "../Button";

const text = "Click Me!";

describe("<Button />", () => {
  afterEach(() => {
    cleanup();
  });

  describe("children", () => {
    it("should render a single child correctly", () => {
      const { getByText } = render(<Button>Renderable Child</Button>);
      const button = getByText("Renderable Child");
      expect(button).toBeInTheDocument();
    });

    it("should not render a single child if it is not applicable", () => {
      const { container } = render(<Button>{null}</Button>);
      expect(container.firstChild).toBeEmptyDOMElement();
    });

    it("should render multiple children correctly", () => {
      const { getByText } = render(
        <Button>
          <span>Child 1</span>
          <span>Child 2</span>
        </Button>
      );
      expect(getByText("Child 1")).toBeInTheDocument();
      expect(getByText("Child 2")).toBeInTheDocument();
    });

    it("should not render children if all are non-renderable", () => {
      const { container } = render(
        <Button>
          {false}
          {null}
          {undefined}
        </Button>
      );
      expect(container.firstChild).toBeEmptyDOMElement();
    });

    it("should add leftIcon className when children are renderable", () => {
      const { getByTestId } = render(<Button leftIcon="icon">Child</Button>);
      expect(getByTestId("icon")).toHaveClass("leftIcon");
    });

    it("should not add leftIcon className when children are non-renderable", () => {
      const { getByTestId } = render(
        <Button leftIcon="icon">
          {false}
          {null}
          {undefined}
        </Button>
      );
      expect(getByTestId("icon")).not.toHaveClass("leftIcon");
    });
  });

  describe("click", () => {
    let clickActionStub;
    let onMouseDownStub;
    let buttonComponent;

    beforeEach(() => {
      clickActionStub = vi.fn();
      onMouseDownStub = vi.fn();
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
        expect(getByText(text)).toHaveAttribute("aria-disabled", "true");
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
    const onBlur = vi.fn();
    const { getByText } = render(<Button onBlur={onBlur}>{text}</Button>);
    const button = getByText(text);
    fireEvent.blur(button);
    expect(onBlur.mock.calls.length).toEqual(1);
  });

  it("should call do blur on mouseup", () => {
    const onBlur = vi.fn();
    const { getByText } = render(
      <Button onBlur={onBlur} blurOnMouseUp={false}>
        {text}
      </Button>
    );
    const button = getByText(text);
    fireEvent.focus(button);
    fireEvent.mouseUp(button);
    expect(button).not.toHaveFocus();
  });

  it("should call on focus", () => {
    const onFocus = vi.fn();
    const { getByText } = render(<Button onFocus={onFocus}>{text}</Button>);
    const button = getByText(text);
    fireEvent.focus(button);
    expect(onFocus.mock.calls.length).toEqual(1);
  });

  describe("mouse down", () => {
    const onClick = vi.fn();
    it("should call the click callback when clicked", () => {
      const { getByText } = render(<Button onClick={onClick}>{text}</Button>);
      fireEvent.mouseDown(getByText(text));
      expect(onClick).not.toBeCalled();
    });

    it("should call mouse down callback", () => {
      const onMouseDown = vi.fn();
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
      const onClick = vi.fn();
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
