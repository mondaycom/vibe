import React from "react";
import renderer from "react-test-renderer";
import MenuTitle from "../MenuTitle";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<MenuTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with custom class name", () => {
  const tree = renderer.create(<MenuTitle classname="dummy-class-name" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with caption", () => {
  const tree = renderer.create(<MenuTitle caption="my title" />).toJSON();
  expect(tree).toMatchSnapshot();
});
