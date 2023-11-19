import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import EditableText from "../EditableText";

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
});
