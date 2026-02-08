import { vi, describe, it, expect } from "vitest";
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { List, ListItem } from "../index";
import { type ListProps } from "../List.types";

function renderList(props?: Partial<ListProps>) {
  return render(
    <List ariaLabel="Test List" {...props}>
      <ListItem label="Item 1" value="1" />
      <ListItem label="Item 2" value="2" />
      <ListItem label="Item 3" value="3" />
    </List>
  );
}

describe("List (next)", () => {
  describe("rendering", () => {
    it("should render with default props", () => {
      renderList();
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should render children correctly", () => {
      renderList();
      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
      expect(screen.getByText("Item 3")).toBeInTheDocument();
    });

    it("should apply custom className", () => {
      renderList({ className: "custom-list" });
      expect(screen.getByRole("listbox")).toHaveClass("custom-list");
    });

    it("should render with custom element type", () => {
      render(
        <List as="ol" ariaLabel="Ordered List">
          <ListItem label="Item 1" value="1" />
        </List>
      );
      const list = screen.getByRole("listbox");
      expect(list.tagName.toLowerCase()).toBe("ol");
    });

    it("should render with custom id", () => {
      renderList({ id: "custom-list-id" });
      expect(screen.getByRole("listbox")).toHaveAttribute("id", "custom-list-id");
    });
  });

  describe("accessibility", () => {
    it("should have correct aria-label", () => {
      renderList({ ariaLabel: "Custom Label" });
      expect(screen.getByLabelText("Custom Label")).toBeInTheDocument();
    });

    it("should have role listbox", () => {
      renderList();
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should have aria-describedby when provided", () => {
      render(
        <>
          <span id="description">List description</span>
          <List ariaLabel="Test" ariaDescribedBy="description">
            <ListItem label="Item 1" value="1" />
          </List>
        </>
      );
      expect(screen.getByRole("listbox")).toHaveAttribute("aria-describedby", "description");
    });

    it("should render children with option role", () => {
      renderList();
      const items = screen.getAllByRole("option");
      expect(items).toHaveLength(3);
    });

    it("should support custom role", () => {
      render(
        <List ariaLabel="Menu" role="menu">
          <ListItem label="Action 1" value="1" />
          <ListItem label="Action 2" value="2" />
        </List>
      );
      expect(screen.getByRole("menu")).toBeInTheDocument();
      // Children should get menuitem role automatically from BaseList
      const items = screen.getAllByRole("menuitem");
      expect(items).toHaveLength(2);
    });

    it("should support list role", () => {
      render(
        <List ariaLabel="Navigation" role="list">
          <ListItem label="Link 1" value="1" />
          <ListItem label="Link 2" value="2" />
        </List>
      );
      expect(screen.getByRole("list")).toBeInTheDocument();
    });
  });

  describe("keyboard navigation", () => {
    it("should navigate down with arrow key", async () => {
      renderList();

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
      renderList({ defaultFocusIndex: 2 });

      const list = screen.getByRole("listbox");
      list.focus();

      const items = screen.getAllByRole("option");
      expect(items[2]).toHaveAttribute("tabindex", "0");

      await userEvent.keyboard("{ArrowUp}");

      expect(items[1]).toHaveAttribute("tabindex", "0");
      expect(items[2]).toHaveAttribute("tabindex", "-1");
    });

    it("should wrap to last item when pressing up from first item", async () => {
      renderList({ defaultFocusIndex: 0 });

      const list = screen.getByRole("listbox");
      list.focus();

      const items = screen.getAllByRole("option");
      await userEvent.keyboard("{ArrowUp}");

      // Should wrap to last item
      expect(items[2]).toHaveAttribute("tabindex", "0");
    });

    it("should wrap to first item when pressing down from last item", async () => {
      renderList({ defaultFocusIndex: 2 });

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

      renderList({ onFocusChange });

      const list = screen.getByRole("listbox");
      list.focus();

      await userEvent.keyboard("{ArrowDown}");

      expect(onFocusChange).toHaveBeenCalledWith(1, expect.any(String));
    });

    it("should focus list on mount when focusOnMount is true", () => {
      renderList({ focusOnMount: true });

      // Note: focusOnMount uses requestAnimationFrame, so we may need to wait
      // This is a basic check that the component renders
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should respect defaultFocusIndex", () => {
      renderList({ defaultFocusIndex: 1 });

      const items = screen.getAllByRole("option");
      expect(items[1]).toHaveAttribute("tabindex", "0");
      expect(items[0]).toHaveAttribute("tabindex", "-1");
    });
  });

  describe("scrollable container", () => {
    it("should apply maxHeight as CSS variable", () => {
      renderList({ maxHeight: 200 });
      expect(screen.getByRole("listbox")).toHaveStyle({ "--baselist-max-height": "200px" });
    });

    it("should apply maxHeight as string via CSS variable", () => {
      renderList({ maxHeight: "50vh" });
      expect(screen.getByRole("listbox")).toHaveStyle({ "--baselist-max-height": "50vh" });
    });
  });

  describe("sizes", () => {
    it("should render with small size", () => {
      render(
        <List ariaLabel="Small list" size="small">
          <ListItem label="Item 1" value="1" />
        </List>
      );
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should render with medium size (default)", () => {
      render(
        <List ariaLabel="Medium list" size="medium">
          <ListItem label="Item 1" value="1" />
        </List>
      );
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    it("should render with large size", () => {
      render(
        <List ariaLabel="Large list" size="large">
          <ListItem label="Item 1" value="1" />
        </List>
      );
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });
  });

  describe("with selected items", () => {
    it("should support selected items", () => {
      render(
        <List ariaLabel="Test List">
          <ListItem label="Item 1" value="1" />
          <ListItem label="Item 2" value="2" selected />
          <ListItem label="Item 3" value="3" />
        </List>
      );

      const items = screen.getAllByRole("option");
      expect(items[1]).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("with disabled items", () => {
    it("should support disabled items", () => {
      render(
        <List ariaLabel="Test List">
          <ListItem label="Item 1" value="1" />
          <ListItem label="Disabled Item" value="disabled" disabled />
          <ListItem label="Item 2" value="2" />
        </List>
      );

      const disabledItem = screen.getByText("Disabled Item").closest("[role='option']");
      expect(disabledItem).toHaveClass("disabled");
    });
  });

  describe("data-testid", () => {
    it("should have default data-testid when id is provided", () => {
      renderList({ id: "my-list" });
      expect(screen.getByTestId("list_my-list")).toBeInTheDocument();
    });

    it("should use custom data-testid when provided", () => {
      renderList({ "data-testid": "custom-testid" });
      expect(screen.getByTestId("custom-testid")).toBeInTheDocument();
    });
  });
});

describe("List with wrapped items", () => {
  function CustomWrapper({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }

  it("should render items wrapped in a custom component", () => {
    render(
      <List ariaLabel="Test List">
        <ListItem label="Item 1" value="1" />
        <CustomWrapper>
          <ListItem label="Wrapped Item" value="wrapped" />
        </CustomWrapper>
        <ListItem label="Item 3" value="3" />
      </List>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Wrapped Item")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("should include wrapped items in keyboard navigation", async () => {
    render(
      <List ariaLabel="Test List">
        <ListItem label="Item 1" value="1" />
        <CustomWrapper>
          <ListItem label="Wrapped Item" value="wrapped" />
        </CustomWrapper>
        <ListItem label="Item 3" value="3" />
      </List>
    );

    const list = screen.getByRole("listbox");
    list.focus();

    const items = screen.getAllByRole("option");
    expect(items[0]).toHaveAttribute("tabindex", "0");

    await userEvent.keyboard("{ArrowDown}");
    expect(items[1]).toHaveAttribute("tabindex", "0");
    expect(items[0]).toHaveAttribute("tabindex", "-1");

    await userEvent.keyboard("{ArrowDown}");
    expect(items[2]).toHaveAttribute("tabindex", "0");
    expect(items[1]).toHaveAttribute("tabindex", "-1");
  });

  it("should support click on wrapped item", async () => {
    const onClick = vi.fn();
    render(
      <List ariaLabel="Test List">
        <ListItem label="Item 1" value="1" />
        <CustomWrapper>
          <ListItem label="Wrapped Item" value="wrapped" onClick={onClick} />
        </CustomWrapper>
      </List>
    );

    await userEvent.click(screen.getByText("Wrapped Item"));
    expect(onClick).toHaveBeenCalled();
  });

  it("should support selected state on wrapped item", () => {
    render(
      <List ariaLabel="Test List">
        <ListItem label="Item 1" value="1" />
        <CustomWrapper>
          <ListItem label="Wrapped Item" value="wrapped" selected />
        </CustomWrapper>
      </List>
    );

    const items = screen.getAllByRole("option");
    expect(items[1]).toHaveAttribute("aria-selected", "true");
  });

  it("should render items from a mapped array with keyboard navigation", async () => {
    const items = [
      { label: "Dynamic 1", value: "d1" },
      { label: "Dynamic 2", value: "d2" },
      { label: "Dynamic 3", value: "d3" }
    ];

    render(
      <List ariaLabel="Test List">
        {items.map(item => (
          <ListItem key={item.value} label={item.label} value={item.value} />
        ))}
      </List>
    );

    expect(screen.getByText("Dynamic 1")).toBeInTheDocument();
    expect(screen.getByText("Dynamic 2")).toBeInTheDocument();
    expect(screen.getByText("Dynamic 3")).toBeInTheDocument();

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);

    // Keyboard navigation should work across dynamically rendered items
    const list = screen.getByRole("listbox");
    list.focus();

    await userEvent.keyboard("{ArrowDown}");
    expect(options[1]).toHaveAttribute("tabindex", "0");

    await userEvent.keyboard("{ArrowDown}");
    expect(options[2]).toHaveAttribute("tabindex", "0");
  });
});

describe("ListItem", () => {
  describe("rendering", () => {
    it("should render with label", () => {
      render(
        <List ariaLabel="Test">
          <ListItem label="Test Label" />
        </List>
      );
      expect(screen.getByText("Test Label")).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("should call onClick when clicked", async () => {
      const onClick = vi.fn();
      render(
        <List ariaLabel="Test">
          <ListItem label="Clickable" onClick={onClick} />
        </List>
      );

      await userEvent.click(screen.getByText("Clickable"));
      expect(onClick).toHaveBeenCalled();
    });

    it("should not call onClick when disabled", async () => {
      const onClick = vi.fn();
      render(
        <List ariaLabel="Test">
          <ListItem label="Disabled" onClick={onClick} disabled />
        </List>
      );

      await userEvent.click(screen.getByText("Disabled"));
      expect(onClick).not.toHaveBeenCalled();
    });

    it("should call onHover when mouse enters", async () => {
      const onHover = vi.fn();
      render(
        <List ariaLabel="Test">
          <ListItem label="Hoverable" onHover={onHover} />
        </List>
      );

      await userEvent.hover(screen.getByText("Hoverable"));
      expect(onHover).toHaveBeenCalled();
    });

    it("should call onHover when focused via tab", async () => {
      const onHover = vi.fn();
      render(
        <List ariaLabel="Test">
          <ListItem label="Focusable" onHover={onHover} />
        </List>
      );

      await userEvent.tab();
      await userEvent.tab(); // Tab to the list item
      expect(onHover).toHaveBeenCalled();
    });

    it("should not call onHover when disabled", async () => {
      const onHover = vi.fn();
      render(
        <List ariaLabel="Test">
          <ListItem label="Disabled" onHover={onHover} disabled />
        </List>
      );

      await userEvent.hover(screen.getByText("Disabled"));
      expect(onHover).not.toHaveBeenCalled();
    });
  });
});
