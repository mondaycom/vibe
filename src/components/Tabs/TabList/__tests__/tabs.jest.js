import React from "react";
import renderer from "react-test-renderer";
import TabList from "../TabList";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<TabList />).toJSON();
  expect(tree).toMatchSnapshot();
});
