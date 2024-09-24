import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "../Modal";

describe("Modal", () => {
  const id = "modal-id";
  const closeButtonAriaLabel = "Close modal";
  const childrenContent = <span>My content</span>;

  it("renders the modal with the correct role", () => {
    const { getByTestId } = render(
      <Modal id={id} show data-testid="modal">
        {childrenContent}
      </Modal>
    );

    expect(getByTestId("modal")).toHaveAttribute("role", "dialog");
  });

  it("renders the modal with the correct aria-modal", () => {
    const { getByTestId } = render(
      <Modal id={id} show data-testid="modal">
        {childrenContent}
      </Modal>
    );

    expect(getByTestId("modal")).toHaveAttribute("aria-modal", "true");
  });

  it("renders the children content correctly", () => {
    const { getByText } = render(
      <Modal id={id} show>
        {childrenContent}
      </Modal>
    );

    expect(getByText("My content")).toBeInTheDocument();
  });

  it("applies default size as 'medium' when not supplied with a size", () => {
    const { getByRole } = render(
      <Modal id={id} show>
        {childrenContent}
      </Modal>
    );

    expect(getByRole("dialog")).toHaveClass("sizeMedium");
  });

  it("applies the correct given 'large' size", () => {
    const { getByRole } = render(
      <Modal id={id} show size="large">
        {childrenContent}
      </Modal>
    );

    expect(getByRole("dialog")).toHaveClass("sizeLarge");
  });

  it("calls onClose when the close button is clicked", () => {
    const mockOnClose = jest.fn();
    const { getByLabelText } = render(
      <Modal id={id} show onClose={mockOnClose} closeButtonAriaLabel={closeButtonAriaLabel}>
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
