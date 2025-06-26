import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import NumberField from "../NumberField";
import { WhatsNew } from "@vibe/icons";

describe("NumberField", () => {
  const mockOnChange = vi.fn();
  const mockOnValidityChange = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe("Integration tests", () => {
    it("should render with label and associate it correctly", () => {
      const { getByLabelText, getByText } = render(
        <NumberField label="Age" id="age" value={25} onChange={mockOnChange} />
      );
      const input = getByLabelText("Age");
      const label = getByText("Age");
      expect(input).toBeInTheDocument();
      expect(label).toBeInTheDocument();
      expect(input).toHaveAttribute("id", "age");
    });

    it("should render required field indicator", () => {
      const { getByText } = render(<NumberField label="Age" id="age" required value={null} onChange={mockOnChange} />);
      expect(getByText("Age")).toBeInTheDocument();
    });

    it("should render info text", () => {
      const { getByText } = render(
        <NumberField label="Age" id="age" infoText="Enter your age" value={null} onChange={mockOnChange} />
      );
      expect(getByText("Enter your age")).toBeInTheDocument();
    });

    it("should apply error state styling", () => {
      const { container } = render(<NumberField error value={0} onChange={mockOnChange} />);
      expect(container.firstChild).toHaveClass("error");
    });

    it("should apply success state styling", () => {
      const { container } = render(<NumberField success value={0} onChange={mockOnChange} />);
      expect(container.firstChild).toHaveClass("success");
    });

    it("should handle basic number input changes", () => {
      const { getByTestId } = render(
        <NumberField value={0} onChange={mockOnChange} data-testid="number-input" aria-label="Number input" />
      );
      const input = getByTestId("number-input");

      fireEvent.change(input, { target: { value: "123" } });
      expect(mockOnChange).toHaveBeenCalledWith(123, expect.any(Object));
    });

    it("should handle disabled state", () => {
      const { getByTestId } = render(
        <NumberField value={0} onChange={mockOnChange} disabled data-testid="number-input" aria-label="Number input" />
      );
      const input = getByTestId("number-input");
      expect(input).toBeDisabled();
    });

    it("should handle readOnly state", () => {
      const { getByTestId } = render(
        <NumberField value={0} onChange={mockOnChange} readOnly data-testid="number-input" aria-label="Number input" />
      );
      const input = getByTestId("number-input");
      expect(input).toHaveAttribute("readonly");
    });

    it("should render left icon", () => {
      const { getAllByTestId } = render(
        <NumberField value={0} leftIcon={WhatsNew} onChange={mockOnChange} aria-label="Number input" />
      );
      const icons = getAllByTestId("icon");
      expect(icons).toHaveLength(3);
    });

    it("should render placeholder text", () => {
      const { getByTestId } = render(
        <NumberField
          value={null}
          placeholder="Enter amount"
          onChange={mockOnChange}
          data-testid="number-input"
          aria-label="Number input"
        />
      );
      const input = getByTestId("number-input");
      expect(input).toHaveAttribute("placeholder", "Enter amount");
    });

    it("should apply custom className", () => {
      const { container } = render(
        <NumberField value={0} className="custom-class" onChange={mockOnChange} aria-label="Number input" />
      );
      expect(container.firstChild).toHaveClass("custom-class");
    });
  });

  describe("Native input props passthrough", () => {
    it("should pass through native input props", () => {
      const { getByTestId } = render(
        <NumberField
          value={0}
          onChange={mockOnChange}
          data-testid="number-input"
          aria-label="Number input"
          autoComplete="off"
          autoFocus
          name="amount"
        />
      );
      const input = getByTestId("number-input");

      expect(input).toHaveAttribute("autocomplete", "off");
      expect(input).toHaveAttribute("name", "amount");
      expect(input).toHaveFocus();
    });

    it("should pass size prop to BaseInput component", () => {
      // Test that size prop is properly passed through to BaseInput
      const { getByTestId } = render(
        <NumberField
          value={0}
          size="small"
          onChange={mockOnChange}
          data-testid="number-input"
          aria-label="Number input"
        />
      );

      // We can't directly test BaseInput props, but we can test that different sizes
      // don't break the component and the input still functions correctly
      const input = getByTestId("number-input");
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "text");
    });
  });

  describe("Edge cases", () => {
    it("should handle very large numbers", () => {
      const largeNumber = 999999999999;
      const { getByTestId } = render(
        <NumberField value={largeNumber} onChange={mockOnChange} data-testid="number-input" aria-label="Number input" />
      );
      const input = getByTestId("number-input") as HTMLInputElement;
      expect(input.value).toBe(largeNumber.toString());
    });

    it("should handle switching between null and numeric values", () => {
      const { rerender, getByTestId } = render(
        <NumberField value={null} onChange={mockOnChange} data-testid="number-input" aria-label="Number input" />
      );
      let input = getByTestId("number-input") as HTMLInputElement;
      expect(input.value).toBe("");

      rerender(<NumberField value={42} onChange={mockOnChange} data-testid="number-input" aria-label="Number input" />);
      input = getByTestId("number-input") as HTMLInputElement;
      expect(input.value).toBe("42");

      rerender(
        <NumberField value={null} onChange={mockOnChange} data-testid="number-input" aria-label="Number input" />
      );
      input = getByTestId("number-input") as HTMLInputElement;
      expect(input.value).toBe("");
    });

    it("should integrate spin button clicks with state management", () => {
      const { getByLabelText } = render(
        <NumberField value={5} onChange={mockOnChange} step={2} aria-label="Number input" />
      );
      const incrementButton = getByLabelText("Increase");
      const decrementButton = getByLabelText("Decrease");

      fireEvent.click(incrementButton);
      expect(mockOnChange).toHaveBeenCalledWith(7, expect.any(Object));

      fireEvent.click(decrementButton);
      expect(mockOnChange).toHaveBeenCalledWith(3, expect.any(Object));
    });
  });

  describe("Validation with allowOutOfBounds", () => {
    it("should call onValidityChange when value goes out of bounds", () => {
      const { rerender } = render(
        <NumberField
          value={5}
          min={0}
          max={10}
          allowOutOfBounds
          onValidityChange={mockOnValidityChange}
          onChange={mockOnChange}
          aria-label="Number input"
        />
      );
      expect(mockOnValidityChange).toHaveBeenCalledWith(true);

      rerender(
        <NumberField
          value={15}
          min={0}
          max={10}
          allowOutOfBounds
          onValidityChange={mockOnValidityChange}
          onChange={mockOnChange}
          aria-label="Number input"
        />
      );
      expect(mockOnValidityChange).toHaveBeenCalledWith(false);
    });

    it("should allow out of bounds values when allowOutOfBounds is true", () => {
      const { getByTestId } = render(
        <NumberField
          value={10}
          max={10}
          allowOutOfBounds
          onChange={mockOnChange}
          data-testid="number-input"
          aria-label="Number input"
        />
      );
      const input = getByTestId("number-input");

      fireEvent.change(input, { target: { value: "15" } });
      expect(mockOnChange).toHaveBeenCalledWith(15, expect.any(Object));
    });
  });

  describe("Accessibility", () => {
    it("should have proper ARIA attributes", () => {
      const { getByTestId } = render(
        <NumberField
          value={5}
          min={0}
          max={10}
          required
          aria-label="Age input"
          onChange={mockOnChange}
          data-testid="number-input"
        />
      );
      const input = getByTestId("number-input");

      expect(input).toHaveAttribute("aria-valuenow", "5");
      expect(input).toHaveAttribute("aria-valuemin", "0");
      expect(input).toHaveAttribute("aria-valuemax", "10");
      expect(input).toHaveAttribute("aria-required", "true");
      expect(input).toHaveAttribute("aria-label", "Age input");
    });

    it("should use label for aria-label when provided", () => {
      const { getByTestId } = render(
        <NumberField label="User Age" id="user-age" value={5} onChange={mockOnChange} data-testid="number-input" />
      );
      const input = getByTestId("number-input");
      expect(input).toHaveAttribute("aria-label", "User Age");
    });

    it("should have correct input attributes", () => {
      const { getByTestId } = render(
        <NumberField value={5} onChange={mockOnChange} data-testid="number-input" aria-label="Number input" />
      );
      const input = getByTestId("number-input");

      expect(input).toHaveAttribute("type", "text");
      expect(input).toHaveAttribute("inputmode", "numeric");
      expect(input).toHaveAttribute("role", "spinbutton");
    });
  });
});
