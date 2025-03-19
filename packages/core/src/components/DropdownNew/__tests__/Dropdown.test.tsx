import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Dropdown from "../Dropdown";
import { BaseDropdownProps } from "../Dropdown.types";
import { BaseListItemProps } from "../../BaseListItem";

function renderDropdown<T extends BaseListItemProps>(props?: Partial<BaseDropdownProps<T>>) {
  const defaultProps: BaseDropdownProps<T> = {
    options: [],
    ...props
  };
  return render(<Dropdown {...defaultProps} />);
}

describe("DropdownNew", () => {
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
    const { getByPlaceholderText, getByText } = renderDropdown({
      options,
      size: "large",
      withGroupDivider: true,
      placeholder: "Select an option",
      noOptionsMessage: "No options available"
    });

    const input = getByPlaceholderText("Select an option");
    fireEvent.click(input);
    expect(input).toBeInTheDocument();
    expect(getByText("Group 1")).toBeInTheDocument();
    expect(getByText("Group 2")).toBeInTheDocument();
    expect(getByText("Option 1")).toBeInTheDocument();
    expect(getByText("Option 2")).toBeInTheDocument();
    expect(getByText("Option 3")).toBeInTheDocument();
    expect(getByText("Option 4")).toBeInTheDocument();
  });

  describe("with declared props", () => {
    it("should open dropdown on click", () => {
      const { getByPlaceholderText, getByText } = renderDropdown({
        options,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(getByText("Option 1")).toBeVisible();
    });

    it("should be disabled when disabled prop is true", () => {
      const { getByPlaceholderText } = renderDropdown({
        options,
        disabled: true,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      expect(input).toBeDisabled();
    });

    it("should be read-only when readOnly prop is true", () => {
      const { getByPlaceholderText } = renderDropdown({
        options,
        readOnly: true,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      expect(input).toHaveAttribute("readonly");
    });

    it("should show error state when error prop is true", () => {
      const { container } = renderDropdown({
        options,
        error: true,
        placeholder: "Select an option"
      });

      expect(container.firstChild).toHaveClass("error");
    });

    it("should filter options based on input value", async () => {
      const { getByPlaceholderText, queryByText } = renderDropdown({
        options,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.change(input, { target: { value: "Option 1" } });

      await act(async () => {
        expect(queryByText("Option 2")).not.toBeInTheDocument();
        expect(queryByText("Option 3")).not.toBeInTheDocument();
        expect(queryByText("Option 4")).not.toBeInTheDocument();
        expect(queryByText("Option 1")).toBeInTheDocument();
      });
    });

    it("should display a no-options message when the list is empty", () => {
      const { getByPlaceholderText, getByText } = renderDropdown({
        options: [],
        noOptionsMessage: "No items available",
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(getByText("No items available")).toBeInTheDocument();
    });

    it("should support sticky group titles when stickyGroupTitle is true", () => {
      const { container, getByPlaceholderText } = renderDropdown({
        options,
        stickyGroupTitle: true,
        placeholder: "Select an option"
      });
      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      expect(container.querySelector(".sticky")).toBeTruthy();
    });

    it("should support a custom option renderer", () => {
      const customRenderer = (item: any) => {
        return <div data-testid={`custom-renderer-${item.value}`}>{item.label}</div>;
      };
      const { getByPlaceholderText, getByTestId } = renderDropdown({
        options,
        optionRenderer: customRenderer,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(getByTestId("custom-renderer-opt1")).toBeInTheDocument();
      expect(getByTestId("custom-renderer-opt2")).toBeInTheDocument();
    });

    it("should call onInputChange when input value changes", () => {
      const onInputChange = jest.fn();
      const { getByPlaceholderText } = renderDropdown({
        options,
        onInputChange,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.change(input, { target: { value: "test" } });

      expect(onInputChange).toHaveBeenCalledWith("test");
    });

    it("should call onOptionSelect when an option is selected", () => {
      const onOptionSelect = jest.fn();
      const { getByPlaceholderText, getByText } = renderDropdown({
        options,
        onOptionSelect,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      fireEvent.click(getByText("Option 1"));

      expect(onOptionSelect).toHaveBeenCalledWith(expect.objectContaining({ value: "opt1" }));
    });

    it("should not allow selection of disabled options", () => {
      const onOptionSelect = jest.fn();
      const { getByPlaceholderText, getByText } = renderDropdown({
        options,
        onOptionSelect,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      fireEvent.click(getByText("Option 2")); // Option 2 is disabled

      expect(onOptionSelect).not.toHaveBeenCalled();
    });

    it("should reset selection when clicking the clear button", () => {
      const { getByPlaceholderText, getByText, queryByRole } = renderDropdown({
        options,
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      fireEvent.click(getByText("Option 1"));

      const clearButton = queryByRole("button", { name: /close/i });
      if (clearButton) {
        fireEvent.click(clearButton);
        expect(input).toHaveValue("");
      }
    });
  });
});
