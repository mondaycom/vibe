import React from "react";
import renderer from "react-test-renderer";
import Accordion from "../Accordion";
import AccordionItem from "../../AccordionItem/AccordionItem";

describe("Accordion snapshot tests", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Accordion />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with accordion items", () => {
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

  it("renders correctly with defaultIndex prop", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0, 2]}>
          <AccordionItem />
          <AccordionItem />
          <AccordionItem />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
