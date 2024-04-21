import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import LegacyEditableHeading from "../LegacyEditableHeading";

describe("LegacyEditableHeading", () => {
  afterEach(() => {
    cleanup();
  });
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<LegacyEditableHeading type={LegacyEditableHeading.types.h1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should not render an button when editing = false", () => {
    const { queryByRole } = render(<LegacyEditableHeading type={LegacyEditableHeading.types.h1} editing={false} />);

    const button = queryByRole("button");

    expect(button).toBeNull();
  });

  it("should render a button when editing = true", () => {
    const { getByRole } = render(<LegacyEditableHeading type={LegacyEditableHeading.types.h1} editing />);

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should render a button when editing prop changes from false to true", () => {
    const { getByRole, rerender } = render(<LegacyEditableHeading type={LegacyEditableHeading.types.h1} />);

    rerender(<LegacyEditableHeading type={LegacyEditableHeading.types.h1} editing />);
    const button = getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders correctly with dataTestId prop", () => {
    const { getByTestId } = render(<LegacyEditableHeading data-testid="data-test-id" />);

    const editableHeadingElement = getByTestId("data-test-id");

    expect(editableHeadingElement).toBeInTheDocument();
  });

  it("should play the onStartEditing function without params when click on the input element inside the LegacyEditableHeading element", () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(<LegacyEditableHeading onStartEditing={mockCallback} />);

    const input = getByRole("input");
    fireEvent.click(input);

    expect(mockCallback.mock.calls.length).toBe(1);
  });

  it("should play the onStartEditing function with params when click on the input element inside the LegacyEditableHeading element", () => {
    const mockCallback = jest.fn();
    const { getByRole } = render(<LegacyEditableHeading onStartEditing={mockCallback} />);

    const input = getByRole("input");
    fireEvent.click(input);

    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
