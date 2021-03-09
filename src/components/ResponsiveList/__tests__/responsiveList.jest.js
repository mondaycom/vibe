import React from "react";
import renderer from "react-test-renderer";
import ResponsiveList from "../ResponsiveList";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ResponsiveList />).toJSON();
  expect(tree).toMatchSnapshot();
});
