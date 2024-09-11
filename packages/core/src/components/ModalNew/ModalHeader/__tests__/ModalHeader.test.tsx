import React from "react";
import { render } from "@testing-library/react";
import ModalHeader from "../ModalHeader";
import { Text as TextIcon } from "../../../Icon/Icons";

describe("ModalHeader", () => {
  const title = "Test Modal Header";
  const simpleDescription = "This is a description";
  const descriptionIcon = TextIcon;

  it("renders the title correctly", () => {
    const { getByText } = render(<ModalHeader title={title} />);

    expect(getByText(title)).toBeInTheDocument();
  });

  it("renders the description correctly", () => {
    const { getByText } = render(<ModalHeader title={title} description={simpleDescription} />);

    expect(getByText(simpleDescription)).toBeInTheDocument();
  });

  it("renders the description icon when provided", () => {
    const { getByText, getByTestId } = render(
      <ModalHeader title={title} description={simpleDescription} descriptionIcon={descriptionIcon} />
    );

    expect(getByText(simpleDescription)).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("renders custom description node", () => {
    const customDescription = <span data-testid="custom-description">Custom description content</span>;

    const { getByTestId } = render(<ModalHeader title={title} description={customDescription} />);

    expect(getByTestId("custom-description")).toBeInTheDocument();
  });

  it("does not render description when not provided", () => {
    const { queryByText } = render(<ModalHeader title={title} />);

    expect(queryByText(simpleDescription)).not.toBeInTheDocument();
  });

  it("renders with description icon when descriptionIcon is an object", () => {
    const descriptionIconObject = {
      name: TextIcon,
      className: "with-custom-icon-class"
    };

    const { getByTestId } = render(
      <ModalHeader title={title} description={simpleDescription} descriptionIcon={descriptionIconObject} />
    );

    const icon = getByTestId("icon");
    expect(icon).toHaveClass(descriptionIconObject.className);
  });
});
