import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Chips from "../Chips";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

describe("Chips tests", () => {
  const label = "Chip";
  const defaultTestId = getTestId(ComponentDefaultTestId.CHIP);
  const className = "test-class";

  it("Should call the onDelete callback when on close button clicked", () => {
    const testId = `${defaultTestId}-close`;
    const onDeletedMock = jest.fn();
    render(<Chips className={className} onDelete={onDeletedMock} label={label} />);
    fireEvent.click(screen.getByTestId(testId));
    expect(onDeletedMock.mock.calls.length).toBe(1);
  });
  it("Should call onClick callback when chips clicked", () => {
    const onClick = jest.fn();
    render(<Chips className={className} onClick={onClick} label={label} />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick.mock.calls.length).toBe(1);
  });
  it("Should call the onMousedown callback when mouse down", () => {
    const onMouseDown = jest.fn();
    render(<Chips className={className} onMouseDown={onMouseDown} label={label} />);
    fireEvent.mouseDown(screen.getByTestId(defaultTestId));
    expect(onMouseDown.mock.calls.length).toBe(1);
  });
  it("Should call onClick callback when chips clicked with disableClickableBehavior", () => {
    const onClick = jest.fn();
    render(<Chips className={className} onClick={onClick} label={label} disableClickableBehavior />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick.mock.calls.length).toBe(1);
  });
  it("Should call the onMousedown callback when mouse down with disableClickableBehavior", () => {
    const onMouseDown = jest.fn();
    render(<Chips className={className} onMouseDown={onMouseDown} label={label} disableClickableBehavior />);
    fireEvent.mouseDown(screen.getByTestId(defaultTestId));
    expect(onMouseDown.mock.calls.length).toBe(1);
  });
  it("Should not call onClick callback when chips clicked with disabled state", () => {
    const onClick = jest.fn();
    render(<Chips className={className} onClick={onClick} label={label} disabled />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick.mock.calls.length).toBe(0);
  });
  it("Should call the onMousedown callback when mouse down with disabled state", () => {
    const onMouseDown = jest.fn();
    render(<Chips className={className} onMouseDown={onMouseDown} label={label} disabled />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onMouseDown.mock.calls.length).toBe(0);
  });
});
