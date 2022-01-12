import React from "react";
import renderer from "react-test-renderer";
import RadioButton from "../RadioButton";

describe("RadioButton renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<RadioButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with name", () => {
    const tree = renderer.create(<RadioButton name="radiosName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<RadioButton value="optionValue" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<RadioButton disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when default checked", () => {
    const tree = renderer.create(<RadioButton defaultChecked />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when checked", () => {
    const tree = renderer.create(<RadioButton checked />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when unchecked", () => {
    const tree = renderer.create(<RadioButton checked={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text", () => {
    const tree = renderer.create(<RadioButton text="test text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with componentClassName", () => {
    const tree = renderer.create(<RadioButton componentClassName="test-classname" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
