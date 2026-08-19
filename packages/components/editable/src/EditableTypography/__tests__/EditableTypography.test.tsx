import { vi, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { fireEvent, render, cleanup, screen, within } from "@testing-library/react";
import EditableTypography from "../EditableTypography";
import { Text } from "@vibe/typography";

describe("EditableTypography - IME composition with onKeyDown", () => {
  afterEach(() => {
    cleanup();
  });

  it("should ignore Enter keydown while composing (single-line) and commit after composition ends", () => {
    const onChange = vi.fn();
    render(
      <EditableTypography value="Editable text" onChange={onChange} component={Text} typographyClassName="typography" />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const input = screen.getByRole("input");
    fireEvent.change(input, { target: { value: "新しい" } });

    fireEvent.keyDown(input, { key: "Enter", isComposing: true });

    expect(screen.getByRole("input")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "Enter", isComposing: false });

    expect(within(screen.getByRole("button")).getByText("新しい")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("新しい");
  });

  it("should ignore Escape keydown while composing (single-line) and cancel after composition ends", () => {
    const onChange = vi.fn();
    render(
      <EditableTypography value="Editable text" onChange={onChange} component={Text} typographyClassName="typography" />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const input = screen.getByRole("input");
    fireEvent.change(input, { target: { value: "中" } });

    fireEvent.keyDown(input, { key: "Escape", isComposing: true });

    expect(screen.getByRole("input")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyDown(input, { key: "Escape", isComposing: false });

    expect(within(screen.getByRole("button")).getByText("Editable text")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it("should ignore Enter keydown while composing (multiline) and commit after composition ends", () => {
    const onChange = vi.fn();
    render(
      <EditableTypography
        value="Editable text"
        onChange={onChange}
        component={Text}
        typographyClassName="typography"
        multiline
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "新しい" } });

    fireEvent.keyDown(textarea, { key: "Enter", isComposing: true });

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyDown(textarea, { key: "Enter", isComposing: false });

    expect(within(screen.getByRole("button")).getByText("新しい")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("新しい");
  });

  it("should ignore Escape keydown while composing (multiline) and cancel after composition ends", () => {
    const onChange = vi.fn();
    render(
      <EditableTypography
        value="Editable text"
        onChange={onChange}
        component={Text}
        typographyClassName="typography"
        multiline
      />
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "中" } });

    fireEvent.keyDown(textarea, { key: "Escape", isComposing: true });

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.keyDown(textarea, { key: "Escape", isComposing: false });

    expect(within(screen.getByRole("button")).getByText("Editable text")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });
});
