import React from "react";
import renderer from "react-test-renderer";
import Tab from "../Tab";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Tab />).toJSON();
  expect(tree).toMatchSnapshot();
});
