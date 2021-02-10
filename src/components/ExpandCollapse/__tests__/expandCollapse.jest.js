import React from "react";
import renderer from "react-test-renderer";
import ExpandCollapse from "../ExpandCollapse";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ExpandCollapse />).toJSON();
  expect(tree).toMatchSnapshot();
});
