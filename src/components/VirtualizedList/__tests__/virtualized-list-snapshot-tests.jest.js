import React from "react";
import renderer from "react-test-renderer";
import VirtualizedList from "../VirtualizedList";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<VirtualizedList />).toJSON();
  expect(tree).toMatchSnapshot();
});
