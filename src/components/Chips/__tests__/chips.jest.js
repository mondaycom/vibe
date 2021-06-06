import React from "react";
import renderer from "react-test-renderer";
import Chips from "../Chips";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Chips />).toJSON();
  expect(tree).toMatchSnapshot();
});
