import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import EditableHeading from "../EditableHeading";

describe("EditableHeading", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render an input in edit mode", () => {
    render(<EditableHeading value="Editable heading" />);

    const component = screen.getByRole("button");
    fireEvent.click(component);

    const input = screen.queryByRole("input");
    expect(input).toBeInTheDocument();
  });

  it("should not render an input when 'readOnly' is false when clicked", () => {
    render(<EditableHeading value="Editable heading" readOnly />);

    const component = screen.getByRole("button");
    fireEvent.click(component);

    const input = screen.queryByRole("input");
    expect(input).not.toBeInTheDocument();
  });
});
