import React from "react";
import { fireEvent, render, cleanup, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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

  it("should not render an input when 'editable' is false when clicked", () => {
    render(<EditableHeading value="Editable heading" editable={false} />);

    const component = screen.getByRole("button");
    fireEvent.click(component);

    const input = screen.queryByRole("input");
    expect(input).not.toBeInTheDocument();
  });
});
