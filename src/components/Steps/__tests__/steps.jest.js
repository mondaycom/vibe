import React from "react";
import renderer from "react-test-renderer";
import Steps from "../Steps";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Steps />).toJSON();
  expect(tree).toMatchSnapshot();
});
