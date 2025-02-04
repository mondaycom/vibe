import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Tab, { TabProps } from "../Tab";

jest.useFakeTimers();

const onClickMock = jest.fn();
const text = "tab";

const renderComponent = (props: TabProps = {}) => {
  return render(
    <Tab onClick={onClickMock} {...props}>
      {text}
    </Tab>
  );
};

describe("Tab tests", () => {
  afterEach(() => {
    cleanup();
  });

  describe("click", () => {
    it("should call the click callback when clicked", () => {
      renderComponent();
      fireEvent.click(screen.getByText(text));
      expect(onClickMock.mock.calls.length).toBe(1);
    });
  });

  describe("Tooltips", () => {
    it("should display tooltip content from tooltipProps", () => {
      const tooltipContent = "My Text";
      const tooltipProps = { content: tooltipContent };

      renderComponent({ tooltipProps });
      const component = screen.getByText(text);
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
  });
});
