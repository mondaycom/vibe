import React from "react";
import renderer from "react-test-renderer";
import ColorPicker from "../ColorPicker";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ColorPicker />).toJSON();
  expect(tree).toMatchSnapshot();
});
