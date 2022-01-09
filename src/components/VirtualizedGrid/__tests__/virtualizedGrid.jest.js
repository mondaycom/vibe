import React from "react";
import renderer from "react-test-renderer";
import VirtualizedGrid from "../VirtualizedGrid";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<VirtualizedGrid />).toJSON();
  expect(tree).toMatchSnapshot();
});
