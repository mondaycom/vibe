import React from "react";
import renderer from "react-test-renderer";
import TabPanel from "../TabPanel";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<TabPanel />).toJSON();
  expect(tree).toMatchSnapshot();
});
