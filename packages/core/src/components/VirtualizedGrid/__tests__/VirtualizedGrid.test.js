import React from "react";
import renderer from "react-test-renderer";
import VirtualizedGrid from "../VirtualizedGrid";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<VirtualizedGrid />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly with class name", () => {
  const tree = renderer.create(<VirtualizedGrid className="class-name" />).toJSON();
  expect(tree).toMatchSnapshot();
});
it("renders correctly with scrollable class name", () => {
  const tree = renderer.create(<VirtualizedGrid scrollableClassName="class-name" />).toJSON();
  expect(tree).toMatchSnapshot();
});
