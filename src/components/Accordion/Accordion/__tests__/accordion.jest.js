import React from "react";
import renderer from "react-test-renderer";
import Accordion from "../Accordion";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Accordion />).toJSON();
  expect(tree).toMatchSnapshot();
});
