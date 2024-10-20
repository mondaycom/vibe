import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ModalContent from "../ModalContent";
import { useModal } from "../../context/ModalContext";

jest.mock("../../context/ModalContext", () => ({
  useModal: jest.fn()
}));
const useModalMocked = jest.mocked(useModal);

describe("ModalContent", () => {
  const childrenContent = <span>My content</span>;

  const useModalMockedReturnedValue = {
    modalId: "modal-id",
    setTitleId: jest.fn(),
    setDescriptionId: jest.fn(),
    isContentScrolled: false,
    setContentScrolled: jest.fn()
  };

  beforeEach(() => {
    useModalMocked.mockReturnValue(useModalMockedReturnedValue);
  });

  it("renders the children correctly", () => {
    const { getByText } = render(<ModalContent>{childrenContent}</ModalContent>);
    expect(getByText("My content")).toBeInTheDocument();
  });

  it("renders when no children are provided", () => {
    const { container } = render(<ModalContent />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("calls setContentScrolled with 'true' when scrolled down", () => {
    const { getByTestId } = render(
      <ModalContent id="modal-content" data-testid="modal-content">
        {childrenContent}
      </ModalContent>
    );

    const contentDiv = getByTestId("modal-content");
    fireEvent.scroll(contentDiv, { target: { scrollTop: 100 } });

    expect(useModalMockedReturnedValue.setContentScrolled).toHaveBeenCalledWith(true);
  });

  it("calls setContentScrolled with 'false' when scrolled to the top", () => {
    const { getByTestId } = render(
      <ModalContent id="modal-content" data-testid="modal-content">
        {childrenContent}
      </ModalContent>
    );

    const contentDiv = getByTestId("modal-content");

    fireEvent.scroll(contentDiv, { target: { scrollTop: 100 } });
    fireEvent.scroll(contentDiv, { target: { scrollTop: 0 } });

    expect(useModalMockedReturnedValue.setContentScrolled).toHaveBeenLastCalledWith(false);
  });

  it("does not call setContentScrolled if no scroll occurs", () => {
    render(
      <ModalContent id="modal-content" data-testid="modal-content">
        {childrenContent}
      </ModalContent>
    );

    expect(useModalMockedReturnedValue.setContentScrolled).not.toHaveBeenCalled();
  });
});
