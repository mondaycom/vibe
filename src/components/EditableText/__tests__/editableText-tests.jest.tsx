import React from "react";
import { fireEvent, render, cleanup, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditableText from "../EditableText";
import { within } from "@storybook/testing-library";

describe("EditableText", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render an input in edit mode", () => {
    render(<EditableText value="Editable text" />);

    const component = screen.getByRole("button");
    fireEvent.click(component);

    const input = screen.queryByRole("input");
    expect(input).toBeInTheDocument();
  });

  it("should not render an input when 'readOnly' is false when clicked", () => {
    render(<EditableText value="Editable test" readOnly />);

    const component = screen.getByRole("button");
    fireEvent.click(component);

    const input = screen.queryByRole("input");
    expect(input).not.toBeInTheDocument();
  });

  describe("event handling", () => {
    describe("onClick", () => {
      const onClick = jest.fn();
      it("should call onClick when clicking on an editable component", () => {
        render(<EditableText value="Editable test" onClick={onClick} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
      });

      it("should call onClick when clicking on 'readOnly' component", () => {
        render(<EditableText value="Editable test" readOnly onClick={onClick} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe("onBlur", () => {
      const onBlur = jest.fn();
      it("should call onBlur when blurring an editable component", () => {
        render(<EditableText value="Editable test with blur" onBlur={onBlur} />);

        const component = screen.getByRole("button");
        fireEvent.click(component); // enter editing state

        const input = screen.getByRole("input");
        fireEvent.blur(input); // focus out

        expect(onBlur).toHaveBeenCalledTimes(1);
      });

      it("should not call onBlur when blurring (removing focus) from a 'readOnly' component", () => {
        render(<EditableText value="Editable test with blur" onBlur={onBlur} readOnly />);

        const component = screen.getByRole("button");
        fireEvent.click(component); // enter editing state
        fireEvent.blur(component); // focus out

        expect(onBlur).toHaveBeenCalledTimes(0);
      });
    });
  });

  describe("with placeholder", () => {
    it("should show a placeholder if provided and input is empty", async () => {
      const placeholderText = "Placeholder text";
      const value = "Editable test";
      render(<EditableText value={value} placeholder={placeholderText} />);

      const component = screen.getByRole("button");
      fireEvent.click(component);

      const input = screen.getByRole("input");
      fireEvent.change(input, {
        target: { value: "" }
      });

      expect(input).toHaveValue("");
      expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();

      await waitFor(() => {
        fireEvent.keyDown(input, { key: "Enter" });
      });

      expect(within(screen.getByRole("button")).getByText(placeholderText)).toBeInTheDocument();
    });
  });
});
