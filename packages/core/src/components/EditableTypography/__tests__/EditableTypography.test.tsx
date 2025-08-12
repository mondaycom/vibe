import { vi, afterEach, describe, it, expect } from "vitest";
import React from "react";
import { fireEvent, render, cleanup, screen, within } from "@testing-library/react";
import EditableTypography from "../EditableTypography";
import Text from "../../Text/Text";

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
    fireEvent.compositionStart(input);

    fireEvent.keyDown(input, { key: "Enter" });

    expect(screen.getByRole("input")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.compositionEnd(input);
    fireEvent.keyDown(input, { key: "Enter" });

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
    fireEvent.compositionStart(input);

    fireEvent.keyDown(input, { key: "Escape" });

    expect(screen.getByRole("input")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.compositionEnd(input);
    fireEvent.keyDown(input, { key: "Escape" });

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
    fireEvent.compositionStart(textarea);

    fireEvent.keyDown(textarea, { key: "Enter" });

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();

    fireEvent.compositionEnd(textarea);
    fireEvent.keyDown(textarea, { key: "Enter" });

    expect(within(screen.getByRole("button")).getByText("新しい")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith("新しい");
  });
});
