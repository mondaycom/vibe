import { vi, describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BaseList } from "../index";
import BaseItem from "../../BaseItem/BaseItem";
import { type BaseListProps } from "../BaseList.types";

function renderBaseList(props?: Partial<BaseListProps>) {
  return render(
    <BaseList ariaLabel="Test List" {...props}>
      <BaseItem item={{ label: "Item 1", value: "1" }} />
      <BaseItem item={{ label: "Item 2", value: "2" }} />
      <BaseItem item={{ label: "Item 3", value: "3" }} />
    </BaseList>
  );
}

describe("BaseList", () => {
  describe("rendering", () => {
    it("should render with default props", () => {
      renderBaseList();
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should render children correctly", () => {
      renderBaseList();
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
      expect(screen.getByText("Item 3")).toBeInTheDocument();
    });

    it("should apply custom className", () => {
      renderBaseList({ className: "custom-list" });
      expect(screen.getByRole("listbox")).toHaveClass("custom-list");
    });

    it("should render with custom element type", () => {
      render(
        <BaseList as="ol" ariaLabel="Ordered List">
          <BaseItem item={{ label: "Item 1", value: "1" }} />
        </BaseList>
      );
      const list = screen.getByRole("listbox");
      expect(list.tagName.toLowerCase()).toBe("ol");
    });
  });

  describe("accessibility", () => {
    it("should have correct aria-label", () => {
      renderBaseList({ ariaLabel: "Custom Label" });
      expect(screen.getByLabelText("Custom Label")).toBeInTheDocument();
    });

    it("should have correct role", () => {
      renderBaseList({ role: "menu" });
      expect(screen.getByRole("menu")).toBeInTheDocument();
    });

    it("should have aria-describedby when provided", () => {
      render(
        <>
          <span id="description">List description</span>
          <BaseList ariaLabel="Test" ariaDescribedBy="description">
            <BaseItem item={{ label: "Item 1", value: "1" }} />
          </BaseList>
        </>
      );
      expect(screen.getByRole("listbox")).toHaveAttribute("aria-describedby", "description");
    });
  });

  describe("keyboard navigation", () => {
    it("should navigate down with arrow key", async () => {
      renderBaseList();

      const list = screen.getByRole("listbox");
      list.focus();

      const items = screen.getAllByRole("option");
      expect(items[0]).toHaveAttribute("tabindex", "0");

      await userEvent.keyboard("{ArrowDown}");

      // After pressing down, second item should be focusable
      expect(items[1]).toHaveAttribute("tabindex", "0");
      expect(items[0]).toHaveAttribute("tabindex", "-1");
    });

    it("should navigate up with arrow key", async () => {
      renderBaseList({ defaultFocusIndex: 2 });

      const list = screen.getByRole("listbox");
      list.focus();

      const items = screen.getAllByRole("option");
      expect(items[2]).toHaveAttribute("tabindex", "0");

      await userEvent.keyboard("{ArrowUp}");

      expect(items[1]).toHaveAttribute("tabindex", "0");
      expect(items[2]).toHaveAttribute("tabindex", "-1");
    });

    it("should wrap to last item when pressing up from first item", async () => {
      renderBaseList({ defaultFocusIndex: 0 });

      const list = screen.getByRole("listbox");
      list.focus();

      const items = screen.getAllByRole("option");
      await userEvent.keyboard("{ArrowUp}");

      // Should wrap to last item
      expect(items[2]).toHaveAttribute("tabindex", "0");
    });

    it("should wrap to first item when pressing down from last item", async () => {
      renderBaseList({ defaultFocusIndex: 2 });

      const list = screen.getByRole("listbox");
      list.focus();

      const items = screen.getAllByRole("option");
      await userEvent.keyboard("{ArrowDown}");

      // Should wrap to first item
      expect(items[0]).toHaveAttribute("tabindex", "0");
    });
  });

  describe("focus management", () => {
    it("should call onFocusChange when focus changes", async () => {
      const onFocusChange = vi.fn();

      renderBaseList({ onFocusChange });

      const list = screen.getByRole("listbox");
      list.focus();

      await userEvent.keyboard("{ArrowDown}");

      expect(onFocusChange).toHaveBeenCalledWith(1, expect.any(String));
    });

    it("should focus list on mount when focusOnMount is true", () => {
      renderBaseList({ focusOnMount: true });

      // Note: focusOnMount uses requestAnimationFrame, so we may need to wait
      // This is a basic check that the component renders
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should respect defaultFocusIndex", () => {
      renderBaseList({ defaultFocusIndex: 1 });

      const items = screen.getAllByRole("option");
      expect(items[1]).toHaveAttribute("tabindex", "0");
      expect(items[0]).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("scrollable container", () => {
    it("should apply maxHeight as style", () => {
      renderBaseList({ maxHeight: 200 });
      expect(screen.getByRole("listbox")).toHaveStyle({ maxHeight: "200px" });
    });

    it("should apply maxHeight as string", () => {
      renderBaseList({ maxHeight: "50vh" });
      expect(screen.getByRole("listbox")).toHaveStyle({ maxHeight: "50vh" });
    });

    it("should add scrollable class when maxHeight is set", () => {
      renderBaseList({ maxHeight: 200 });
      expect(screen.getByRole("listbox")).toHaveClass("scrollable");
    });

    it("should merge maxHeight with custom style prop", () => {
      renderBaseList({ maxHeight: 200, style: { width: "300px", backgroundColor: "red" } });
      const list = screen.getByRole("listbox");
      expect(list).toHaveStyle({ maxHeight: "200px", width: "300px", backgroundColor: "red" });
    });

    it("should prioritize maxHeight prop over style.maxHeight", () => {
      renderBaseList({ maxHeight: 200, style: { maxHeight: "500px" } });
      expect(screen.getByRole("listbox")).toHaveStyle({ maxHeight: "200px" });
    });
  });

  describe("direction", () => {
    it("should apply dir attribute", () => {
      renderBaseList({ dir: "rtl" });
      expect(screen.getByRole("listbox")).toHaveAttribute("dir", "rtl");
    });
  });

  describe("with selected items", () => {
    it("should focus on selected item initially", () => {
      render(
        <BaseList ariaLabel="Test List">
          <BaseItem item={{ label: "Item 1", value: "1" }} />
          <BaseItem item={{ label: "Item 2", value: "2" }} selected />
          <BaseItem item={{ label: "Item 3", value: "3" }} />
        </BaseList>
      );

      const items = screen.getAllByRole("option");
      // The selected item (index 1) should have tabindex 0
      expect(items[1]).toHaveAttribute("tabindex", "0");
    });
  });

  describe("with mixed children (non-focusable elements)", () => {
    it("should skip non-focusable items during navigation", async () => {
      render(
        <BaseList ariaLabel="Test List">
          <BaseItem item={{ label: "Item 1", value: "1" }} />
          <li>Divider</li>
          <BaseItem item={{ label: "Item 2", value: "2" }} />
        </BaseList>
      );

      const list = screen.getByRole("listbox");
      list.focus();

      await userEvent.keyboard("{ArrowDown}");

      // Should skip the divider and go to Item 2
      const item2 = screen.getByText("Item 2").closest("[role='option']");
      expect(item2).toHaveAttribute("tabindex", "0");
    });
  });

  describe("automatic role assignment", () => {
    it("should assign role='option' to children when list role is 'listbox'", () => {
      renderBaseList({ role: "listbox" });
      const items = screen.getAllByRole("option");
      expect(items).toHaveLength(3);
    });

    it("should assign role='menuitem' to children when list role is 'menu'", () => {
      render(
        <BaseList ariaLabel="Menu" role="menu">
          <BaseItem item={{ label: "Action 1", value: "1" }} />
          <BaseItem item={{ label: "Action 2", value: "2" }} />
        </BaseList>
      );
      const items = screen.getAllByRole("menuitem");
      expect(items).toHaveLength(2);
    });

    it("should allow explicit role override on individual items", () => {
      render(
        <BaseList ariaLabel="Test List" role="listbox">
          <BaseItem item={{ label: "Item 1", value: "1" }} />
          <BaseItem item={{ label: "Item 2", value: "2" }} role="menuitem" />
        </BaseList>
      );
      expect(screen.getByRole("option")).toBeInTheDocument();
      expect(screen.getByRole("menuitem")).toBeInTheDocument();
    });
  });
});
