import { vi, describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import BaseItem from "../BaseItem";
import { type BaseItemProps, type StartElement, type EndElement, type BaseItemData } from "../BaseItem.types";

const startElement: StartElement = {
  type: "avatar",
  value: "avatar.png",
  square: true
};

const endElement: EndElement = {
  type: "icon",
  value: "check"
};

function renderBaseItem(props?: Partial<BaseItemProps<Record<string, unknown>>>) {
  return render(<BaseItem {...props} />);
}

describe("BaseItem", () => {
  const label = "Default Item";

  it("should render correctly with all props", () => {
    const { getByText } = renderBaseItem({
      item: {
        label,
        value: "item1",
        disabled: false,
        startElement,
        endElement
      },
      size: "large",
      selected: true,
      highlighted: true,
      className: "custom-wrapper"
    });

    expect(getByText("Default Item").parentNode).toHaveClass("large");
    expect(getByText("Default Item").parentNode).toHaveClass("selected");
    expect(getByText("Default Item").parentNode).toHaveClass("highlighted");
    expect(getByText("Default Item").parentNode).toHaveClass("custom-wrapper");
  });

  describe("with declared props", () => {
    it("should apply the size class", () => {
      const { getByText } = renderBaseItem({
        item: { label, value: "item1" },
        size: "large"
      });
      expect(getByText("Default Item").parentNode).toHaveClass("large");
    });

    it("should show start and end elements when provided", () => {
      const { getByTestId } = renderBaseItem({
        item: {
          label,
          value: "item1",
          startElement,
          endElement
        }
      });

      expect(getByTestId("avatar-content")).toBeInTheDocument();
      expect(getByTestId("icon")).toBeInTheDocument();
    });

    it("should apply the selected class", () => {
      const { getByText } = renderBaseItem({
        item: { label, value: "item1" },
        selected: true
      });
      expect(getByText("Default Item").parentNode).toHaveClass("selected");
    });

    it("should apply the disabled class", () => {
      const { getByText } = renderBaseItem({
        item: {
          label,
          value: "item1",
          disabled: true
        }
      });
      expect(getByText("Default Item").parentNode).toHaveClass("disabled");
    });

    it("should apply the highlighted class", () => {
      const { getByText } = renderBaseItem({
        item: { label, value: "item1" },
        highlighted: true
      });
      expect(getByText("Default Item").parentNode).toHaveClass("highlighted");
    });

    it("should have role option", () => {
      const { getByRole } = renderBaseItem({
        item: { label, value: "item1" },
        role: "option"
      });
      expect(getByRole("option")).toBeInTheDocument();
    });
  });
});

describe("with custom type", () => {
  type CustomItemType = {
    id: string;
    customValue: number;
    category: string;
    priority: number;
  };

  const customItem: BaseItemData<CustomItemType> = {
    id: "custom-123",
    value: "custom-123",
    customValue: 42,
    label: "Custom Item",
    category: "Test",
    priority: 1
  };

  it("should render correctly with a custom type", () => {
    const { getByText } = render(<BaseItem<CustomItemType> item={customItem} />);
    expect(getByText("Custom Item")).toBeInTheDocument();
  });

  it("should pass custom type properties to itemRenderer", () => {
    const mockRenderer = vi.fn((item: BaseItemData<CustomItemType>) => {
      const { id, customValue, label } = item;
      return <div data-testid="custom-rendered">{`${label} (${id}): ${customValue}`}</div>;
    });

    const { getByTestId } = render(<BaseItem<CustomItemType> item={customItem} itemRenderer={mockRenderer} />);

    expect(mockRenderer).toHaveBeenCalledWith(customItem);

    expect(getByTestId("custom-rendered")).toHaveTextContent("Custom Item (custom-123): 42");
  });
});

describe("with type parameter scenarios", () => {
  it("should work without explicit type parameter", () => {
    const simpleItem = {
      label: "Simple Item",
      value: "simple-123",
      customField: "custom value"
    };

    const { getByText } = render(<BaseItem item={simpleItem} />);
    expect(getByText("Simple Item")).toBeInTheDocument();
  });

  it("should work with explicit type parameter", () => {
    type ExplicitType = {
      id: string;
      isActive: boolean;
    };

    const typedItem: BaseItemData<ExplicitType> = {
      label: "Typed Item",
      value: "typed-123",
      id: "123",
      isActive: true
    };

    const { getByText } = render(<BaseItem<ExplicitType> item={typedItem} />);
    expect(getByText("Typed Item")).toBeInTheDocument();
  });

  it("should work with itemRenderer without explicit type", () => {
    const simpleItem = {
      label: "Renderer Item",
      count: 42
    };

    const simpleRenderer = (item: any) => <div data-testid="simple-rendered">{`${item.label}: ${item.count}`}</div>;
    const { getByTestId } = render(<BaseItem item={simpleItem} itemRenderer={simpleRenderer} />);
    expect(getByTestId("simple-rendered")).toHaveTextContent("Renderer Item: 42");
  });

  it("should work with itemRenderer and explicit type", () => {
    const complexItem = {
      label: "Complex Item",
      id: "complex-1",
      metadata: {
        version: 2,
        status: "active" as const
      }
    };

    const typedRenderer = (item: any) => {
      const typedItem = item as typeof complexItem;
      return (
        <div data-testid="complex-rendered">
          {`${typedItem.label} (v${typedItem.metadata.version}): ${typedItem.metadata.status}`}
        </div>
      );
    };

    const { getByTestId } = render(<BaseItem item={complexItem} itemRenderer={typedRenderer} />);
    expect(getByTestId("complex-rendered")).toHaveTextContent("Complex Item (v2): active");
  });
});
