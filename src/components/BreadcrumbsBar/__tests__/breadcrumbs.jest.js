import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbsBar from "../BreadcrumbsBar";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<BreadcrumbsBar />).toJSON();
  expect(tree).toMatchSnapshot();
});
