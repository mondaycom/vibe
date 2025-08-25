import { vi, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Tab, { type TabProps } from "../Tab";

vi.useFakeTimers();

const onClickMock = vi.fn();
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
      vi.advanceTimersByTime(1000);
      const content = screen.getByText(tooltipContent);
      expect(content).toBeTruthy();
      act(() => {
        fireEvent.mouseLeave(component);
      });
      vi.advanceTimersByTime(1000);
    });
  });

  describe("aria-controls", () => {
    it("should add aria-controls attribute when id and ariaControls are provided", () => {
      const tabId = "test-tab";
      const panelId = "test-panel";

      renderComponent({ id: tabId, ariaControls: panelId });
      const tabElement = screen.getByRole("tab");
      expect(tabElement).toHaveAttribute("aria-controls", panelId);
    });

    it("should not add aria-controls attribute when id is missing", () => {
      const panelId = "test-panel";

      renderComponent({ ariaControls: panelId });
      const tabElement = screen.getByRole("tab");
      expect(tabElement).not.toHaveAttribute("aria-controls");
    });

    it("should not add aria-controls attribute when ariaControls is missing", () => {
      const tabId = "test-tab";

      renderComponent({ id: tabId });
      const tabElement = screen.getByRole("tab");
      expect(tabElement).not.toHaveAttribute("aria-controls");
    });

    it("should not add aria-controls attribute when both id and ariaControls are missing", () => {
      renderComponent();
      const tabElement = screen.getByRole("tab");
      expect(tabElement).not.toHaveAttribute("aria-controls");
    });
  });
});
