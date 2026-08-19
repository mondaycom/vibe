import { vi, describe, it, expect } from "vitest";
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
    const onDeletedMock = vi.fn();
    render(<Chips className={className} onDelete={onDeletedMock} label={label} />);
    fireEvent.click(screen.getByTestId(testId));
    expect(onDeletedMock.mock.calls.length).toBe(1);
  });
  it("Should call onClick callback when chips clicked", () => {
    const onClick = vi.fn();
    render(<Chips className={className} onClick={onClick} label={label} />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick.mock.calls.length).toBe(1);
  });
  it("Should call the onMousedown callback when mouse down", () => {
    const onMouseDown = vi.fn();
    render(<Chips className={className} onMouseDown={onMouseDown} label={label} />);
    fireEvent.mouseDown(screen.getByTestId(defaultTestId));
    expect(onMouseDown.mock.calls.length).toBe(1);
  });
  it("Should call onClick callback when chips clicked with disableClickableBehavior", () => {
    const onClick = vi.fn();
    render(<Chips className={className} onClick={onClick} label={label} disableClickableBehavior />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick.mock.calls.length).toBe(1);
  });
  it("Should call the onMousedown callback when mouse down with disableClickableBehavior", () => {
    const onMouseDown = vi.fn();
    render(<Chips className={className} onMouseDown={onMouseDown} label={label} disableClickableBehavior />);
    fireEvent.mouseDown(screen.getByTestId(defaultTestId));
    expect(onMouseDown.mock.calls.length).toBe(1);
  });
  it("Should not call onClick callback when chips clicked with disabled state", () => {
    const onClick = vi.fn();
    render(<Chips className={className} onClick={onClick} label={label} disabled />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick.mock.calls.length).toBe(0);
  });
  it("Should call the onMousedown callback when mouse down with disabled state", () => {
    const onMouseDown = vi.fn();
    render(<Chips className={className} onMouseDown={onMouseDown} label={label} disabled />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onMouseDown.mock.calls.length).toBe(0);
  });
  it("Should not call onClick when variant is readOnly", () => {
    const onClick = vi.fn();
    render(<Chips className={className} onClick={onClick} label={label} variant="readOnly" />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick).not.toHaveBeenCalled();
  });
  it("Should not render close button when variant is readOnly", () => {
    render(<Chips className={className} onDelete={vi.fn()} label={label} variant="readOnly" />);
    expect(screen.queryByTestId(`${defaultTestId}-close`)).toBeNull();
  });
  it("Should not render close button when variant is filterable", () => {
    render(<Chips className={className} onDelete={vi.fn()} label={label} variant="filterable" />);
    expect(screen.queryByTestId(`${defaultTestId}-close`)).toBeNull();
  });
  it("Should call onClick when filterable chip is clicked", () => {
    const onClick = vi.fn();
    render(<Chips className={className} onClick={onClick} label={label} variant="filterable" />);
    fireEvent.click(screen.getByTestId(defaultTestId));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("Should set aria-pressed when filterable chip is pressed", () => {
    render(<Chips className={className} label={label} variant="filterable" pressed />);
    expect(screen.getByTestId(defaultTestId)).toHaveAttribute("aria-pressed", "true");
  });

  describe("fill", () => {
    it("Should style a semantic color by class, with no inline fill to override", () => {
      render(<Chips label={label} color="negative" />);
      const chip = screen.getByTestId(defaultTestId);
      expect(chip).toHaveClass("colorNegative");
      expect(chip.style.backgroundColor).toBe("");
      expect(chip.style.getPropertyValue("--chips-surface")).toBe("");
    });

    it("Should pass a content color's palette in as custom properties", () => {
      render(<Chips label={label} color="lipstick" />);
      const chip = screen.getByTestId(defaultTestId);
      expect(chip.className).not.toMatch(/color[A-Z]/);
      expect(chip.style.getPropertyValue("--chips-surface")).toBe("var(--color-lipstick-selected)");
      // Content colors have no `--color-*-selected-hover` token, so no hover fill is set and
      // the CSS falls back to the resting one.
      expect(chip.style.getPropertyValue("--chips-surface-hover")).toBe("");
      expect(chip.style.backgroundColor).toBe("");
    });

    it("Should leave the fill to CSS when disabled", () => {
      render(<Chips label={label} color="negative" disabled />);
      const chip = screen.getByTestId(defaultTestId);
      expect(chip).toHaveClass("disabled");
      expect(chip.style.getPropertyValue("--chips-surface")).toBe("");
    });
  });
});
