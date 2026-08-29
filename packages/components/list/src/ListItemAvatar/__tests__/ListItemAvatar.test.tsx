import { it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import ListItemAvatar from "../ListItemAvatar";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListItemAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with picture", () => {
  const tree = renderer.create(<ListItemAvatar src={"image-url.jpg"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
