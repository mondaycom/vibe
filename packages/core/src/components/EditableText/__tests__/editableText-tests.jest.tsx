import React from "react";
import { fireEvent, render, cleanup, screen, waitFor } from "@testing-library/react";
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

  describe("rendered value", () => {
    it("should render original value when value of an editable component is cleared", async () => {
      const value = "Editable test";
      render(<EditableText value={value} />);

      const component = screen.getByRole("button");
      fireEvent.click(component);

      const input = screen.getByRole("input");
      fireEvent.change(input, {
        target: { value: "" }
      });

      expect(input).toHaveValue("");

      await waitFor(() => {
        fireEvent.keyDown(input, { key: "Enter" });
      });

      expect(within(screen.getByRole("button")).getByText(value)).toBeInTheDocument();
    });
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

    describe("onChange", () => {
      const onChange = jest.fn();
      it("should call onChange with new value when changed in an editable component", async () => {
        const value = "Editable test";
        const newValue = "New Editable test";
        render(<EditableText value={value} onChange={onChange} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        const input = screen.getByRole("input");
        fireEvent.change(input, {
          target: { value: newValue }
        });

        expect(input).toHaveValue(newValue);

        await waitFor(() => {
          fireEvent.keyDown(input, { key: "Enter" });
        });
        expect(within(await screen.findByRole("button")).getByText(newValue)).toBeInTheDocument();
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(newValue);
      });

      it("should not call onChange when value isn't changed in an editable component", async () => {
        const value = "Editable test";
        render(<EditableText value={value} onChange={onChange} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        const input = screen.getByRole("input");

        expect(input).toHaveValue(value);

        await waitFor(() => {
          fireEvent.keyDown(input, { key: "Enter" });
        });

        expect(within(screen.getByRole("button")).getByText(value)).toBeInTheDocument();

        expect(onChange).not.toBeCalled();
      });

      it("should not call onChange when value of an editable component is cleared", async () => {
        const value = "Editable test";
        render(<EditableText value={value} onChange={onChange} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        const input = screen.getByRole("input");
        fireEvent.change(input, {
          target: { value: "" }
        });

        expect(input).toHaveValue("");

        await waitFor(() => {
          fireEvent.keyDown(input, { key: "Enter" });
        });

        expect(within(screen.getByRole("button")).getByText(value)).toBeInTheDocument();
        expect(onChange).not.toBeCalled();
      });
    });

    describe("onEditModeChange", () => {
      const onEditModeChange = jest.fn();
      it("should call onEditModeChange with true when enter edit mode", async () => {
        const value = "Editable test";
        render(<EditableText value={value} onEditModeChange={onEditModeChange} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        expect(onEditModeChange).toHaveBeenCalledTimes(1);
        expect(onEditModeChange).toHaveBeenCalledWith(true);
      });

      it("should call onEditModeChange with false when exit edit mode", async () => {
        const value = "Editable test";
        render(<EditableText value={value} onEditModeChange={onEditModeChange} />);

        const component = screen.getByRole("button");
        fireEvent.click(component);

        const input = screen.getByRole("input");
        await waitFor(() => {
          fireEvent.keyDown(input, { key: "Enter" });
        });

        expect(onEditModeChange).toHaveBeenCalledTimes(2);
        expect(onEditModeChange).toHaveBeenLastCalledWith(false);
      });
    });
  });

  describe("with placeholder", () => {
    it("should show a placeholder if provided and input is empty", async () => {
      const onChange = jest.fn();
      const placeholderText = "Placeholder text";
      const value = "Editable test";
      render(<EditableText value={value} placeholder={placeholderText} onChange={onChange} />);

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

      expect(within(await screen.findByRole("button")).getByText(placeholderText)).toBeInTheDocument();
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith("");
    });

    it("should not show a placeholder if provided and input is not empty", async () => {
      const placeholderText = "Placeholder text";
      const value = "Editable test";
      const newValue = "New Editable test";
      render(<EditableText value={value} placeholder={placeholderText} />);

      const component = screen.getByRole("button");
      fireEvent.click(component);

      const input = screen.getByRole("input");
      fireEvent.change(input, {
        target: { value: newValue }
      });

      expect(input).toHaveValue(newValue);
      expect(screen.getByPlaceholderText(placeholderText)).toBeInTheDocument();

      await waitFor(() => {
        fireEvent.keyDown(input, { key: "Enter" });
      });
      expect(within(await screen.findByRole("button")).getByText(newValue)).toBeInTheDocument();
    });
  });
});
