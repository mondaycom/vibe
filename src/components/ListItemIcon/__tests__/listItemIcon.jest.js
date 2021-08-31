import React from "react";
import renderer from "react-test-renderer";
import ListItemIcon from "../ListItemIcon";
import { Sun } from "../../Icon/Icons";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<ListItemIcon icon={Sun} />).toJSON();
  expect(tree).toMatchSnapshot();
});
