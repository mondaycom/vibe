import React from "react";
import renderer from "react-test-renderer";
import List from "../List";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<List>Something</List>).toJSON();
  expect(tree).toMatchSnapshot();
});
