import { vi, describe, it, expect } from "vitest";
import React, { createRef } from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BaseMenuItem from "../BaseMenuItem";
import useMenuItemMouseEvents from "../../../hooks/useMenuItemMouseEvents";
import {
  mockRequestAnimationFrame,
  restoreRequestAnimationFrameMock
} from "../../../../../../tests/__tests__/test-utils";

vi.mock("../../MenuItemSubMenu/MenuItemSubMenu", () => ({
  __esModule: true,
  default: React.forwardRef(({ children }: { children: React.ReactElement }, _ref: React.ForwardedRef<HTMLElement>) =>
    React.createElement("div", { "data-testid": "menu-item-sub-menu" }, children)
  )
}));

vi.mock("../../MenuItemSubMenuIcon/MenuItemSubMenuIcon", () => ({
  __esModule: true,
  default: React.forwardRef(() =>
    React.createElement("div", { "data-testid": "menu-item-sub-menu-icon" }, "Sub Menu Icon")
  )
}));

vi.mock("../../../hooks/useMenuItemMouseEvents");
const mockUseMenuItemMouseEvents = vi.mocked(useMenuItemMouseEvents);

describe("BaseMenuItem", () => {
  it("should render correctly with provided props", () => {
    const { container } = render(
      <BaseMenuItem className="test-class" id="test-id">
        <div>Child Content</div>
      </BaseMenuItem>
    );
    expect(container.querySelector("li")).toHaveClass("test-class");
    expect(container.querySelector("li")).toHaveAttribute("id", "test-id");
    expect(screen.getByText("Child Content")).toBeInTheDocument();
  });

  it("should handle click events and call onClick prop", () => {
    const mockOnClick = vi.fn();
    const mockCloseMenu = vi.fn();

    mockUseMenuItemMouseEvents.mockReturnValueOnce(true);
    mockRequestAnimationFrame();

    render(
      <BaseMenuItem
        onClick={mockOnClick}
        setActiveItemIndex={vi.fn()}
        setSubMenuIsOpenByIndex={vi.fn()}
        closeMenu={mockCloseMenu}
        activeItemIndex={0}
        index={0}
      >
        <div>Clickable Content</div>
      </BaseMenuItem>
    );
    fireEvent.click(screen.getByText("Clickable Content"));
    restoreRequestAnimationFrameMock();
    expect(mockOnClick).toHaveBeenCalled();
    expect(mockCloseMenu).toHaveBeenCalled();
  });

  it("should trigger onMouseEnter and onMouseLeave events", () => {
    const mockOnMouseEnter = vi.fn();
    const mockOnMouseLeave = vi.fn();

    const { getByText } = render(
      <BaseMenuItem onMouseEnter={mockOnMouseEnter} onMouseLeave={mockOnMouseLeave}>
        <div>Content</div>
      </BaseMenuItem>
    );

    fireEvent.mouseEnter(getByText("Content"));
    expect(mockOnMouseEnter).toHaveBeenCalled();

    fireEvent.mouseLeave(getByText("Content"));
    expect(mockOnMouseLeave).toHaveBeenCalled();
  });

  it("should conditionally render the submenu icon and submenu", () => {
    const { getByTestId, getByText } = render(
      <BaseMenuItem index={1} activeItemIndex={1} subMenu={<div>SubMenu Content</div>}>
        <div>Main Content</div>
      </BaseMenuItem>
    );

    expect(getByTestId("menu-item-sub-menu")).toBeInTheDocument();
    expect(getByTestId("menu-item-sub-menu-icon")).toBeInTheDocument();
    expect(getByText("Main Content")).toBeInTheDocument();
  });

  it("should focus the component when it is active", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <BaseMenuItem ref={ref} index={1} activeItemIndex={1}>
        <div>Main Content</div>
      </BaseMenuItem>
    );

    expect(ref.current).toHaveFocus();
  });

  it("should not focus the component when it is not active", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <BaseMenuItem ref={ref} index={1} activeItemIndex={0}>
        <div>Main Content</div>
      </BaseMenuItem>
    );

    expect(ref.current).not.toHaveFocus();
  });

  it("should not focus the component when using document event listeners", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <BaseMenuItem ref={ref} index={1} activeItemIndex={1} useDocumentEventListeners>
        <div>Main Content</div>
      </BaseMenuItem>
    );

    expect(ref.current).not.toHaveFocus();
  });
});
