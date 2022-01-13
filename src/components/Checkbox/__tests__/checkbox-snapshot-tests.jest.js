import React from "react";
import renderer from "react-test-renderer";
import { Checkbox } from "../Checkbox";

describe("Checkbox renders correctly", () => {
  it("with props", () => {
    const tree = renderer
      .create(<Checkbox className="dummy-class-name" label="Option 1" name="checkbox" value="option1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with empty props", () => {
    const tree = renderer.create(<Checkbox />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when checked", () => {
    const tree = renderer.create(<Checkbox checked />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Checkbox disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with name", () => {
    const tree = renderer.create(<Checkbox name="checkbox" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Checkbox value="checkboxValue" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when default checked", () => {
    const tree = renderer.create(<Checkbox defaultChecked />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when interminate", () => {
    const tree = renderer.create(<Checkbox indeterminate />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabelledBy", () => {
    const tree = renderer.create(<Checkbox ariaLabelledBy="aria" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
