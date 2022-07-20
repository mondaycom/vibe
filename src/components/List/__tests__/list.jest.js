import React from "react";
import renderer from "react-test-renderer";
import List from "../List";

it("renders correctly without props", () => {
  const tree = renderer.create(<List />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with empty props", () => {
  const tree = renderer.create(<List>Something</List>).toJSON();
  expect(tree).toMatchSnapshot();
});
