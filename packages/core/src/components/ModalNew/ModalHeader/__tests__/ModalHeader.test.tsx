import React from "react";
import { render } from "@testing-library/react";
import ModalHeader from "../ModalHeader";
import { Text as TextIcon } from "../../../Icon/Icons";
import { useModal } from "../../context/ModalContext";

jest.mock("../../context/ModalContext", () => ({
  useModal: jest.fn()
}));
const useModalMocked = jest.mocked(useModal);

describe("ModalHeader", () => {
  const title = "Test Modal Header";
  const simpleDescription = "This is a description";
  const descriptionIcon = TextIcon;

  const useModalMockedReturnedValue = {
    modalId: "modal-id",
    setTitleId: jest.fn(),
    setDescriptionId: jest.fn(),
    contentScrolled: false,
    setContentScrolled: jest.fn()
  };

  beforeEach(() => {
    useModalMocked.mockReturnValue(useModalMockedReturnedValue);
  });

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

  it("sets the titleId and descriptionId in the context when rendered", () => {
    const { getByText } = render(<ModalHeader title={title} description={simpleDescription} />);

    expect(useModalMockedReturnedValue.setTitleId).toHaveBeenCalledWith("modal-id_label");
    expect(useModalMockedReturnedValue.setDescriptionId).toHaveBeenCalledWith("modal-id_desc");
    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(simpleDescription)).toBeInTheDocument();
  });

  it("does not set descriptionId if no description is provided", () => {
    render(<ModalHeader title={title} />);

    expect(useModalMockedReturnedValue.setTitleId).toHaveBeenCalledWith("modal-id_label");
    expect(useModalMockedReturnedValue.setDescriptionId).not.toHaveBeenCalled();
  });

  it("renders the title with the correct id", () => {
    const { getByText } = render(<ModalHeader title={title} />);

    const titleElement = getByText(title);
    expect(titleElement).toHaveAttribute("id", "modal-id_label");
  });

  it("renders the description container with the correct id when provided", () => {
    const { getByText } = render(<ModalHeader title={title} description={simpleDescription} />);

    const descriptionElement = getByText(simpleDescription);
    expect(descriptionElement.parentElement).toHaveAttribute("id", "modal-id_desc");
  });

  it("calls setTitleId and setDescriptionId with a custom id if provided", () => {
    const customId = "custom-header-id";
    render(<ModalHeader title={title} id={customId} description={simpleDescription} />);

    expect(useModalMockedReturnedValue.setTitleId).toHaveBeenCalledWith("modal-id_custom-header-id_label");
    expect(useModalMockedReturnedValue.setDescriptionId).toHaveBeenCalledWith("modal-id_custom-header-id_desc");
  });
});
