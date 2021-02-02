import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen, act } from "@testing-library/react";
import Dropdown from "../Dropdown";

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
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render correctly for the different sizes", function() {
    Object.values(Dropdown.size).forEach(size => {
      const tree = renderer.create(<Dropdown size={size} placeholder="placeHolder" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("should use virtualization if set", function() {
    const mockVirtualizedOptions = new Array(10000)
      .fill(null)
      .map((_, i) => ({ value: i + 1, label: (i + 1).toString() }));
    const { getByLabelText, asFragment } = render(
      <Dropdown options={mockVirtualizedOptions} isVirtualized openMenuOnClick openMenuOnFocus />
    );
    const inputElement = getByLabelText("Dropdown input");
    inputElement.focus();
    jest.advanceTimersByTime(2000);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should use async if set", () => {
    const mockPromiseOptions = inputValue => {
      const arr = mockOptions;
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(arr.filter(({ label }) => label.toLowerCase().includes(inputValue.toLowerCase())));
        }, 1000);
      });
    };
    const { getByLabelText, asFragment } = render(
      <Dropdown className="dropdown-story" asyncOptions={mockPromiseOptions} defaultOptions={true} />
    );
    const inputElement = getByLabelText("Dropdown input");
    inputElement.focus();
    jest.advanceTimersByTime(2000);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should open menu on focus if set", function() {
    const { getByLabelText, asFragment } = render(<Dropdown options={mockOptions} openMenuOnFocus />);
    const inputElement = getByLabelText("Dropdown input");

    inputElement.focus();
    jest.advanceTimersByTime(2000);
    expect(asFragment()).toMatchSnapshot();
  });

  it("should open menu on click if set", function() {
    const { asFragment, getByLabelText } = render(
      <Dropdown options={mockOptions} openMenuOnClick searchable placeholder={"mockPlaceholder"} />
    );
    const inputElement = getByLabelText("Dropdown input");
    inputElement.focus();
    fireEvent.mouseDown(inputElement);
    jest.advanceTimersByTime(2000);
    expect(asFragment()).toMatchSnapshot();
  });
});
