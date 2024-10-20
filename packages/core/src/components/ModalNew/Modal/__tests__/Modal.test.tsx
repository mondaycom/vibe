import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";

jest.mock("framer-motion", () => {
  const actual = jest.requireActual<typeof import("framer-motion")>("framer-motion");
  return {
    ...actual,
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>
  };
});

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

  it("does not render when 'show' is false", () => {
    const { queryByRole } = render(
      <Modal id={id} show={false}>
        {childrenContent}
      </Modal>
    );

    expect(queryByRole("dialog")).not.toBeInTheDocument();
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

  it("calls onClose when the close button is clicked with mouse", () => {
    const mockOnClose = jest.fn();
    const { getByLabelText } = render(
      <Modal id={id} show onClose={mockOnClose} closeButtonAriaLabel={closeButtonAriaLabel}>
        {childrenContent}
      </Modal>
    );

    fireEvent.click(getByLabelText(closeButtonAriaLabel));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when the close button is clicked with keyboard", () => {
    const mockOnClose = jest.fn();
    const { getByLabelText } = render(
      <Modal id={id} show onClose={mockOnClose} closeButtonAriaLabel={closeButtonAriaLabel}>
        {childrenContent}
      </Modal>
    );

    fireEvent.focus(getByLabelText(closeButtonAriaLabel));
    userEvent.type(getByLabelText(closeButtonAriaLabel), "{space}");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when the backdrop is clicked", () => {
    const mockOnClose = jest.fn();
    const { getByTestId } = render(
      <Modal id={id} show onClose={mockOnClose}>
        {childrenContent}
      </Modal>
    );

    fireEvent.click(getByTestId("modal-overlay_" + id));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when the Escape key is pressed while focused on dialog", () => {
    const mockOnClose = jest.fn();
    const { getByRole } = render(
      <Modal id={id} show onClose={mockOnClose}>
        {childrenContent}
      </Modal>
    );

    fireEvent.keyDown(getByRole("dialog"), { key: "Escape" });
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when the Escape key is pressed without focus", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal id={id} show onClose={mockOnClose}>
        {childrenContent}
      </Modal>
    );

    userEvent.keyboard("{Escape}");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("traps focus inside the modal when opened", () => {
    const { getByLabelText } = render(
      <>
        <button type="button">Focusable outside</button>
        <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
          {childrenContent}
        </Modal>
      </>
    );
    const closeButton = getByLabelText(closeButtonAriaLabel);
    expect(closeButton).toHaveFocus();

    userEvent.tab();
    expect(closeButton).toHaveFocus();
  });

  it("releases focus lock inside the modal when closed", () => {
    const { rerender, getByLabelText, getByText } = render(
      <>
        <button type="button">Focusable outside 1</button>
        <button type="button">Focusable outside 2</button>
        <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
          {childrenContent}
        </Modal>
      </>
    );
    const closeButton = getByLabelText(closeButtonAriaLabel);
    expect(closeButton).toHaveFocus();

    rerender(
      <>
        <button type="button">Focusable outside 1</button>
        <button type="button">Focusable outside 2</button>
        <Modal id={id} show={false} closeButtonAriaLabel={closeButtonAriaLabel}>
          {childrenContent}
        </Modal>
      </>
    );

    userEvent.tab();
    expect(getByText("Focusable outside 1")).toHaveFocus();
    userEvent.tab();
    expect(getByText("Focusable outside 2")).toHaveFocus();
  });

  it("traps and moves focus between modal elements", () => {
    const { getByLabelText, getByText } = render(
      <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
        <button type="button">Focusable 1</button>
        <button type="button">Focusable 2</button>
      </Modal>
    );
    const closeButton = getByLabelText(closeButtonAriaLabel);
    expect(closeButton).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 1")).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 2")).toHaveFocus();

    userEvent.tab();
    expect(closeButton).toHaveFocus();
  });

  it.todo("renders the correct aria-labelledby");

  it.todo("renders the correct aria-describedby");
});
