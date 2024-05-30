import React from "react";
import renderer from "react-test-renderer";
import ListItemAvatar from "../ListItemAvatar";
import { person1 } from "../../Avatar/__stories__/assets";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListItemAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with picture", () => {
  const tree = renderer.create(<ListItemAvatar src={person1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
