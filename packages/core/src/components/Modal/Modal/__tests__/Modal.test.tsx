import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../Modal";
import ModalContent from "../../ModalContent/ModalContent";
import ModalHeader from "../../ModalHeader/ModalHeader";

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
  it("should render the modal with the correct role", () => {
    const { getByTestId } = render(
      <Modal id={id} show data-testid="modal">
        {childrenContent}
      </Modal>
    );

    expect(getByTestId("modal")).toHaveAttribute("role", "dialog");
  });

  it("should render the modal with the correct aria-modal", () => {
    const { getByTestId } = render(
      <Modal id={id} show data-testid="modal">
        {childrenContent}
      </Modal>
    );

    expect(getByTestId("modal")).toHaveAttribute("aria-modal", "true");
  });

  it("should not render when 'show' is false", () => {
    const { queryByRole } = render(
      <Modal id={id} show={false}>
        {childrenContent}
      </Modal>
    );

    expect(queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should render the children content correctly", () => {
    const { getByText } = render(
      <Modal id={id} show>
        {childrenContent}
      </Modal>
    );

    expect(getByText("My content")).toBeInTheDocument();
  });

  it("should ensure the ref prop does not return null when modal is shown", () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal id={id} show ref={ref} data-testid="modal">
        <div>Content</div>
      </Modal>
    );

    expect(getByTestId("modal")).toBeInTheDocument();
    expect(ref.current).not.toBeNull();
  });

  it("should apply default size as 'medium' when not supplied with a size", () => {
    const { getByRole } = render(
      <Modal id={id} show>
        {childrenContent}
      </Modal>
    );

    expect(getByRole("dialog")).toHaveClass("sizeMedium");
  });

  it("should apply the correct given 'large' size", () => {
    const { getByRole } = render(
      <Modal id={id} show size="large">
        {childrenContent}
      </Modal>
    );

    expect(getByRole("dialog")).toHaveClass("sizeLarge");
  });

  it("should call onClose when the close button is clicked with mouse", () => {
    const mockOnClose = jest.fn();
    const { getByLabelText } = render(
      <Modal id={id} show onClose={mockOnClose} closeButtonAriaLabel={closeButtonAriaLabel}>
        {childrenContent}
      </Modal>
    );

    fireEvent.click(getByLabelText(closeButtonAriaLabel));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClose when the close button is clicked with keyboard", () => {
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

  it("should call onClose when the backdrop is clicked", () => {
    const mockOnClose = jest.fn();
    const { getByTestId } = render(
      <Modal id={id} show onClose={mockOnClose}>
        {childrenContent}
      </Modal>
    );

    fireEvent.click(getByTestId("modal-overlay_" + id));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClose when the Escape key is pressed while modal loads with auto-focusable content", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal id={id} show onClose={mockOnClose}>
        {childrenContent}
      </Modal>
    );

    userEvent.keyboard("{escape}");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should call onClose when the Escape key is pressed while modal loads without an auto-focusable content", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal id={id} show onClose={mockOnClose}>
        <div aria-hidden>I am not focusable</div>
      </Modal>
    );

    userEvent.keyboard("{escape}");
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("should close only the top most modal when Escape is pressed with multiple modals open", () => {
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

  it("should trap focus inside the modal when opened and move it to first non top-actions element", () => {
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

  it("should release focus lock from inside the modal when closed", () => {
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

  it("should allow focus by default if onFocusAttempt is not provided", () => {
    const { getByText, getByLabelText } = render(
      <>
        <button type="button">Focusable outside</button>
        <Modal id={id} show closeButtonAriaLabel={closeButtonAriaLabel}>
          <button type="button">Focusable 1</button>
          <button type="button">Focusable 2</button>
        </Modal>
      </>
    );

    expect(getByText("Focusable 1")).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 2")).toHaveFocus();

    userEvent.tab();
    expect(getByLabelText(closeButtonAriaLabel)).toHaveFocus();
  });

  it("should block focus if onFocusAttempt returns HTMLElement", () => {
    const modalRef = React.createRef<HTMLDivElement>();
    const onFocusAttemptMock = jest.fn(nextFocusedElement => {
      return nextFocusedElement.textContent === "Focusable 2" ? modalRef.current : true;
    });

    const { getByText, getByRole } = render(
      <>
        <button type="button">Focusable outside</button>
        <Modal
          id={id}
          ref={modalRef}
          show
          onFocusAttempt={onFocusAttemptMock}
          closeButtonAriaLabel={closeButtonAriaLabel}
        >
          <button type="button">Focusable 1</button>
          <button type="button">Focusable 2</button>
        </Modal>
      </>
    );

    expect(getByText("Focusable 1")).toHaveFocus();

    userEvent.tab();
    expect(onFocusAttemptMock).toHaveBeenCalledWith(getByText("Focusable 2"));
    // initial + focusable 1 + ignored focusable 2 + enforced modal
    expect(onFocusAttemptMock).toHaveBeenCalledTimes(4);
    expect(getByRole("dialog")).toHaveFocus();
  });

  it("should not auto-focus any modal content when autoFocus is false", () => {
    const outsideButtonRef = React.createRef<HTMLButtonElement>();
    const { getByText } = render(
      <>
        <button type="button" ref={outsideButtonRef}>
          Focusable outside
        </button>
        <Modal id={id} show autoFocus={false} closeButtonAriaLabel={closeButtonAriaLabel}>
          <button type="button">Focusable 1</button>
        </Modal>
      </>
    );

    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(getByText("Focusable 1")).toHaveFocus();
  });

  describe("integrated with ModalContent", () => {
    it("should trap and moves focus to focusable element inside ModalContent and to cycle through full focus flow", () => {
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

    it("should pass autoFocus prop value to ModalContent's data-autofocus-inside attribute", () => {
      const { getByTestId, rerender } = render(
        <Modal id={id} show>
          <ModalContent data-testid="modal-content">Some content</ModalContent>
        </Modal>
      );

      expect(getByTestId("modal-content")).toHaveAttribute("data-autofocus-inside", "true");

      rerender(
        <Modal id={id} show autoFocus={false}>
          <ModalContent data-testid="modal-content">Some content</ModalContent>
        </Modal>
      );

      expect(getByTestId("modal-content")).toHaveAttribute("data-autofocus-inside", "false");
    });
  });

  describe("integrated with ModalHeader", () => {
    it("should use auto-generated aria-labelledby when none is provided", () => {
      const { getByRole } = render(
        <Modal show id={id}>
          <ModalHeader title="Title from Header" />
        </Modal>
      );

      expect(getByRole("dialog")).toHaveAttribute("aria-labelledby", `${id}_label`);
    });

    it("should use auto-generated aria-describedby when none is provided", () => {
      const { getByRole } = render(
        <Modal show id={id}>
          <ModalHeader title="Title" description="Some description" />
        </Modal>
      );

      expect(getByRole("dialog")).toHaveAttribute("aria-describedby", `${id}_desc`);
    });

    it("should respect user-provided aria-labelledby and should not use the auto-generated ID", () => {
      const customAriaLabelId = "myCustomTitleId";
      const { getByRole } = render(
        <Modal show id={id} aria-labelledby={customAriaLabelId}>
          <ModalHeader title="Header Title" />
        </Modal>
      );

      expect(getByRole("dialog")).toHaveAttribute("aria-labelledby", customAriaLabelId);
    });

    it("should respect user-provided aria-describedby and should not generate an ID", () => {
      const customAriaDescId = "myCustomDescriptionId";
      const { getByRole } = render(
        <Modal show id={id} aria-describedby={customAriaDescId}>
          <ModalHeader title="Header Title" description="I am a description" />
        </Modal>
      );

      expect(getByRole("dialog")).toHaveAttribute("aria-describedby", customAriaDescId);
    });

    it("should respect user-provided aria-describedby even if description isn't supplied to ModalHeader", () => {
      const customAriaDescId = "myCustomDescriptionId";
      const { getByRole } = render(
        <Modal show id={id} aria-describedby={customAriaDescId}>
          <ModalHeader title="Header Title" />
        </Modal>
      );

      expect(getByRole("dialog")).toHaveAttribute("aria-describedby", customAriaDescId);
    });

    it("should not generate aria-describedby if there is no description in ModalHeader and the user provided none", () => {
      const { getByRole } = render(
        <Modal show id={id}>
          <ModalHeader title="Just a title, no description" />
        </Modal>
      );

      expect(getByRole("dialog")).not.toHaveAttribute("aria-describedby");
    });
  });
});
