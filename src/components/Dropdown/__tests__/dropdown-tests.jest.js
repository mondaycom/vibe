import DropdownDriver from "./driver";
import React from "react";

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

  describe("Controlled", () => {
    let component;

    beforeEach(() => {
      component = new DropdownDriver().withOptions().withValue(mockOptions[0]);
    });

    it("Should display the provided value", () => {
      component.render();

      expect(component.singleValueText).toContain("Ocean");
    });

    it("Should not change value internally", () => {
      component.selectOption(2);
      component.render();

      expect(component.singleValueText).toContain("Ocean");
    });

    it("Should change displayed value when passed a new value", () => {
      component.withOnChange(option => {
        component.props.value = option;
      });

      component.render();
      component.selectOption(2);
      component.render();

      expect(component.singleValueText).toContain("Purple");
    });
  });

  describe("ref forwarding", () => {
    let component;
    const ref = React.createRef();
    const onFocus = jest.fn();

    beforeEach(() => {
      component = new DropdownDriver().withOptions().withValue(mockOptions[0]).withRef(ref).withOnFocus(onFocus);
    });

    it("Should be able to focus input via ref", () => {
      component.render();

      expect(ref.current).not.toBeUndefined();
      component.focusSelect(ref);

      expect(onFocus).toBeCalled();
    });
  });

  describe("multi", () => {
    let component;
    const onChange = jest.fn();
    const onClear = jest.fn();
    const onOptionRemove = jest.fn();

    beforeEach(() => {
      component = new DropdownDriver()
        .withOptions()
        .withMulti()
        .withOnChange(onChange)
        .withOnOptionRemove(onOptionRemove)
        .withOnClear(onClear);
    });

    it("Should support selecting multiple options", () => {
      component.selectOption(0);
      component.selectOption(2);
      component.selectOption(3);

      expect(onChange).toBeCalledTimes(3);
      expect(onChange).toHaveBeenLastCalledWith([mockOptions[0], mockOptions[2], mockOptions[3]], {
        action: "select-option",
        option: mockOptions[3]
      });
      expect(component.chips.values).toEqual(["ocean", "purple", "red"]);
    });

    it("Should support removing selected options", () => {
      component.selectOption(0);
      component.selectOption(2);
      component.selectOption(3);

      component.removeOption(0);

      expect(onChange).toBeCalledTimes(4);
      expect(onChange).toHaveBeenLastCalledWith([mockOptions[2], mockOptions[3]], {
        action: "remove-value",
        removedValue: mockOptions[0]
      });
      expect(onOptionRemove).toBeCalledWith(mockOptions[0]);
      expect(component.chips.values).toEqual(["purple", "red"]);
    });

    it("Should support clearing options", () => {
      component.selectOption(0);

      component.clearOptions();
      component.render();

      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith(null, {
        action: "clear"
      });
      expect(onClear).toBeCalled();
      expect(component.chips.values).toEqual([]);
    });

    it("should not show the X in default value chips in default options  are mandatory state", () => {
      component = new DropdownDriver()
        .withMandatoryDefaultOptions()
        .withMulti()
        .withOptions()
        .withDefaultValue([mockOptions[0]]);

      const button = component.getCloseButton(0);
      component.render();

      expect(button).toBe(null);
    });

    describe("Controlled", () => {
      let value;

      beforeEach(() => {
        value = [component.options[0], component.options[2]];
        component.withValue(value);
      });

      it("Should support selecting multiple options", () => {
        component.withOnOptionSelect(option => value.push(option));

        component.selectOption(3);
        component.render();

        expect(component.chips.values).toEqual(["ocean", "purple", "red"]);
      });

      it("Should support removing options", () => {
        component.withOnOptionRemove(() => value.pop());

        component.removeOption(2);
        component.render();

        expect(component.chips.values).toEqual(["ocean"]);
      });

      it("Should support clearing options", () => {
        component.withOnClear(() => {
          value.length = 0;
        });

        component.clearOptions();
        component.render();

        expect(component.chips.values).toEqual([]);
      });
    });
  });
});
