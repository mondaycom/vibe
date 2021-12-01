import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Dropdown from "../Dropdown";
import DropdownDriver from "./driver";

describe("Dropdown", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });
  const mockOptions = [
    { value: "ocean", label: "Ocean", isFixed: true },
    { value: "blue", label: "Blue", isDisabled: true },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red", isFixed: true },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" }
  ];

  it("should render correctly with empty props", () => {
    const component = new DropdownDriver();

    expect(component.snapshot).toMatchSnapshot();
  });

  it("should render correctly for the different sizes", function() {
    Object.values(Dropdown.size).forEach(size => {
      const component = new DropdownDriver().withSize(size).withPlaceholder();

      expect(component.snapshot).toMatchSnapshot();
    });
  });

  it("should use virtualization if set", () => {
    const component = new DropdownDriver()
      .withOpenMenuOnClick()
      .withOpenMenuOnFocus()
      .withVirtualizedOptions();

    component.focusInput();

    expect(component.snapshot).toMatchSnapshot();
  });

  it("should use async if set", () => {
    const component = new DropdownDriver().withAsyncOptions().withDefaultOptions();

    component.focusInput();

    expect(component.snapshot).toMatchSnapshot();
  });

  it("should open menu on focus if set", function() {
    const component = new DropdownDriver().withOpenMenuOnClick().withOptions();

    component.focusInput();

    expect(component.snapshot).toMatchSnapshot();
  });

  it("should open menu on click if set", function() {
    const component = new DropdownDriver().withOpenMenuOnClick().withOptions();

    component.clickInput();

    expect(component.snapshot).toMatchSnapshot();
  });

  describe("extraStyles", () => {
    it("Should support extending style groups with monday defaults", () => {
      const expectedWidth = 310;
      const component = new DropdownDriver()
        .withOptions()
        .withOpenMenuOnFocus()
        .withExtraStyles(baseStyles => ({
          ...baseStyles,
          menu: base => ({ ...base, width: expectedWidth })
        }));

      component.focusInput();
      expect(getComputedStyle(component.dropdownMenu).width).toBe(`${expectedWidth}px`);
    });

    it("Should support extending style groupd that don't have monday defaults", () => {
      const expectedZIndex = "9999999";
      const component = new DropdownDriver().withOpenMenuOnFocus().withExtraStyles(() => ({
        noOptionsMessage: base => ({ ...base, zIndex: expectedZIndex })
      }));

      component.focusInput();

      expect(getComputedStyle(component.noOptionsMessage).zIndex).toBe(expectedZIndex);
    });
  });

  describe("multi", () => {
    let component;

    beforeEach(() => {
      component = new DropdownDriver().withOptions().withMulti();
    });

    it("Should support selecting multiple options", () => {
      component.selectOption(0);
      component.selectOption(2);
      component.selectOption(3);

      expect(component.chips.values).toEqual(["ocean", "purple", "red"]);
    });

    it("Should support removing selected options", () => {
      component.selectOption(0);
      component.selectOption(2);
      component.selectOption(3);

      component.removeOption(0);

      expect(component.chips.values).toEqual(["purple", "red"]);
    });

    it("Should support clearing options", () => {
      component.selectOption(0);

      component.clearOptions();
      component.rerender();

      expect(component.chips.values).toEqual([]);
    });

    describe("Controlled", () => {
      let options;

      beforeEach(() => {
        options = [component.options[0], component.options[2]];
        component.withValue(options);
      });

      it("Should support selecting multiple options", () => {
        component.withOnOptionSelect(option => options.push(option));

        component.selectOption(3);
        component.rerender();

        expect(component.chips.values).toEqual(["ocean", "purple", "red"]);
      });

      it("Should support removing options", () => {
        component.withOnOptionRemove(() => options.pop());

        component.removeOption(2);
        component.rerender();

        expect(component.chips.values).toEqual(["ocean"]);
      });

      it("Should support clearing options", () => {
        component.withOnClear(() => {
          options.length = 0;
        });

        component.clearOptions();
        component.rerender();

        expect(component.chips.values).toEqual([]);
      });
    });
  });
});
