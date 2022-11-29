import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Chips from "../Chips";
import { ComponentDefaultTestId } from "../../../interactions-tests";

describe("Chips tests", () => {
  const label = "Chip";

  const className = "test-class";
  let onDeletedMock: jest.Mock;

  beforeEach(() => {
    onDeletedMock = jest.fn();
    render(<Chips className={className} onDelete={onDeletedMock} label={label} />);
  });

  it("should call the click callback when clicked", () => {
    const testId = `${ComponentDefaultTestId.CHIP}-close`;
    fireEvent.click(screen.getByTestId(testId));
    expect(onDeletedMock.mock.calls.length).toBe(1);
  });
});
