import React from "react";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";
import EditableHeading from "../EditableHeading";
import "@testing-library/jest-dom";

describe("EditableHeading", () => {
  afterEach(() => {
    cleanup();
  });

  it("renders correctly with empty props", () => {
    const tree = renderer.create(<EditableHeading type={EditableHeading.types.h1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not render an button when editing = false", () => {
    const { queryByRole } = render(<EditableHeading type={EditableHeading.types.h1} editing={false} />);

    const button = queryByRole('button');

    expect(button).toBeNull();
  });

  it("should render a button when editing = true", () => {
    const { getByRole } = render(<EditableHeading type={EditableHeading.types.h1} editing={true} />);

    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });

  it("should render a button when editing prop changes from false to true", () => {
    const { getByRole, rerender } = render(<EditableHeading type={EditableHeading.types.h1} />);

    rerender(<EditableHeading type={EditableHeading.types.h1} editing={true} />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
