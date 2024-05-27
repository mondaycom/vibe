import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import IconButton, { IconButtonProps } from "../IconButton";

jest.useFakeTimers();

const ariaLabel = "Button Icon";

const renderComponent = (props: IconButtonProps = {}) => {
  return render(<IconButton ariaLabel={ariaLabel} {...props} />);
};

describe("IconButton tests", () => {
  afterEach(() => {
    cleanup();
  });

  describe("click", () => {
    it("should call the callback function when clicked ", () => {
      const onClick = jest.fn();
      renderComponent({ onClick });
      const component = screen.getByLabelText(ariaLabel);
      fireEvent.click(component);
      expect(onClick.mock.calls.length).toBe(1);
    });

    it("should not call the callback if disabled when clicked ", () => {
      const onClick = jest.fn();
      renderComponent({ onClick, disabled: true });
      const component = screen.getByLabelText(ariaLabel);
      fireEvent.click(component);
      expect(onClick.mock.calls.length).toBe(0);
    });
  });

  describe("Tooltips", () => {
    it("should display the tooltip content", async () => {
      const tooltipContent = "My Text";

      renderComponent({ tooltipContent });
      const component = screen.getByLabelText(ariaLabel);
      act(() => {
        fireEvent.mouseEnter(component);
      });
      jest.advanceTimersByTime(1000);
      const content = screen.getByText(tooltipContent);
      expect(content).toBeTruthy();
      act(() => {
        fireEvent.mouseLeave(component);
      });
      jest.advanceTimersByTime(1000);
    });

    it("should display the tooltip with aria label", () => {
      renderComponent();
      const component = screen.getByLabelText(ariaLabel);
      act(() => {
        fireEvent.mouseEnter(component);
      });
      jest.advanceTimersByTime(1000);
      const content = screen.getByText(ariaLabel);
      expect(content).toBeTruthy();
      act(() => {
        fireEvent.mouseLeave(component);
      });
      jest.advanceTimersByTime(1000);
    });

    it("should display not disabledReason if disabled is false", () => {
      const disabledReason = "I'm a disabled button";

      renderComponent({ disabledReason });
      const component = screen.getByLabelText(ariaLabel);
      act(() => {
        fireEvent.mouseEnter(component);
      });
      jest.advanceTimersByTime(1000);
      const content = screen.queryByText(disabledReason);
      expect(content).toBeFalsy();
      act(() => {
        fireEvent.mouseLeave(component);
      });
      jest.advanceTimersByTime(1000);
    });

    it("should display disabledReason if disabled is true", () => {
      const disabledReason = "I'm a disabled button";

      renderComponent({ disabledReason, disabled: true });
      const component = screen.getByLabelText(ariaLabel);
      act(() => {
        fireEvent.mouseEnter(component);
      });
      jest.advanceTimersByTime(1000);
      const content = screen.queryByText(disabledReason);
      expect(content).toBeTruthy();
      act(() => {
        fireEvent.mouseLeave(component);
      });
      jest.advanceTimersByTime(1000);
    });
  });

  describe("a11y", () => {
    describe("aria-hidden", () => {
      it("should pass aria-hidden attribute to Button component", () => {
        const { getByRole } = renderComponent({ "aria-hidden": true });
        const buttonComponent = getByRole("button", { hidden: true });
        expect(buttonComponent).toHaveAttribute("aria-hidden", "true");
      });

      it("should not have aria-hidden attribute on Button component if not specified", () => {
        const { getByRole } = renderComponent();
        const buttonComponent = getByRole("button");
        expect(buttonComponent).not.toHaveAttribute("aria-hidden");
      });
    });
  });
});
