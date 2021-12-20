import React from "react";
import renderer from "react-test-renderer";
import Accordion from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";

describe("Accordion renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Accordion />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with children", () => {
    const tree = renderer
      .create(
        <Accordion>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with defaultIndex prop", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0]}>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Accordion className="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Accordion id="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with allowMultiple", () => {
    const tree = renderer
      .create(
        <Accordion allowMultiple defaultIndex={[0, 2]}>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
