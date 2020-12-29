import React from "react";
import renderer from "react-test-renderer";
import Loader from "../Loader";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Loader />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with custom class name", () => {
  const tree = renderer.create(<Loader svgClassName="dummy-class-name" />).toJSON();
  expect(tree).toMatchSnapshot();
});
