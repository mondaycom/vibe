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

      expect(component.singleValueText).toBe("Ocean");
    });

    it("Should not change value internally", () => {
      component.selectOption(2);
      component.render();

      expect(component.singleValueText).toBe("Ocean");
    });

    it("Should change displayed value when passed a new value", () => {
      component.withOnChange(option => {
        component.props.value = option;
      });

      component.render();
      component.selectOption(2);
      component.render();

      expect(component.singleValueText).toBe("Purple");
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
      component.render();

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
