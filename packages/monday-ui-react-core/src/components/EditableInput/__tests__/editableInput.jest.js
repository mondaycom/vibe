import React from "react";
import renderer from "react-test-renderer";
import EditableInput from "../EditableInput";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<EditableInput />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with aria label", () => {
  const tree = renderer.create(<EditableInput ariaLabel="Edit input" />).toJSON();
  expect(tree).toMatchSnapshot();
});
