import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ModalFooterBase from "../ModalFooterBase";

describe("ModalFooterBase", () => {
  const primaryButton = {
    text: "Save",
    onClick: jest.fn()
  };

  const secondaryButton = {
    text: "Cancel",
    onClick: jest.fn()
  };

  it("renders the primary button with the correct text", () => {
    const { getByText } = render(<ModalFooterBase primaryButton={primaryButton} />);

    const primaryButtonElement = getByText("Save");
    expect(primaryButtonElement).toBeInTheDocument();
  });

  it("does not render more than one child when only supplying primary button", () => {
    const { container } = render(<ModalFooterBase primaryButton={primaryButton} />);
    expect(container.firstChild.childNodes).toHaveLength(1);
  });

  it("renders the secondary button with the correct text", () => {
    const { getByText } = render(<ModalFooterBase primaryButton={primaryButton} secondaryButton={secondaryButton} />);

    const secondaryButtonElement = getByText("Cancel");
    expect(secondaryButtonElement).toBeInTheDocument();
  });

  it("calls the primary button's onClick when clicked", () => {
    const { getByText } = render(<ModalFooterBase primaryButton={primaryButton} secondaryButton={secondaryButton} />);

    fireEvent.click(getByText("Save"));
    expect(primaryButton.onClick).toHaveBeenCalled();
  });

  it("calls the secondary button's onClick when clicked", () => {
    const { getByText } = render(<ModalFooterBase primaryButton={primaryButton} secondaryButton={secondaryButton} />);

    fireEvent.click(getByText("Cancel"));
    expect(secondaryButton.onClick).toHaveBeenCalled();
  });

  it("renders the custom action via renderAction", () => {
    const customAction = <div data-testid="custom-action">Custom Action</div>;
    const { getByTestId } = render(<ModalFooterBase primaryButton={primaryButton} renderAction={customAction} />);

    const customActionElement = getByTestId("custom-action");
    expect(customActionElement).toBeInTheDocument();
    expect(customActionElement).toHaveTextContent("Custom Action");
  });
});
