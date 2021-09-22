import React from "react";
import renderer from "react-test-renderer";
import Clickable from "../Clickable";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Clickable />).toJSON();
  expect(tree).toMatchSnapshot();
});
