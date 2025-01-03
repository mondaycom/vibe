import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";
import ModalContent from "../../ModalContent/ModalContent";

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
  const childrenContent = (
    <div>
      <button type="button">Test button content</button>
      <span>My content</span>
    </div>
  );
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

  it("ensures the ref prop does not return null when modal is shown", () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal id={id} show ref={ref} data-testid="modal">
        <div>Content</div>
      </Modal>
    );

    expect(getByTestId("modal")).toBeInTheDocument();
    expect(ref.current).not.toBeNull();
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

  it("calls onClose when the Escape key is pressed while modal loads with auto-focusable content", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal id={id} show onClose={mockOnClose}>
        {childrenContent}
      </Modal>
    );

    userEvent.keyboard("{escape}");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("calls onClose when the Escape key is pressed while modal loads without an auto-focusable content", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal id={id} show onClose={mockOnClose}>
        <div aria-hidden>I am not focusable</div>
      </Modal>
    );

    userEvent.keyboard("{escape}");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("closes only the top most modal when Escape is pressed with multiple modals open", () => {
    const mockOnCloseModal1 = jest.fn();
    const mockOnCloseModal2 = jest.fn();

    render(
      <>
        <Modal id="modal1" show onClose={mockOnCloseModal1} data-testid="modal1">
          <div>Modal 1 Content</div>
        </Modal>
        <Modal id="modal2" show onClose={mockOnCloseModal2} data-testid="modal2">
          <div>Modal 2 Content</div>
        </Modal>
      </>
    );

    userEvent.keyboard("{escape}");

    expect(mockOnCloseModal1).not.toHaveBeenCalled();
    expect(mockOnCloseModal2).toHaveBeenCalled();
  });

  it("traps focus inside the modal when opened and move it to first non top-actions element", () => {
    const { getByText, getByLabelText } = render(
      <>
        <button type="button">Focusable outside</button>
        <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
          <button type="button">Test button content</button>
        </Modal>
      </>
    );
    expect(getByText("Test button content")).toHaveFocus();
    userEvent.tab();
    expect(getByLabelText(closeButtonAriaLabel)).toHaveFocus();
    userEvent.tab();
    expect(getByText("Test button content")).toHaveFocus();
  });

  it("releases focus lock inside the modal when closed", () => {
    const { rerender, getByText } = render(
      <>
        <button type="button">Focusable outside 1</button>
        <button type="button">Focusable outside 2</button>
        <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
          <button type="button">Test button content</button>
        </Modal>
      </>
    );
    expect(getByText("Test button content")).toHaveFocus();

    rerender(
      <>
        <button type="button">Focusable outside 1</button>
        <button type="button">Focusable outside 2</button>
        <Modal id={id} show={false} closeButtonAriaLabel={closeButtonAriaLabel}>
          <button type="button">Test button content</button>
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
    expect(getByText("Focusable 1")).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 2")).toHaveFocus();

    userEvent.tab();
    const closeButton = getByLabelText(closeButtonAriaLabel);
    expect(closeButton).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 1")).toHaveFocus();
  });

  it("traps and moves focus to focusable element inside ModalContent and cycle through full focus flow", () => {
    const { getByLabelText, getByText } = render(
      <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
        <button type="button">Focusable 1</button>
        <ModalContent>
          <button type="button">Focusable inside ModalContent</button>
        </ModalContent>
        <button type="button">Focusable 2</button>
      </Modal>
    );
    expect(getByText("Focusable inside ModalContent")).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 2")).toHaveFocus();

    userEvent.tab();
    expect(getByLabelText(closeButtonAriaLabel)).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 1")).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable inside ModalContent")).toHaveFocus();
  });

  it.todo("renders the correct aria-labelledby");

  it.todo("renders the correct aria-describedby");
});
