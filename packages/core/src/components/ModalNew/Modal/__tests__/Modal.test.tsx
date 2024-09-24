import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

describe("Modal", () => {
  const closeButtonAriaLabel = "Close modal";
  const childrenContent = <span>My content</span>;

  it("renders the modal with the correct role", () => {
    const { getByTestId } = render(
      <Modal show data-testid="modal">
        {childrenContent}
      </Modal>
    );

    expect(getByTestId("modal")).toHaveAttribute("role", "dialog");
  });

  it("renders the modal with the correct aria-modal", () => {
    const { getByTestId } = render(
      <Modal show data-testid="modal">
        {childrenContent}
      </Modal>
    );

    expect(getByTestId("modal")).toHaveAttribute("aria-modal", "true");
  });

  it("renders the children content correctly", () => {
    const { getByText } = render(
      <Modal show closeButtonAriaLabel={closeButtonAriaLabel}>
        {childrenContent}
      </Modal>
    );

    expect(getByText("My content")).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const mockOnClose = jest.fn();
    const { getByLabelText } = render(
      <Modal show onClose={mockOnClose} closeButtonAriaLabel={closeButtonAriaLabel}>
        {childrenContent}
      </Modal>
    );

    fireEvent.click(getByLabelText(closeButtonAriaLabel));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it.todo("does not render when 'show' is false");

  it.todo("renders the correct aria-labelledby");

  it.todo("renders the correct aria-describedby");
});
