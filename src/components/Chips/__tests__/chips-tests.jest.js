import React from "react";
import Chips from "../Chips";
import { render, fireEvent, screen } from "@testing-library/react";

describe("Chips tests", () => {
  const lable = "Chip";
  const className = "test-class";
  let onDeletedMock;
  let chipComponent;
  
  beforeEach(() => {
    onDeletedMock = jest.fn();
    chipComponent = render(
      <Chips className={className} onDelete={onDeletedMock} label={lable}  />
    );
  });

  it("should call the click callback when clicked", () => {
    fireEvent.click(screen.queryByRole('button'));
    expect(onDeletedMock.mock.calls.length).toBe(1);
  })
});
