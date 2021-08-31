import React from "react";
import renderer from "react-test-renderer";
import IconButton from "../IconButton";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<IconButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
