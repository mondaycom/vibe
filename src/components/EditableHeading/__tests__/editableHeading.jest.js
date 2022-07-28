import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
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

    const button = queryByRole("button");

    expect(button).toBeNull();
  });

  it("should render a button when editing = true", () => {
    const { getByRole } = render(<EditableHeading type={EditableHeading.types.h1} editing={true} />);

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render a button when editing prop changes from false to true", () => {
    const { getByRole, rerender } = render(<EditableHeading type={EditableHeading.types.h1} />);

    rerender(<EditableHeading type={EditableHeading.types.h1} editing={true} />);
    const button = getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders correctly with dataTestId prop", () => {
    const { getByTestId } = render(<EditableHeading dataTestId="data-test-id" />);

    const editableHeadingElement = getByTestId("data-test-id");

    expect(editableHeadingElement).toBeInTheDocument();
  });

  it("should play the onStartEditing function without params when click on the input element inside the EditableHeading element", () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(<EditableHeading onStartEditing={mockCallback} />);

    const input = getByRole("input");
    fireEvent.click(input);

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("should play the onStartEditing function with params when click on the input element inside the EditableHeading element", () => {
    const mockCallback = jest.fn(x => console.log(x));
    const { getByRole } = render(<EditableHeading onStartEditing={mockCallback} />);

    const input = getByRole("input");
    fireEvent.click(input);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
