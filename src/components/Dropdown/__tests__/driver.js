import React from "react";
import { render, fireEvent, act, cleanup } from "@testing-library/react";
import Dropdown from "../Dropdown";

const MOCK_OPTIONS = [
  { value: "ocean", label: "Ocean", isFixed: true },
  { value: "blue", label: "Blue", isDisabled: true },
  { value: "purple", label: "Purple" },
  { value: "red", label: "Red", isFixed: true },
  { value: "orange", label: "Orange" },
  { value: "yellow", label: "Yellow" }
];

const CHIP_TESTID = "value-container-chip";

export default class DropdownDriver {
  constructor() {
    this.props = { className: "dropdown-story" };

    // eslint-disable-next-line no-constructor-return
    return this;
  }

  render() {
    cleanup();
    this.renderResult = render(<Dropdown {...this.props} />);
  }

  ensureRendered() {
    if (!this.renderResult) {
      this.render();
    }
  }

  get snapshot() {
    this.ensureRendered();

    return this.renderResult.asFragment();
  }

  get dropdownMenu() {
    return this.renderResult.container.querySelector(".menu");
  }

  get noOptionsMessage() {
    return this.renderResult.queryByText("No options");
  }

  get chips() {
    this.ensureRendered();

    return this.renderResult.queryAllByTestId(CHIP_TESTID).reduce(
      (acc, element) => ({
        values: [...acc.values, element.id],
        labels: [...acc.labels, element.textContent],
        html: [...acc.html, element]
      }),
      {
        values: [],
        labels: [],
        html: []
      }
    );
  }

  get singleValueText() {
    return this.renderResult.container.querySelector("[class*='singleValue']").innerHTML;
  }

  focusInput() {
    this.ensureRendered();

    const inputElement = this.renderResult.getByLabelText("Dropdown input");
    inputElement.focus();
  }

  clickInput() {
    this.ensureRendered();

    const inputElement = this.renderResult.getByLabelText("Dropdown input");
    inputElement.focus();
    fireEvent.mouseDown(inputElement);
  }

  selectOption(index) {
    this.clickInput();

    act(() => {
      this.renderResult.getByText(this.options[index].label).click();
    });
  }

  getCloseButton(index) {
    this.ensureRendered();

    const id = this.options[index].value;
    const chip = this.renderResult.container.querySelector(`[data-testid="${CHIP_TESTID}"]#${id}`);

    if (!chip) {
      throw new Error(`Option #${index} was not selected`);
    }

    return chip.querySelector(`[data-testid="${CHIP_TESTID}-close"]`);
  }

  removeOption(index) {
    const closeButton = this.getCloseButton(index);

    const event = document.createEvent("SVGEvents");
    event.initEvent("click", true, true);

    act(() => {
      closeButton.dispatchEvent(event);
    });
  }

  clearOptions() {
    this.ensureRendered();

    const clearButton = this.renderResult.container.querySelector(".clear-indicator");

    const event = document.createEvent("MouseEvents");
    event.initEvent("mousedown", true, true);

    act(() => {
      clearButton.dispatchEvent(event);
    });
  }

  setProp(propName, value) {
    this.props[propName] = value;

    return this;
  }

  withOptions(options = MOCK_OPTIONS) {
    this.options = options;

    return this.setProp("options", options);
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
    return this.setProp("defaultOptions", true);
  }

  withPlaceholder(placeHolder = "placeHolder") {
    return this.setProp("placeHolder", placeHolder);
  }

  withSize(size) {
    return this.setProp("size", size);
  }

  withOpenMenuOnClick() {
    return this.setProp("openMenuOnClick", true);
  }

  withOpenMenuOnFocus() {
    return this.setProp("openMenuOnFocus", true);
  }

  withMandatoryDefaultOptions() {
    return this.setProp("withMandatoryDefaultOptions", true);
  }

  withDefaultValue(defaultValue) {
    return this.setProp("defaultValue", defaultValue);
  }

  withExtraStyles(extraStyles) {
    return this.setProp("extraStyles", extraStyles);
  }

  withMulti() {
    return this.setProp("multi", true);
  }

  withValue(value) {
    return this.setProp("value", value);
  }

  withOnChange(onChange) {
    return this.setProp("onChange", onChange);
  }

  withOnOptionSelect(onOptionSelect) {
    return this.setProp("onOptionSelect", onOptionSelect);
  }

  withOnOptionRemove(onOptionRemove) {
    return this.setProp("onOptionRemove", onOptionRemove);
  }

  withOnClear(onClear) {
    return this.setProp("onClear", onClear);
  }
}
