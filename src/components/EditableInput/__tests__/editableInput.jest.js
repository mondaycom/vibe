import React from "react";
import renderer from "react-test-renderer";
import EditableInput from "../EditableInput";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<EditableInput />).toJSON();
  expect(tree).toMatchSnapshot();
});
