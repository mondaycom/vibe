import React from "react";
import { render } from "@testing-library/react";
import BaseList from "../BaseList";
import { BaseListProps } from "../BaseList.types";

function renderBaseList<T>(props?: Partial<BaseListProps<T>>) {
  return render(<BaseList {...(props as BaseListProps<T>)} />);
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
        selectedItem: { label: "Option 1", value: "opt1", index: 0 }
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

      expect(container.getElementsByClassName("groupDivider").length).toBe(1);
    });

    it("should support a custom option renderer", () => {
      const customRenderer = (item: any) => <div data-testid={`custom-renderer-${item.value}`}>{item.label}</div>;
      const { getByTestId } = renderBaseList({ options, optionRenderer: customRenderer });

      expect(getByTestId("custom-renderer-opt1")).toBeInTheDocument();
      expect(getByTestId("custom-renderer-opt2")).toBeInTheDocument();
    });

    it("should have the correct `dir` attribute", () => {
      const { container } = renderBaseList({ options, dir: "rtl" });

      expect(container.querySelector("ul")).toHaveAttribute("dir", "rtl");
    });
  });
});
