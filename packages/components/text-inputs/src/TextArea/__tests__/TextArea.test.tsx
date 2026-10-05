import { vi, describe, it, expect } from "vitest";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TextArea from "../TextArea";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";

describe("TextArea", () => {
  it("should render TextArea with default props", () => {
    render(<TextArea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should render TextArea with a label if provided", () => {
    const labelText = "Example Label";
    render(<TextArea label={labelText} id="test-textarea" />);
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
  });

  it("should display help text when provided", () => {
    const helpText = "This is some helpful information.";
    render(<TextArea helpText={helpText} id="help-text-textarea" />);
    expect(screen.getByText(helpText)).toBeInTheDocument();
  });

  it("should render TextArea with different sizes and adjust rows accordingly", () => {
    const { rerender } = render(<TextArea size="small" id="small-textarea" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "3");
    rerender(<TextArea size="large" id="large-textarea" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "4");
  });

  it("should render TextArea with a custom rows count", () => {
    render(<TextArea size="small" id="small-textarea" rows={10} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("rows", "10");
  });

  it("should render TextArea as disabled", () => {
    render(<TextArea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should render TextArea as readOnly", () => {
    render(<TextArea readOnly />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readOnly");
  });

  it("should show an error state", () => {
    render(<TextArea error id="error-textarea" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("should add required attribute when provided", () => {
    render(<TextArea required label="Required" id="required-textarea" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("required");
  });

  it("should handle value updates correctly", () => {
    const handleChange = vi.fn();
    const { rerender } = render(<TextArea value="initial" onChange={handleChange} />);
    expect(screen.getByRole("textbox")).toHaveValue("initial");

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "updated" } });
    expect(handleChange).toHaveBeenCalledTimes(1);

    rerender(<TextArea value="updated" onChange={handleChange} />);
    expect(screen.getByRole("textbox")).toHaveValue("updated");
  });

  it("should call onChange when typing in the TextArea", () => {
    const handleChange = vi.fn();
    render(<TextArea onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "new text" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  describe("TextArea accessibility", () => {
    it("TextArea should be accessible", async () => {
      const { container } = render(<TextArea label="Accessible TextArea" id="text-area" />);
      const results = await axe(container);

      expect(results).toHaveNoViolations();
    });

    it("should set aria-label attribute correctly", () => {
      const ariaLabel = "Test Aria Label";
      render(<TextArea aria-label={ariaLabel} id="aria-textarea" />);

      const textarea = screen.getByRole("textbox");
      expect(textarea).toHaveAttribute("aria-label", ariaLabel);
    });

    it("should set aria-describedby attribute to reference help text ID when help text is provided", () => {
      const helpText = "This is some helpful information.";
      render(<TextArea helpText={helpText} id="help-text-textarea" />);
      const textarea = screen.getByRole("textbox");

      expect(textarea).toHaveAttribute("aria-describedby", "help-text-textarea-help-text");
    });
  });

  describe("TextArea character count and limit", () => {
    it("should not show limit when character limit is not provided", () => {
      render(<TextArea />);
      expect(screen.queryByText("0/")).not.toBeInTheDocument();
    });

    it("only shows character count with showCharCount and no MaxLength", () => {
      render(<TextArea showCharCount />);
      expect(screen.queryByText("0")).toBeInTheDocument();
    });

    it("should not show character count when only maxLength is provided", () => {
      render(<TextArea maxLength={5} />);
      expect(screen.queryByText("0/5")).not.toBeInTheDocument();
    });

    it("should prevent typing when character limit is reached", () => {
      const handleChange = vi.fn();
      render(<TextArea showCharCount maxLength={5} allowExceedingMaxLength={false} onChange={handleChange} />);

      const charCount = screen.getByText("0/5");
      expect(charCount).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      userEvent.type(input, "12345a");

      expect(input).toHaveValue("12345");
      expect(charCount).toHaveTextContent("5/5");
      expect(handleChange).toHaveBeenCalledTimes(5);
    });

    it("should allow typing when limit is allowed to be exceeded", () => {
      render(<TextArea showCharCount maxLength={10} allowExceedingMaxLength={true} />);

      const charCount = screen.getByText("0/10");
      expect(charCount).toBeInTheDocument();

      const input = screen.getByRole("textbox");
      userEvent.type(input, "12345678910");

      expect(input).toHaveValue("12345678910");
      expect(charCount).toHaveTextContent("11/10");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("should allow text removal when character limit is exceeded", () => {
      render(<TextArea showCharCount maxLength={5} allowExceedingMaxLength={false} />);

      const input = screen.getByRole("textbox");
      userEvent.type(input, "12345");

      // Attempt to add more characters (should be prevented)
      userEvent.type(input, "a");
      expect(input).toHaveValue("12345");

      // Remove a character (should be allowed)
      userEvent.type(input, "{backspace}");
      userEvent.type(input, "4");

      expect(input).toHaveValue("12344");
    });
  });
});
