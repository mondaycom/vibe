import { vi, describe, it, expect } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dropdown from "../Dropdown";
import { type BaseDropdownProps } from "../Dropdown.types";
import { type BaseItemData } from "@vibe/base-list";

const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" }
];

function renderDropdown(props?: Partial<BaseDropdownProps<BaseItemData>>) {
  const allProps = {
    options,
    label: "Fruit",
    placeholder: "Pick a fruit",
    searchable: true,
    searchPlacement: "menu",
    ...props
  } as BaseDropdownProps<BaseItemData>;
  return render(<Dropdown {...allProps} />);
}

const getTrigger = () => screen.getByRole("button", { name: /^Fruit .+/ });
const getSearchInput = () => screen.getByRole("combobox");
const getOptionLabels = () => screen.queryAllByRole("option").map(option => option.textContent);

describe("Dropdown with searchPlacement='menu'", () => {
  describe("single select", () => {
    it("should render a static trigger with the placeholder instead of an input", () => {
      renderDropdown();

      const trigger = getTrigger();
      expect(trigger).toHaveTextContent("Pick a fruit");
      expect(trigger.tagName).not.toBe("INPUT");
      expect(trigger).toHaveAttribute("tabindex", "0");
      expect(trigger).toHaveAttribute("aria-haspopup", "listbox");
      expect(trigger).toHaveAttribute("aria-expanded", "false");
      expect(screen.queryByPlaceholderText("Pick a fruit")).not.toBeInTheDocument();
    });

    it("should label the trigger with both the field label and its own content", () => {
      renderDropdown({ defaultValue: options[1] });

      const trigger = getTrigger();
      const [labelId, ownId] = (trigger.getAttribute("aria-labelledby") ?? "").split(" ");
      expect(document.getElementById(labelId)).toHaveTextContent("Fruit");
      expect(ownId).toBe(trigger.id);
      expect(trigger).toHaveTextContent("Banana");
    });

    it("should open the menu on trigger click and focus the search input inside it", () => {
      renderDropdown();

      fireEvent.click(getTrigger());

      expect(getTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(getOptionLabels()).toEqual(["Apple", "Banana", "Cherry"]);
      expect(getSearchInput()).toHaveFocus();
      expect(getSearchInput()).toHaveAttribute("aria-label", "Fruit");
    });

    it.each(["Enter", " ", "ArrowDown", "ArrowUp"])("should open the menu when pressing '%s' on the trigger", key => {
      renderDropdown();

      fireEvent.keyDown(getTrigger(), { key });

      expect(getTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(getSearchInput()).toHaveFocus();
    });

    it("should filter options when typing in the menu search", () => {
      const onInputChange = vi.fn();
      renderDropdown({ onInputChange });

      fireEvent.click(getTrigger());
      fireEvent.change(getSearchInput(), { target: { value: "an" } });

      expect(getOptionLabels()).toEqual(["Banana"]);
      expect(onInputChange).toHaveBeenLastCalledWith("an");
    });

    it("should select an option on click, show it in the trigger and return focus to the trigger", () => {
      const onChange = vi.fn();
      renderDropdown({ onChange });

      fireEvent.click(getTrigger());
      fireEvent.click(screen.getByRole("option", { name: "Cherry" }));

      expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ value: "cherry" }));
      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(getTrigger()).toHaveTextContent("Cherry");
      expect(getTrigger()).toHaveFocus();
    });

    it("should select the highlighted option with the keyboard from the search input", () => {
      const onChange = vi.fn();
      renderDropdown({ onChange });

      fireEvent.keyDown(getTrigger(), { key: "Enter" });
      fireEvent.keyDown(getSearchInput(), { key: "ArrowDown" });
      fireEvent.keyDown(getSearchInput(), { key: "Enter" });

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(getTrigger()).toHaveFocus();
    });

    it("should close on Escape, return focus to the trigger and reset the search", () => {
      renderDropdown();

      fireEvent.click(getTrigger());
      fireEvent.change(getSearchInput(), { target: { value: "ch" } });
      expect(getOptionLabels()).toEqual(["Cherry"]);

      fireEvent.keyDown(getSearchInput(), { key: "Escape" });
      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(getTrigger()).toHaveFocus();

      fireEvent.click(getTrigger());
      expect(getSearchInput()).toHaveValue("");
      expect(getOptionLabels()).toEqual(["Apple", "Banana", "Cherry"]);
    });

    it("should move focus back to the trigger when tabbing out of the search", () => {
      renderDropdown();

      fireEvent.click(getTrigger());
      fireEvent.keyDown(getSearchInput(), { key: "Tab" });

      expect(getTrigger()).toHaveFocus();
      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
    });

    it("should keep the menu open when clearing the search with its clear button", () => {
      renderDropdown();

      fireEvent.click(getTrigger());
      fireEvent.change(getSearchInput(), { target: { value: "ap" } });
      expect(getOptionLabels()).toEqual(["Apple"]);

      const clearButton = screen.getByRole("button", { name: "Clear" });
      fireEvent.mouseDown(clearButton);
      fireEvent.mouseUp(clearButton);
      fireEvent.click(clearButton);

      expect(getTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(getSearchInput()).toHaveValue("");
      expect(getOptionLabels()).toEqual(["Apple", "Banana", "Cherry"]);
    });

    it("should close the menu when pressing the chevron while open", () => {
      const { container } = renderDropdown();
      fireEvent.click(getTrigger());

      const chevron = container.querySelector<HTMLButtonElement>(
        `button[aria-controls="${getTrigger().getAttribute("aria-controls")}"]`
      );
      userEvent.click(chevron);

      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
    });

    it("should not open when disabled", () => {
      renderDropdown({ disabled: true });

      fireEvent.click(getTrigger());
      fireEvent.keyDown(getTrigger(), { key: "Enter" });

      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
    });

    it("should ignore inlineSelectedValue and keep the selected value in the trigger", () => {
      renderDropdown({ inlineSelectedValue: true, defaultValue: options[0] });

      fireEvent.click(getTrigger());

      expect(getSearchInput()).toHaveValue("");
      expect(getTrigger()).toHaveTextContent("Apple");
    });
  });

  describe("multi select", () => {
    it("should keep the menu open on selection and render chips in the trigger", () => {
      const onChange = vi.fn();
      renderDropdown({ multi: true, onChange } as Partial<BaseDropdownProps<BaseItemData>>);

      fireEvent.click(getTrigger());
      fireEvent.change(getSearchInput(), { target: { value: "ban" } });
      fireEvent.click(screen.getByRole("option", { name: "Banana" }));

      expect(onChange).toHaveBeenLastCalledWith([expect.objectContaining({ value: "banana" })]);
      expect(getTrigger()).toHaveAttribute("aria-expanded", "true");
      expect(getTrigger()).toHaveTextContent("Banana");
      expect(getSearchInput()).toHaveValue("");
    });

    it("should include the selected chips in the trigger's accessible name", () => {
      renderDropdown({ multi: true, defaultValue: [options[0], options[2]] } as Partial<
        BaseDropdownProps<BaseItemData>
      >);

      expect(screen.getByRole("button", { name: "Fruit Apple, Cherry" })).toBeInTheDocument();
    });

    it("should describe the trigger with the selected chips when there is no visible label", () => {
      renderDropdown({
        multi: true,
        label: undefined,
        "aria-label": "Fruits",
        defaultValue: [options[1]]
      } as Partial<BaseDropdownProps<BaseItemData>>);

      const trigger = screen.getByRole("button", { name: "Fruits", description: "Banana" });
      expect(trigger).toHaveAttribute("aria-haspopup", "listbox");
      expect(trigger).toHaveAccessibleDescription("Banana");
    });

    it("should return focus to the trigger on Escape", () => {
      renderDropdown({ multi: true } as Partial<BaseDropdownProps<BaseItemData>>);

      fireEvent.click(getTrigger());
      fireEvent.keyDown(getSearchInput(), { key: "Escape" });

      expect(getTrigger()).toHaveAttribute("aria-expanded", "false");
      expect(getTrigger()).toHaveFocus();
    });
  });

  it("should open and focus the menu search when activated from the lazy static trigger", () => {
    renderDropdown({ lazy: true });

    fireEvent.click(getTrigger());

    expect(getTrigger()).toHaveAttribute("aria-expanded", "true");
    expect(getSearchInput()).toHaveFocus();
  });

  it("should keep the search input in the trigger by default", () => {
    renderDropdown({ searchPlacement: undefined });

    const input = screen.getByPlaceholderText("Pick a fruit");
    expect(input).toHaveAttribute("role", "combobox");
    expect(screen.queryByRole("button", { name: /^Fruit .+/ })).not.toBeInTheDocument();
  });

  it("should have no effect in box mode", () => {
    renderDropdown({ boxMode: true });

    expect(screen.getByPlaceholderText("Pick a fruit")).toHaveAttribute("role", "combobox");
  });
});
