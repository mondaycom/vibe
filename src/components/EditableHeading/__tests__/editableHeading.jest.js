import React from "react";
import renderer from "react-test-renderer";
import EditableHeading from "../EditableHeading";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<EditableHeading />).toJSON();
  expect(tree).toMatchSnapshot();
});
