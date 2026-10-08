import { vi, describe, it, expect, afterEach } from "vitest";
import React from "react";
import { render, fireEvent, cleanup, act } from "@testing-library/react";
import Dropdown from "../Dropdown";
import { type BaseDropdownProps } from "../Dropdown.types";

type Option = { value: string; label: string; removable?: boolean };

const options: Option[] = [
  { value: "alice", label: "Alice" },
  { value: "bob", label: "Bob" },
  { value: "carol", label: "Carol" }
];

function renderDropdown(props: Partial<BaseDropdownProps<Option>>) {
  const dropdownProps = { options, placeholder: "Select a person", ...props } as BaseDropdownProps<Option>;
  return render(<Dropdown<Option> {...dropdownProps} />);
}

function normalize(html: string) {
  return html.replace(/\saria-controls="[^"]*"/g, "");
}

function getRoot(element: HTMLElement) {
  const root = element.closest("[data-vibe]")?.parentElement;
  if (!root) {
    throw new Error("Dropdown root not found");
  }
  return root;
}

function getElement<T extends Element>(element: T | null | undefined): T {
  if (!element) {
    throw new Error("Element not found");
  }
  return element;
}

function isFullDropdown(combobox: HTMLElement) {
  return combobox.hasAttribute("aria-controls");
}

function flushIdle() {
  act(() => {
    vi.runOnlyPendingTimers();
  });
}

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});

describe("Dropdown lazy", () => {
  describe("markup parity with the full dropdown", () => {
    const modes = [
      { name: "select", props: {} },
      { name: "combobox", props: { searchable: true } },
      { name: "combobox with inline selected value", props: { searchable: true, inlineSelectedValue: true } },
      { name: "multi select", props: { multi: true } },
      { name: "multi combobox", props: { multi: true, searchable: true } },
      {
        name: "multi combobox with interactive chips",
        props: { multi: true, searchable: true, interactiveChips: true }
      },
      { name: "multi multiline", props: { multi: true, multiline: true } }
    ];

    const variants = [
      { name: "empty", props: {} },
      { name: "with value", props: { valueKind: "value" } },
      { name: "with label and helper text", props: { label: "Person", helperText: "Pick one", valueKind: "value" } },
      { name: "disabled", props: { disabled: true, valueKind: "value" } },
      { name: "read only", props: { readOnly: true, valueKind: "value" } },
      { name: "error and borderless", props: { error: true, borderless: true } },
      { name: "not clearable", props: { clearable: false, valueKind: "value" } },
      { name: "loading", props: { loading: true } },
      { name: "small", props: { size: "small", valueKind: "value" } },
      { name: "aria-label without label", props: { "aria-label": "Person", valueKind: "value" } },
      { name: "rtl", props: { dir: "rtl", valueKind: "value" } }
    ];

    modes.forEach(mode => {
      variants.forEach(variant => {
        it(`matches for ${mode.name} (${variant.name})`, () => {
          const { valueKind, ...variantProps } = variant.props as Record<string, unknown>;
          const isMulti = Boolean((mode.props as Record<string, unknown>).multi);
          const valueProps = valueKind ? { value: isMulti ? [options[0], options[1]] : options[0] } : {};
          const props = { id: "people", ...mode.props, ...variantProps, ...valueProps } as Partial<
            BaseDropdownProps<Option>
          >;

          const { container: fullContainer } = renderDropdown(props);
          const fullHtml = normalize(fullContainer.innerHTML);
          cleanup();

          const { container: lazyContainer } = renderDropdown({ ...props, lazy: true });
          expect(normalize(lazyContainer.innerHTML)).toBe(fullHtml);
        });
      });
    });

    it("matches with a valueRenderer and start element", () => {
      const props = {
        id: "people",
        value: { ...options[0], startElement: { type: "indent" as const } },
        valueRenderer: (option: Option) => <b>{option.label}</b>
      } as Partial<BaseDropdownProps<Option>>;

      const { container: fullContainer } = renderDropdown(props);
      const fullHtml = normalize(fullContainer.innerHTML);
      cleanup();

      const { container: lazyContainer } = renderDropdown({ ...props, lazy: true });
      expect(normalize(lazyContainer.innerHTML)).toBe(fullHtml);
    });
  });

  describe("before activation", () => {
    it("does not render a menu", () => {
      const { queryByRole } = renderDropdown({ lazy: true, searchable: true });
      expect(queryByRole("listbox")).not.toBeInTheDocument();
      expect(document.body.querySelectorAll('[role="listbox"]')).toHaveLength(0);
    });

    it("exposes a collapsed, labelled combobox without dangling references", () => {
      const { getByRole, getByText } = renderDropdown({
        lazy: true,
        searchable: true,
        label: "Person",
        defaultValue: options[1]
      });
      const combobox = getByRole("combobox", { name: "Person" });
      expect(combobox).toHaveAttribute("aria-expanded", "false");
      expect(combobox).not.toHaveAttribute("aria-controls");
      expect(getByText("Bob")).toBeInTheDocument();
    });

    it("links the label to the combobox when no id is provided", () => {
      const { getByText, getByRole } = renderDropdown({ lazy: true, searchable: true, label: "Person" });
      const label = getByText("Person").closest("label");
      const combobox = getByRole("combobox");
      expect(label).toHaveAttribute("for", combobox.id);
      expect(combobox).toHaveAttribute("aria-labelledby", label?.id);
    });

    it("does not call interaction callbacks on mount", () => {
      const onFocus = vi.fn();
      const onMenuOpen = vi.fn();
      const onChange = vi.fn();
      renderDropdown({ lazy: true, searchable: true, onFocus, onMenuOpen, onChange });
      expect(onFocus).not.toHaveBeenCalled();
      expect(onMenuOpen).not.toHaveBeenCalled();
      expect(onChange).not.toHaveBeenCalled();
    });

    it("forwards the ref to the root element", () => {
      const ref = React.createRef<HTMLDivElement>();
      render(<Dropdown<Option> ref={ref} options={options} lazy id="people" />);
      expect(ref.current).toHaveAttribute("data-vibe");
    });
  });

  describe("activation", () => {
    it("opens the menu and focuses the input when the combobox is clicked", () => {
      const onMenuOpen = vi.fn();
      const onFocus = vi.fn();
      const { getByRole } = renderDropdown({ lazy: true, searchable: true, onMenuOpen, onFocus });

      fireEvent.click(getByRole("combobox"));

      const combobox = getByRole("combobox");
      expect(combobox).toHaveAttribute("aria-expanded", "true");
      expect(combobox).toHaveFocus();
      expect(getByRole("listbox")).toBeInTheDocument();
      expect(onMenuOpen).toHaveBeenCalledTimes(1);
      expect(onFocus).toHaveBeenCalledTimes(1);
    });

    it("opens the menu when a non-searchable trigger is clicked", () => {
      const onMenuOpen = vi.fn();
      const { getByRole } = renderDropdown({ lazy: true, onMenuOpen });

      fireEvent.click(getByRole("combobox"));

      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "true");
      expect(getByRole("combobox")).toHaveFocus();
      expect(onMenuOpen).toHaveBeenCalledTimes(1);
    });

    it("moves focus to the full combobox without opening the menu on keyboard focus", () => {
      const onFocus = vi.fn();
      const onMenuOpen = vi.fn();
      const { getByRole } = renderDropdown({ lazy: true, searchable: true, onFocus, onMenuOpen });

      act(() => {
        getByRole("combobox").focus();
      });

      const combobox = getByRole("combobox");
      expect(combobox).toHaveFocus();
      expect(combobox).toHaveAttribute("aria-expanded", "false");
      expect(onFocus).toHaveBeenCalledTimes(1);
      expect(onMenuOpen).not.toHaveBeenCalled();
    });

    it("keeps keyboard focus on the clear button when it is focused first", () => {
      const { getByRole, getByTestId } = renderDropdown({
        lazy: true,
        searchable: true,
        defaultValue: options[0],
        clearAriaLabel: "Clear"
      });

      act(() => {
        getByRole("button", { name: "Clear" }).focus();
      });

      expect(getByTestId("dropdown-clear-button")).toHaveFocus();
      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "false");
    });

    it("selects an option after activation and keeps showing it once idle", () => {
      vi.useFakeTimers();
      const onChange = vi.fn();
      const { getByRole, getByText, queryByRole } = renderDropdown({ lazy: true, searchable: true, onChange });

      fireEvent.click(getByRole("combobox"));
      fireEvent.click(getByText("Carol"));
      expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ value: "carol" }));

      fireEvent.blur(getByRole("combobox"));
      fireEvent.pointerLeave(getRoot(getByRole("combobox")));
      flushIdle();

      expect(queryByRole("listbox")).not.toBeInTheDocument();
      expect(isFullDropdown(getByRole("combobox"))).toBe(false);
      expect(getByText("Carol")).toBeInTheDocument();
    });

    it("keeps the uncontrolled selection across activations", () => {
      vi.useFakeTimers();
      const { getByRole, getByText } = renderDropdown({ lazy: true, searchable: true, defaultValue: options[0] });

      fireEvent.click(getByRole("combobox"));
      fireEvent.click(getByText("Bob"));
      fireEvent.blur(getByRole("combobox"));
      fireEvent.pointerLeave(getRoot(getByRole("combobox")));
      flushIdle();
      expect(isFullDropdown(getByRole("combobox"))).toBe(false);

      fireEvent.click(getByRole("combobox"));
      expect(getByRole("option", { name: "Bob" })).toHaveAttribute("aria-selected", "true");
    });

    it("stays active while the menu is open", () => {
      vi.useFakeTimers();
      const { getByRole } = renderDropdown({ lazy: true, searchable: true });

      fireEvent.click(getByRole("combobox"));
      fireEvent.pointerLeave(getRoot(getByRole("combobox")));
      flushIdle();

      expect(isFullDropdown(getByRole("combobox"))).toBe(true);
      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "true");
    });

    it("clears the value when the clear button is clicked before activation", () => {
      const onChange = vi.fn();
      const onClear = vi.fn();
      const { getByTestId } = renderDropdown({
        lazy: true,
        searchable: true,
        defaultValue: options[0],
        onChange,
        onClear
      });

      fireEvent.click(getByTestId("dropdown-clear-button"));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(null);
      expect(onClear).toHaveBeenCalledTimes(1);
    });

    it("clears the value when the clear icon itself is tapped before activation", () => {
      const onChange = vi.fn();
      const { getByTestId } = renderDropdown({ lazy: true, searchable: true, defaultValue: options[0], onChange });

      fireEvent.click(getElement(getByTestId("dropdown-clear-button").querySelector("path")));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(null);
    });

    it("opens the menu when the chevron is clicked before activation", () => {
      const onMenuOpen = vi.fn();
      const { getByRole, container } = renderDropdown({ lazy: true, searchable: true, onMenuOpen });

      fireEvent.click(getElement(container.querySelector('button[tabindex="-1"]')));

      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "true");
      expect(onMenuOpen).toHaveBeenCalledTimes(1);
    });

    it("removes a chip when its delete button is clicked before activation", () => {
      const onChange = vi.fn();
      const onOptionRemove = vi.fn();
      const { getByRole } = renderDropdown({
        lazy: true,
        multi: true,
        multiline: true,
        defaultValue: [options[0], options[1]],
        onChange,
        onOptionRemove
      } as Partial<BaseDropdownProps<Option>>);

      fireEvent.click(getByRole("button", { name: "Remove Alice" }));

      expect(onOptionRemove).toHaveBeenCalledTimes(1);
      expect(onOptionRemove).toHaveBeenCalledWith(expect.objectContaining({ value: "alice" }));
      expect(onChange).toHaveBeenCalledWith([expect.objectContaining({ value: "bob" })]);
    });

    it("opens through the label like the full dropdown", () => {
      const onMenuOpen = vi.fn();
      const { getByText, getByRole } = renderDropdown({ lazy: true, searchable: true, label: "Person", onMenuOpen });

      fireEvent.click(getByText("Person"));

      expect(getByRole("combobox")).toHaveFocus();
    });

    it("does not activate when disabled", () => {
      const onFocus = vi.fn();
      const { getByRole } = renderDropdown({ lazy: true, disabled: true, onFocus });

      fireEvent.click(getByRole("combobox"));

      expect(getByRole("combobox")).toHaveAttribute("aria-expanded", "false");
      expect(document.body.querySelectorAll('[role="listbox"]')).toHaveLength(0);
      expect(onFocus).not.toHaveBeenCalled();
    });
  });

  describe("props that require the full dropdown", () => {
    it("renders the full dropdown when isMenuOpen is true", () => {
      const { getByRole } = renderDropdown({ lazy: true, searchable: true, isMenuOpen: true });
      expect(getByRole("listbox")).toBeInTheDocument();
    });

    it("renders the full dropdown with autoFocus", () => {
      const { getByRole } = renderDropdown({ lazy: true, searchable: true, autoFocus: true });
      expect(getByRole("combobox")).toHaveFocus();
      expect(getByRole("listbox")).toBeInTheDocument();
    });

    it("ignores lazy in box mode", () => {
      const { getByRole } = renderDropdown({ lazy: true, searchable: true, boxMode: true });
      expect(getByRole("listbox")).toBeInTheDocument();
    });
  });
});
