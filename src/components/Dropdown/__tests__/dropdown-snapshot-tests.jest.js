import React from "react";
import renderer from "react-test-renderer";
import Dropdown from "../Dropdown";

const mockOptions = [
    { value: "ocean", label: "Ocean", isFixed: true },
    { value: "blue", label: "Blue", isDisabled: true },
    { value: "purple", label: "Purple" },
    { value: "red", label: "Red", isFixed: true },
    { value: "orange", label: "Orange" },
    { value: "yellow", label: "Yellow" }
  ];

describe("Dropdown renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Dropdown />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Dropdown className="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with placeholder", () => {
    const tree = renderer.create(<Dropdown placeholder="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Dropdown disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("without clear button", () => {
    const tree = renderer.create(<Dropdown clearable={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when rtl", () => {
    const tree = renderer.create(<Dropdown rtl />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with options", () => {
    const tree = renderer.create(<Dropdown options={mockOptions} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Dropdown placeholidder="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with autoFocus", () => {
    const tree = renderer.create(<Dropdown autoFocus />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multi", () => {
    const tree = renderer.create(<Dropdown multi />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multiline", () => {
    const tree = renderer.create(<Dropdown multiline />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with tabIndex", () => {
    const tree = renderer.create(<Dropdown tabIndex={9999} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Dropdown value={mockOptions[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with defaultValue", () => {
    const tree = renderer.create(<Dropdown defaultValue={mockOptions[0]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
