import React from "react";
import Accordion from "../../Accordion/Accordion.jsx";
import AccordionItem from "../AccordionItem";
import { render, fireEvent, screen } from "@testing-library/react";

describe("AccordionItem tests", () => {
  let onClickMock;
  let accordionComponent;
  
  beforeEach(() => {
    onClickMock = jest.fn();
    accordionComponent = render(
      <Accordion >
        <AccordionItem onClick={onClickMock} />
      </Accordion>
    );
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.queryByRole('button'));
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
