import React from "react";
import renderer from "react-test-renderer";
import EditableHeading from "../EditableHeading";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<EditableHeading type={EditableHeading.types.h1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
