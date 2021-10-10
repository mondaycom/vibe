import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "../Dropdown";

const MOCK_OPTIONS = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" }
];

class DropdownDriver {
  constructor() {
    this.props = { className: "dropdown-story" };

    return this;
  }

  render() {
    this.renderResult = render(<Dropdown {...this.props} />);
  }

  get snapshot() {
    if (!this.renderResult) {
      this.render();
    }

    return this.renderResult.asFragment();
  }

  get dropdownMenu() {
    return this.renderResult.container.querySelector(".menu");
  }

  get noOptionsMessage() {
    return this.renderResult.queryByText("No options");
  }

  focusInput() {
    this.render();

    const inputElement = this.renderResult.getByLabelText("Dropdown input");
    inputElement.focus();

    jest.advanceTimersByTime(2000);
  }

  clickInput() {
    this.render();

    const inputElement = this.renderResult.getByLabelText("Dropdown input");
    inputElement.focus();
    fireEvent.mouseDown(inputElement);

    jest.advanceTimersByTime(2000);
  }

  withOptions(options = MOCK_OPTIONS) {
    this.props.options = options;

    return this;
  }

  withVirtualizedOptions() {
    this.props.options = new Array(10000).fill(null).map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));
    this.props.isVirtualized = true;

    return this;
  }

  withAsyncOptions() {
    this.props.asyncOptions = inputValue => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(MOCK_OPTIONS.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase())));
        }, 1000);
      });
    };

    return this;
  }

  withDefaultOptions() {
    this.props.defaultOptions = true;

    return this;
  }

  withPlaceholder(placeHolder = "placeHolder") {
    this.props.placeHolder = placeHolder;

    return this;
  }

  withSize(size) {
    this.props.size = size;

    return this;
  }

  withOpenMenuOnClick() {
    this.props.openMenuOnClick = true;

    return this;
  }

  withOpenMenuOnFocus() {
    this.props.openMenuOnFocus = true;

    return this;
  }

  withExtraStyles(extraStyles) {
    this.props.extraStyles = extraStyles;

    return this;
  }
}

jest.useFakeTimers();

describe("Dropdown", () => {
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
    it("Should support extending style groups with monday defaults", async () => {
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

    it("Should support extending style groupd that don't have monday defaults", async () => {
      const expectedZIndex = "9999999";
      const component = new DropdownDriver().withOpenMenuOnFocus().withExtraStyles(() => ({
        noOptionsMessage: base => ({ ...base, zIndex: expectedZIndex })
      }));

      component.focusInput();

      expect(getComputedStyle(component.noOptionsMessage).zIndex).toBe(expectedZIndex);
    });
  });
});
