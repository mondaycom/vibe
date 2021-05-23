import React from "react";
import renderer from "react-test-renderer";
import Tabs from "../Tabs";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Tabs />).toJSON();
  expect(tree).toMatchSnapshot();
});
