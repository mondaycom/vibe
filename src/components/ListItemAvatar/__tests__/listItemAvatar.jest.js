import React from "react";
import renderer from "react-test-renderer";
import ListItemAvatar from "../ListItemAvatar";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListItemAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
