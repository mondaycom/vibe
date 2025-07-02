import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest";
import NumberFieldSpinButton from "../NumberFieldSpinButton";

describe("NumberFieldSpinButton", () => {
  const mockOnIncrement = vi.fn();
  const mockOnDecrement = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should call onIncrement when the up button is clicked", () => {
    const { getByLabelText } = render(
      <NumberFieldSpinButton onIncrement={mockOnIncrement} onDecrement={mockOnDecrement} size="medium" />
    );
    const incrementButton = getByLabelText("Increase");
    fireEvent.click(incrementButton);
    expect(mockOnIncrement).toHaveBeenCalledTimes(1);
    expect(mockOnDecrement).not.toHaveBeenCalled();
  });

  it("should call onDecrement when the down button is clicked", () => {
    const { getByLabelText } = render(
      <NumberFieldSpinButton onIncrement={mockOnIncrement} onDecrement={mockOnDecrement} size="medium" />
    );
    const decrementButton = getByLabelText("Decrease");
    fireEvent.click(decrementButton);
    expect(mockOnDecrement).toHaveBeenCalledTimes(1);
    expect(mockOnIncrement).not.toHaveBeenCalled();
  });

  it("should disable both buttons when disabled prop is true", () => {
    const { getByLabelText } = render(
      <NumberFieldSpinButton onIncrement={mockOnIncrement} onDecrement={mockOnDecrement} disabled size="medium" />
    );
    const incrementButton = getByLabelText("Increase");
    const decrementButton = getByLabelText("Decrease");
    expect(incrementButton).toHaveAttribute("aria-disabled", "true");
    expect(decrementButton).toHaveAttribute("aria-disabled", "true");
  });

  it("should disable the up button when isAtMax is true", () => {
    const { getByLabelText } = render(
      <NumberFieldSpinButton onIncrement={mockOnIncrement} onDecrement={mockOnDecrement} isAtMax size="medium" />
    );
    const incrementButton = getByLabelText("Increase");
    const decrementButton = getByLabelText("Decrease");
    expect(incrementButton).toHaveAttribute("aria-disabled", "true");
    expect(decrementButton).toHaveAttribute("aria-disabled", "false");
  });

  it("should disable the down button when isAtMin is true", () => {
    const { getByLabelText } = render(
      <NumberFieldSpinButton onIncrement={mockOnIncrement} onDecrement={mockOnDecrement} isAtMin size="medium" />
    );
    const incrementButton = getByLabelText("Increase");
    const decrementButton = getByLabelText("Decrease");
    expect(incrementButton).toHaveAttribute("aria-disabled", "false");
    expect(decrementButton).toHaveAttribute("aria-disabled", "true");
  });
});
