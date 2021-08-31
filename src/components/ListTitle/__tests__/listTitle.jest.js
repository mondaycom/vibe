import React from "react";
import renderer from "react-test-renderer";
import ListTitle from "../ListTitle";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListTitle>Title</ListTitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
