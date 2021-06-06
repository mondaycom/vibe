import React from "react";
import renderer from "react-test-renderer";
import Combobox from "../Combobox";

describe("<Combobox />", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Combobox />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("renders correctly with one option", () => {
    const tree = renderer.create(<Combobox option={[{ id: "1", label: "Test" }]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
