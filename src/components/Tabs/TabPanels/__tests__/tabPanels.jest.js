import React from "react";
import renderer from "react-test-renderer";
import TabPanels from "../TabPanels";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<TabPanels />).toJSON();
  expect(tree).toMatchSnapshot();
});
