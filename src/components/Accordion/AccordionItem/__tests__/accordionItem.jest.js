import React from "react";
import renderer from "react-test-renderer";
import AccordionItem from "../AccordionItem";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<AccordionItem />).toJSON();
  expect(tree).toMatchSnapshot();
});
