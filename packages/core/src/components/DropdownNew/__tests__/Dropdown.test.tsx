import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";
import { BaseDropdownProps } from "../Dropdown.types";
import { BaseListItemProps } from "../../BaseListItem";

const defaultOptions = [
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

function renderDropdown<T extends BaseListItemProps>(props?: Partial<BaseDropdownProps<T>>) {
  const defaultProps: BaseDropdownProps<T> = {
    options: defaultOptions as any,
    placeholder: "Select an option",
    ...props
  };
  return render(<Dropdown {...defaultProps} />);
}

describe("DropdownNew", () => {
  it("should render correctly with all props", () => {
    const { getByPlaceholderText, getByText, queryByText } = renderDropdown({
      size: "large",
      withGroupDivider: true,
      noOptionsMessage: "No options available"
    });
    expect(queryByText("Option 1")).not.toBeInTheDocument();

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
      const { getByPlaceholderText, getByText } = renderDropdown();

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(getByText("Option 1")).toBeVisible();
    });

    it("should be disabled when disabled prop is true", () => {
      const { getByPlaceholderText } = renderDropdown({
        disabled: true
      });

      const input = getByPlaceholderText("Select an option");
      expect(input).toBeDisabled();
    });

    it("should be read-only when readOnly prop is true", () => {
      const { getByPlaceholderText } = renderDropdown({
        readOnly: true
      });

      const input = getByPlaceholderText("Select an option");
      expect(input).toHaveAttribute("readonly");
    });

    it("should show error state when error prop is true", () => {
      const { container } = renderDropdown({
        error: true
      });

      const wrapperDiv = container.querySelector(".wrapper");
      expect(wrapperDiv).toHaveClass("error");
    });

    it("should open menu when isMenuOpen prop is true", () => {
      const { getByText } = renderDropdown({
        isMenuOpen: true
      });

      expect(getByText("Option 1")).toBeVisible();
    });

    it("should focus input on mount when autoFocus is true", () => {
      const { getByPlaceholderText, queryByText } = renderDropdown({
        autoFocus: true
      });

      const input = getByPlaceholderText("Select an option");
      expect(document.activeElement).toBe(input);
      expect(queryByText("Option 1")).toBeInTheDocument();
    });

    it("should filter options based on input value", () => {
      const { getByPlaceholderText, queryByText } = renderDropdown();

      const input = getByPlaceholderText("Select an option");
      fireEvent.change(input, { target: { value: "Option 1" } });

      expect(queryByText("Option 2")).not.toBeInTheDocument();
      expect(queryByText("Option 3")).not.toBeInTheDocument();
      expect(queryByText("Option 4")).not.toBeInTheDocument();
      expect(queryByText("Option 1")).toBeInTheDocument();
    });

    it("should display a no-options message when the list is empty", () => {
      const { getByPlaceholderText, getByText } = renderDropdown({
        options: [],
        noOptionsMessage: "No items available"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(getByText("No items available")).toBeInTheDocument();
    });

    it("should support sticky group titles when stickyGroupTitle is true", () => {
      const { container, getByPlaceholderText } = renderDropdown({
        stickyGroupTitle: true
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
        optionRenderer: customRenderer
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(getByTestId("custom-renderer-opt1")).toBeInTheDocument();
      expect(getByTestId("custom-renderer-opt2")).toBeInTheDocument();
    });

    it("should call onInputChange when input value changes", () => {
      const onInputChange = jest.fn();
      const { getByPlaceholderText } = renderDropdown({
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

    it("should show faded selected item when focused", () => {
      const { getByPlaceholderText, container, getByText } = renderDropdown({
        placeholder: "Select an option"
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      fireEvent.click(getByText("Option 1"));

      fireEvent.focus(input);

      const selectedValue = container.querySelector(".selectedItem");
      expect(selectedValue).toHaveClass("faded");
    });

    it("should hide selected value when typing in the input", () => {
      const { getByPlaceholderText, getByText, queryByText } = renderDropdown();

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      fireEvent.click(getByText("Option 1"));

      fireEvent.change(input, { target: { value: "test" } });
      expect(queryByText("Option 1")).not.toBeInTheDocument();
    });

    it("should not display indent startElement in selected value", () => {
      const optionsWithIndent = [
        {
          label: "Group 1",
          options: [
            {
              label: "Option 1",
              value: "opt1",
              index: 0,
              startElement: { type: "indent" }
            }
          ]
        }
      ];

      const { getByPlaceholderText, getByText, container } = renderDropdown({
        options: optionsWithIndent
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      fireEvent.click(getByText("Option 1"));

      const selectedValue = container.querySelector(".selectedItem");
      expect(selectedValue).toBeInTheDocument();

      const indentElement = selectedValue.querySelector(".indent");
      expect(indentElement).not.toBeInTheDocument();
    });

    it("should show clear button only when clearable is true and an option is selected", () => {
      const { getByPlaceholderText, getByText, queryByTestId } = renderDropdown({
        clearable: true
      });

      const input2 = getByPlaceholderText("Select an option");

      expect(queryByTestId("dropdown-clear-button")).not.toBeInTheDocument();

      fireEvent.click(input2);
      fireEvent.click(getByText("Option 1"));
      expect(queryByTestId("dropdown-clear-button")).toBeInTheDocument();
    });
  });

  describe("event handlers", () => {
    it("should call onFocus when input is focused", () => {
      const onFocus = jest.fn();
      const { getByPlaceholderText } = renderDropdown({ onFocus });

      const input = getByPlaceholderText("Select an option");
      fireEvent.focus(input);

      expect(onFocus).toHaveBeenCalled();
    });

    it("should call onBlur when input loses focus", () => {
      const onBlur = jest.fn();
      const { getByPlaceholderText } = renderDropdown({ onBlur });

      const input = getByPlaceholderText("Select an option");
      fireEvent.focus(input);
      fireEvent.blur(input);

      expect(onBlur).toHaveBeenCalled();
    });

    it("should call onChange when an option is selected", () => {
      const onChange = jest.fn();
      const { getByPlaceholderText, getByText } = renderDropdown({ onChange });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      const option = getByText("Option 1");
      fireEvent.click(option);

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          value: "opt1",
          label: "Option 1"
        })
      );
    });

    it("should call onClear when clear button is clicked", () => {
      const onClear = jest.fn();
      const onChange = jest.fn();
      const { getByPlaceholderText, getByText, getByTestId } = renderDropdown({ onClear, onChange });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      const option = getByText("Option 1");
      fireEvent.click(option);

      const clearButton = getByTestId("dropdown-clear-button");
      fireEvent.click(clearButton);

      expect(onClear).toHaveBeenCalled();
      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("should call onKeyDown when a key is pressed", () => {
      const onKeyDown = jest.fn();
      const { getByPlaceholderText } = renderDropdown({ onKeyDown });

      const input = getByPlaceholderText("Select an option");
      fireEvent.keyDown(input, { key: "ArrowDown" });

      expect(onKeyDown).toHaveBeenCalled();
    });

    it("should call onMenuOpen when dropdown is opened", () => {
      const onMenuOpen = jest.fn();
      const { getByPlaceholderText } = renderDropdown({ onMenuOpen });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      expect(onMenuOpen).toHaveBeenCalled();
    });

    it("should call onMenuClose when dropdown is closed", () => {
      const onMenuOpen = jest.fn();
      const onMenuClose = jest.fn();
      const { getByPlaceholderText, getByRole } = renderDropdown({ onMenuClose, onMenuOpen });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      expect(onMenuOpen).toHaveBeenCalled();

      const menu = getByRole("listbox");
      expect(menu).toBeInTheDocument();

      fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

      expect(onMenuClose).toHaveBeenCalled();
    });

    it("should call onScroll when list is scrolled", () => {
      const onScroll = jest.fn();
      const manyOptions = [
        {
          label: "Group 1",
          options: Array.from({ length: 50 }, (_, i) => ({
            value: `opt${i}`,
            label: `Option ${i}`,
            index: i
          }))
        }
      ];

      const { getByPlaceholderText, getByRole } = renderDropdown({
        options: manyOptions,
        onScroll
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      const list = getByRole("listbox");
      fireEvent.scroll(list);

      expect(onScroll).toHaveBeenCalled();
    });

    it("should handle the complete interaction flow", () => {
      const onFocus = jest.fn();
      const onBlur = jest.fn();
      const onMenuOpen = jest.fn();
      const onMenuClose = jest.fn();
      const onInputChange = jest.fn();
      const onChange = jest.fn();
      const onOptionSelect = jest.fn();

      const { getByPlaceholderText, getByRole, getByText } = renderDropdown({
        onFocus,
        onBlur,
        onMenuOpen,
        onMenuClose,
        onInputChange,
        onChange,
        onOptionSelect
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);
      expect(onFocus).toHaveBeenCalled();
      expect(onMenuOpen).toHaveBeenCalled();

      const menu = getByRole("listbox");
      expect(menu).toBeInTheDocument();

      fireEvent.change(input, { target: { value: "Option 1" } });
      expect(onInputChange).toHaveBeenCalledWith("Option 1");

      const option = getByText("Option 1");
      fireEvent.click(option);

      expect(onOptionSelect).toHaveBeenCalledWith(
        expect.objectContaining({
          value: "opt1",
          label: "Option 1"
        })
      );
      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          value: "opt1",
          label: "Option 1"
        })
      );

      fireEvent.keyDown(input, { key: "Escape", code: "Escape" });
      expect(onMenuClose).toHaveBeenCalled();

      fireEvent.blur(input);
      expect(onBlur).toHaveBeenCalled();
    });
  });
});
