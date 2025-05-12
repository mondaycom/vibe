import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";
import { BaseDropdownProps } from "../Dropdown.types";
import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

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
] as const;

function renderDropdown<T extends BaseListItemData<Record<string, unknown>>>(props?: Partial<BaseDropdownProps<T>>) {
  const defaultProps = {
    options: props?.options ?? (defaultOptions as any),
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

  describe("multi-select mode", () => {
    it("should render a multi-select dropdown when the multi prop is true", () => {
      const { getByPlaceholderText, getByText } = renderDropdown({
        multi: true
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      const option1 = getByText("Option 1");
      fireEvent.click(option1);
      expect(option1).toBeInTheDocument();
    });

    it("should allow selecting multiple items", () => {
      const onChange = jest.fn();
      const { getByPlaceholderText, getByText } = renderDropdown({
        multi: true,
        onChange
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      fireEvent.click(getByText("Option 1"));
      expect(onChange).toHaveBeenLastCalledWith([expect.objectContaining({ value: "opt1", label: "Option 1" })]);

      fireEvent.click(getByText("Option 3"));
      expect(onChange).toHaveBeenLastCalledWith([
        expect.objectContaining({ value: "opt1", label: "Option 1" }),
        expect.objectContaining({ value: "opt3", label: "Option 3" })
      ]);
    });

    it("should render chips for selected items", () => {
      const { getByPlaceholderText, getByText, container } = renderDropdown({
        multi: true
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      fireEvent.click(getByText("Option 1"));
      fireEvent.click(getByText("Option 3"));

      const chipsNodeList = container.querySelectorAll(".chip-wrapper");
      const chips = Array.from(chipsNodeList);
      expect(chips.some((chip: Element) => chip.textContent!.includes("Option 1"))).toBe(true);
      expect(chips.some((chip: Element) => chip.textContent!.includes("Option 3"))).toBe(true);
    });

    it("should remove an item when its chip is deleted", () => {
      const onChange = jest.fn();
      const { getByPlaceholderText, getByText, getAllByRole } = renderDropdown({
        multi: true,
        onChange
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      fireEvent.click(getByText("Option 1"));
      fireEvent.click(getByText("Option 3"));

      const deleteButtons = getAllByRole("button").filter(
        button => button.getAttribute("aria-label") === "close" || button.getAttribute("data-testid")?.includes("close")
      );

      fireEvent.click(deleteButtons[0]);

      expect(onChange).toHaveBeenLastCalledWith(
        expect.arrayContaining([expect.not.objectContaining({ value: "opt1" })])
      );
    });

    it("should call onOptionRemove when an item is removed", () => {
      const onOptionRemove = jest.fn();
      const { getByPlaceholderText, getByText, getAllByRole } = renderDropdown({
        multi: true,
        onOptionRemove
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      fireEvent.click(getByText("Option 1"));

      const deleteButtons = getAllByRole("button").filter(button =>
        button.getAttribute("data-testid")?.includes("close")
      );
      fireEvent.click(deleteButtons[0]);
      expect(onOptionRemove).toHaveBeenCalledWith(expect.objectContaining({ value: "opt1", label: "Option 1" }));
    });

    it("should show selected chips without counter", () => {
      const { getByPlaceholderText, getByText, queryByTestId, getByLabelText } = renderDropdown({
        multi: true
      });

      const input = getByPlaceholderText("Select an option");
      fireEvent.click(input);

      fireEvent.click(getByText("Option 1"));
      fireEvent.click(getByText("Option 3"));

      fireEvent.keyDown(input, { key: "Escape", code: "Escape" });

      expect(getByLabelText("Option 1")).toBeInTheDocument();
      expect(getByLabelText("Option 3")).toBeInTheDocument();

      expect(queryByTestId("dropdown-counter")).not.toBeInTheDocument();
    });
  });

  describe("with custom type", () => {
    it("should work without explicit type parameter", () => {
      type SimpleOptionType = BaseListItemData<{
        value: string;
      }>;

      const inlineOptions: ListGroup<SimpleOptionType>[] = [
        {
          label: "Inline Group",
          options: [
            { label: "Inline Option 1", value: "inline-1" },
            { label: "Inline Option 2", value: "inline-2", disabled: true }
          ]
        }
      ];

      const { getByText, getByPlaceholderText } = render(
        <Dropdown options={inlineOptions} placeholder="Select an inline option" />
      );

      const input = getByPlaceholderText("Select an inline option");
      fireEvent.click(input);

      expect(getByText("Inline Option 1")).toBeInTheDocument();
      expect(getByText("Inline Option 2")).toBeInTheDocument();
    });

    it("should work with explicit type parameter", () => {
      interface InlineType extends Record<string, unknown> {
        value: string;
        inlineData?: string;
      }

      type InlineItemType = BaseListItemData<InlineType>;

      const typedInlineOptions: ListGroup<InlineItemType>[] = [
        {
          label: "Typed Inline",
          options: [
            {
              label: "Typed Inline 1",
              value: "typed-inline-1",
              inlineData: "some data"
            },
            {
              label: "Typed Inline 2",
              value: "typed-inline-2",
              inlineData: "other data",
              disabled: true
            }
          ]
        }
      ];

      const handleChange = jest.fn();

      const { getByText, getByPlaceholderText } = render(
        <Dropdown<InlineItemType>
          options={typedInlineOptions}
          placeholder="Select typed inline option"
          onChange={handleChange}
        />
      );

      const input = getByPlaceholderText("Select typed inline option");
      fireEvent.click(input);

      expect(getByText("Typed Inline 1")).toBeInTheDocument();

      fireEvent.click(getByText("Typed Inline 1"));
      expect(handleChange).toHaveBeenCalledWith(
        expect.objectContaining({
          label: "Typed Inline 1",
          value: "typed-inline-1",
          inlineData: "some data"
        })
      );
    });

    it("should work with renderer without explicit type parameter", () => {
      const inlineOptions = [
        {
          label: "Rendered Group",
          options: [
            { label: "Rendered Option 1", value: "rendered-1" },
            { label: "Rendered Option 2", value: "rendered-2" }
          ]
        }
      ];

      const customRenderer = (item: any) => <div data-testid={`inline-render-${item.value}`}>Custom: {item.label}</div>;

      const { getByTestId, getByPlaceholderText } = render(
        <Dropdown options={inlineOptions} placeholder="Select rendered option" optionRenderer={customRenderer} />
      );

      const input = getByPlaceholderText("Select rendered option");
      fireEvent.click(input);

      expect(getByTestId("inline-render-rendered-1")).toBeInTheDocument();
      expect(getByTestId("inline-render-rendered-2")).toBeInTheDocument();
    });

    it("should work with renderer and explicit type parameter", () => {
      interface RenderedType extends Record<string, unknown> {
        value: string;
        icon?: string;
      }

      type RenderedItemType = BaseListItemData<RenderedType>;

      const typedRenderedOptions: ListGroup<RenderedItemType>[] = [
        {
          label: "Typed Rendered",
          options: [
            {
              label: "Rendered Type 1",
              value: "typed-rendered-1",
              icon: "star"
            },
            {
              label: "Rendered Type 2",
              value: "typed-rendered-2",
              icon: "flag"
            }
          ]
        }
      ];

      const typedRenderer = (item: RenderedItemType) => (
        <div data-testid={`typed-render-${item.value}`}>
          {item.icon && <span>{item.icon}</span>}
          <span>{item.label}</span>
        </div>
      );

      const { getByTestId, getByPlaceholderText } = render(
        <Dropdown<RenderedItemType>
          options={typedRenderedOptions}
          placeholder="Select typed rendered option"
          optionRenderer={typedRenderer}
        />
      );

      const input = getByPlaceholderText("Select typed rendered option");
      fireEvent.click(input);

      expect(getByTestId("typed-render-typed-rendered-1")).toBeInTheDocument();
      expect(getByTestId("typed-render-typed-rendered-2")).toBeInTheDocument();
    });
  });
});
