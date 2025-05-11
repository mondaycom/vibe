import React from "react";
import { render } from "@testing-library/react";
import BaseList from "../BaseList";
import { BaseListProps } from "../BaseList.types";

function renderBaseList(props?: Partial<BaseListProps<any>>) {
  const defaultProps: BaseListProps<any> = {
    options: [],
    ...props
  };

  return render(<BaseList {...defaultProps} />);
}

describe("BaseList", () => {
  const options = [
    {
      label: "Group 1",
      options: [
        { label: "Option 1", value: "opt1", index: 0 },
        { label: "Option 2", value: "opt2", index: 1, disabled: true }
      ]
    },
    {
      label: "Group 2",
      options: [
        { label: "Option 3", value: "opt3", index: 2 },
        { label: "Option 4", value: "opt4", index: 3 }
      ]
    }
  ];
  it("should render correctly with all props", () => {
    const { getByText } = renderBaseList({
      options,
      size: "large",
      withGroupDivider: true,
      dir: "rtl",
      noOptionsMessage: "No options available"
    });

    expect(getByText("Group 1")).toBeInTheDocument();
    expect(getByText("Group 2")).toBeInTheDocument();
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
    expect(getByText("Option 4")).toBeInTheDocument();
  });

  describe("with declared props", () => {
    it("should display group labels when provided", () => {
      const { getByText } = renderBaseList({ options });

      expect(getByText("Group 1")).toBeInTheDocument();
      expect(getByText("Group 2")).toBeInTheDocument();
    });

    it("should apply the selected class to the selected item", () => {
      const { getByText } = renderBaseList({
        options,
        selectedItems: [{ index: 0, value: "opt1", label: "Option 1" }]
      });

      expect(getByText("Option 1").parentNode).toHaveClass("selected");
    });

    it("should apply the highlighted class to the highlighted item", () => {
      const { getByText } = renderBaseList({
        options,
        highlightedIndex: 0
      });

      expect(getByText("Option 1").parentNode).toHaveClass("highlighted");
    });

    it("should apply the disabled class when an option is disabled", () => {
      const { getByText } = renderBaseList({ options });

      expect(getByText("Option 2").parentNode).toHaveClass("disabled");
    });

    it("should display a no-options message when the list is empty", () => {
      const { getByText } = renderBaseList({ options: [], noOptionsMessage: "No items available" });

      expect(getByText("No items available")).toBeInTheDocument();
    });

    it("should display group dividers when `withGroupDivider` is true", () => {
      const { container } = renderBaseList({ options, withGroupDivider: true });

      expect(container.getElementsByClassName("divider").length).toBe(1);
    });

    it("should support a custom option renderer", () => {
      const customRenderer = (item: any) => <div data-testid="custom-renderer">Renderer - {item.label}</div>;
      const { getByText } = renderBaseList({ options, itemRenderer: customRenderer });

      expect(getByText("Renderer - Option 1")).toBeInTheDocument();
      expect(getByText("Renderer - Option 2")).toBeInTheDocument();
    });

    it("should have the correct `dir` attribute", () => {
      const { container } = renderBaseList({ options, dir: "rtl" });

      expect(container.querySelector("ul")).toHaveAttribute("dir", "rtl");
    });
  });

  describe("with custom type", () => {
    it("should work without explicit type parameter", () => {
      const simpleOptions = [
        {
          label: "Simple Group",
          options: [
            {
              index: 0,
              value: "simple-1",
              label: "Simple Item",
              customField: "custom value"
            }
          ]
        }
      ];

      const { getByText } = render(<BaseList options={simpleOptions} />);
      expect(getByText("Simple Item")).toBeInTheDocument();
    });

    it("should work with explicit type parameter", () => {
      type ExplicitType = Record<string, unknown> & {
        id: string;
        isActive: boolean;
      };

      const typedOptions = [
        {
          label: "Typed Group",
          options: [
            {
              index: 0,
              value: "typed-1",
              label: "Typed Item",
              id: "123",
              isActive: true
            }
          ]
        }
      ];

      const { getByText } = render(<BaseList<ExplicitType> options={typedOptions} />);
      expect(getByText("Typed Item")).toBeInTheDocument();
    });

    it("should work with itemRenderer without explicit type", () => {
      const simpleOptions = [
        {
          label: "Renderer Group",
          options: [
            {
              index: 0,
              value: "render-1",
              label: "Renderer Item",
              count: 42
            }
          ]
        }
      ];

      const simpleRenderer = (item: any) => <div data-testid="simple-rendered">{`${item.label}: ${item.count}`}</div>;

      const { getByTestId } = render(<BaseList options={simpleOptions} itemRenderer={simpleRenderer} />);

      expect(getByTestId("simple-rendered")).toHaveTextContent("Renderer Item: 42");
    });

    it("should work with itemRenderer and explicit type", () => {
      type ComplexType = Record<string, unknown> & {
        id: string;
        metadata: {
          version: number;
          status: string;
        };
      };

      const complexOptions = [
        {
          label: "Complex Group",
          options: [
            {
              index: 0,
              value: "complex-1",
              label: "Complex Item",
              id: "complex-1",
              metadata: {
                version: 2,
                status: "active"
              }
            }
          ]
        }
      ];

      const typedRenderer = (item: any) => {
        return (
          <div data-testid="complex-rendered">
            {`${item.label} (v${item.metadata.version}): ${item.metadata.status}`}
          </div>
        );
      };

      const { getByTestId } = render(<BaseList<ComplexType> options={complexOptions} itemRenderer={typedRenderer} />);

      expect(getByTestId("complex-rendered")).toHaveTextContent("Complex Item (v2): active");
    });
  });
});
