import React from "react";
import renderer from "react-test-renderer";
import Divider from "../Divider";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Divider />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with custom class name", () => {
  const tree = renderer.create(<Divider classname="dummy-class-name" />).toJSON();
  expect(tree).toMatchSnapshot();
});
