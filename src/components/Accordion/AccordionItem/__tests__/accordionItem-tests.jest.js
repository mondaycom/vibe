import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Accordion from "../../Accordion/Accordion";
import AccordionItem from "../AccordionItem";

describe("AccordionItem tests", () => {
  let onClickMock;

  beforeEach(() => {
    onClickMock = jest.fn();
    render(
      <Accordion>
        <AccordionItem onClick={onClickMock} />
      </Accordion>
    );
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.queryByRole("button"));
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
