import React from "react";
import renderer from "react-test-renderer";
import Accordion from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Accordion />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with index prop", () => {
  const tree = renderer
    .create(
      <Accordion index={[0, 2]}>
        <AccordionItem />
        <AccordionItem />
        <AccordionItem />
      </Accordion>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
