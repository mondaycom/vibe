import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonGroup from "../ButtonGroup";

describe("ButtonGroup tests", () => {
  const option = [
    { value: 1, text: "Alpha" },
    { value: 2, text: "Beta" },
    { value: 3, text: "Gamma" },
    { value: 4, text: "Delta" }
  ];
  let onSelectMock;
  let label;

  beforeEach(() => {
    onSelectMock = jest.fn();
    label = "label";
    render(<ButtonGroup options={option} onSelect={onSelectMock} groupAriaLabel={label} />);
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.getByText("Delta"));
    expect(onSelectMock.mock.calls.length).toBe(1);
  });

  describe("a11y", () => {
    it("should add the label", () => {
      expect(screen.getByLabelText(label)).toBeTruthy();
    });
  });
});
