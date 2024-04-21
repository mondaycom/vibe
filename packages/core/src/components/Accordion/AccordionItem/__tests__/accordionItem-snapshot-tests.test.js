import React from "react";
import renderer from "react-test-renderer";
import Accordion from "../../Accordion/Accordion";
import AccordionItem from "../AccordionItem";

describe("AccordionItem renders correctly", () => {
  it("with className", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0]}>
          <AccordionItem className="test" />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0]}>
          <AccordionItem id="test" />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with title", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0]}>
          <AccordionItem title="Test title" />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with children", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0]}>
          <AccordionItem>Test Children</AccordionItem>
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with iconSize", () => {
    const tree = renderer
      .create(
        <Accordion defaultIndex={[0]}>
          <AccordionItem iconSize={36} />
        </Accordion>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
