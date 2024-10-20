import React from "react";
import renderer from "react-test-renderer";
import ListItemIcon from "../ListItemIcon";
import { Sun } from "@vibe/icons";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListItemIcon />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with icon", () => {
  const tree = renderer.create(<ListItemIcon icon={Sun} />).toJSON();
  expect(tree).toMatchSnapshot();
});
