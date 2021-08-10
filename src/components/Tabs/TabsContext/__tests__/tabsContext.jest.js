import React from "react";
import renderer from "react-test-renderer";
import TabsContext from "../TabsContext";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<TabsContext />).toJSON();
  expect(tree).toMatchSnapshot();
});
