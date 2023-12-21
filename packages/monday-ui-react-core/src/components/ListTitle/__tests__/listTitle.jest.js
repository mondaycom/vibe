import React from "react";
import renderer from "react-test-renderer";
import ListTitle from "../ListTitle";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListTitle data-testid="list-title">Title</ListTitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
