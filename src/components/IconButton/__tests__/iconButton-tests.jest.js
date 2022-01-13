import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import IconButton from "../IconButton";

jest.useFakeTimers();

const renderComponent = props => {
  return render(<IconButton {...props} />);
};

describe("IconButton tests", () => {
  afterEach(() => {
    cleanup();
  });

  describe("click", () => {
    it("should call the callback function when clicked ", () => {
      const onClick = jest.fn();
      const ariaLabel = "Button Icon";
      renderComponent({ onClick, ariaLabel });
      const component = screen.getByLabelText(ariaLabel);
      fireEvent.click(component);
      expect(onClick.mock.calls.length).toBe(1);
    });

    it("should not call the callback if disabled when clicked ", () => {
      const onClick = jest.fn();
      const ariaLabel = "Button Icon";
      renderComponent({ onClick, ariaLabel, disabled: true });
      const component = screen.getByLabelText(ariaLabel);
      fireEvent.click(component);
      expect(onClick.mock.calls.length).toBe(0);
    });
  });

  describe("Tooltips", () => {
    it("should display the tooltip content", () => {
      const tooltipContent = "My Text";
      const ariaLabel = "Button Icon";

      renderComponent({ tooltipContent, ariaLabel });
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
      const ariaLabel = "Button Icon";

      renderComponent({ ariaLabel });
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
      const ariaLabel = "Button Icon";
      const disabledReason = "I'm a disabled button";

      renderComponent({ ariaLabel, disabledReason });
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
      const ariaLabel = "Button Icon";
      const disabledReason = "I'm a disabled button";

      renderComponent({ ariaLabel, disabledReason, disabled: true });
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
});
