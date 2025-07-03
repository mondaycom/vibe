import { vi, beforeEach, describe, it, expect, Mock } from "vitest";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "../../Accordion/Accordion";
import AccordionItem from "../AccordionItem";

describe("AccordionItem tests", () => {
  let onClickMock: Mock;

  beforeEach(() => {
    onClickMock = vi.fn();
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
