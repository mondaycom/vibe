import React from "react";
import renderer from "react-test-renderer";
import Checkbox from "../Checkbox";

describe("Checkbox renders correctly", () => {
  it("with props", () => {
    const tree = renderer
      .create(<Checkbox className="dummy-class-name" label="Option 1" name="checkbox" value="option1" id="test" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with empty props", () => {
    const tree = renderer.create(<Checkbox id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when checked", () => {
    const tree = renderer.create(<Checkbox checked id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Checkbox disabled id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with name", () => {
    const tree = renderer.create(<Checkbox name="checkbox" id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Checkbox value="checkboxValue" id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when default checked", () => {
    const tree = renderer.create(<Checkbox defaultChecked id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when interminate", () => {
    const tree = renderer.create(<Checkbox indeterminate id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabelledBy", () => {
    const tree = renderer.create(<Checkbox ariaLabelledBy="aria" id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("without label", () => {
    const tree = renderer.create(<Checkbox label={false} id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
