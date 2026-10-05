import { vi, beforeEach, describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import ModalHeader from "../ModalHeader";
import { Text as TextIcon } from "@vibe/icons";
import { useModal } from "../../context/ModalContext";
import { type ModalContextProps } from "../../context/ModalContext.types";

vi.mock("../../context/ModalContext", () => ({
  useModal: vi.fn()
}));
const useModalMocked = vi.mocked(useModal);

describe("ModalHeader", () => {
  const title = "Test Modal Header";
  const simpleDescription = "This is a description";

  const useModalMockedReturnedValue: ModalContextProps = {
    modalId: "modal-id",
    setTitleId: vi.fn(),
    setDescriptionId: vi.fn()
  };

  beforeEach(() => {
    // Reset all mocks before each test
    vi.clearAllMocks();
    (useModalMockedReturnedValue.setTitleId as any).mockClear();
    (useModalMockedReturnedValue.setDescriptionId as any).mockClear();

    useModalMocked.mockReturnValue(useModalMockedReturnedValue);
  });

  it("should render a Heading component when title is a string", () => {
    const { getByRole } = render(<ModalHeader title={title} />);
    const headingElement = getByRole("heading", { name: title });
    expect(headingElement).toBeInTheDocument();
  });

  it("should not wrap in Heading if title is a ReactNode", () => {
    const CustomTitle = () => <div data-testid="custom-title">My Custom Title</div>;

    const { getByTestId, queryByRole } = render(<ModalHeader title={<CustomTitle />} />);

    expect(getByTestId("custom-title")).toBeInTheDocument();
    expect(queryByRole("heading")).not.toBeInTheDocument();
  });

  it("should render the description correctly", () => {
    const { getByText } = render(<ModalHeader title={title} description={simpleDescription} />);

    expect(getByText(simpleDescription)).toBeInTheDocument();
  });

  it("should render the description icon when provided", () => {
    const { getByText, getByTestId } = render(
      <ModalHeader title={title} description={simpleDescription} descriptionIcon={TextIcon} />
    );

    expect(getByText(simpleDescription)).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  it("should render custom description node", () => {
    const customDescription = <span data-testid="custom-description">Custom description content</span>;

    const { getByTestId } = render(<ModalHeader title={title} description={customDescription} />);

    expect(getByTestId("custom-description")).toBeInTheDocument();
  });

  it("should not render description when not provided", () => {
    const { queryByText } = render(<ModalHeader title={title} />);

    expect(queryByText(simpleDescription)).not.toBeInTheDocument();
  });

  it("should render with description icon when descriptionIcon is an object", () => {
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

  it("should call setTitleId if modalId is available and title is provided", () => {
    render(<ModalHeader title="Title" />);
    expect(useModalMockedReturnedValue.setTitleId).toHaveBeenCalledWith("modal-id_label");
  });

  it("should call setDescriptionId if modalId is available and description is provided", () => {
    render(<ModalHeader title="Title" description="I am a description" />);
    expect(useModalMockedReturnedValue.setDescriptionId).toHaveBeenCalledWith("modal-id_desc");
  });

  it("should not call setDescriptionId if no description is provided", () => {
    render(<ModalHeader title="Title" />);
    expect(useModalMockedReturnedValue.setDescriptionId).not.toHaveBeenCalled();
  });

  it("should renders the title with the correct id", () => {
    const { getByText } = render(<ModalHeader title={title} />);

    const titleElement = getByText(title);
    expect(titleElement).toHaveAttribute("id", "modal-id_label");
  });

  it("should render the description container with the correct id when provided", () => {
    const { getByText } = render(<ModalHeader title={title} description={simpleDescription} />);

    const descriptionElement = getByText(simpleDescription);
    expect(descriptionElement.parentElement).toHaveAttribute("id", "modal-id_desc");
  });

  it("should call setTitleId and setDescriptionId with a custom id if provided", () => {
    const customId = "custom-header-id";
    render(<ModalHeader title={title} id={customId} description={simpleDescription} />);

    expect(useModalMockedReturnedValue.setTitleId).toHaveBeenCalledWith("modal-id_custom-header-id_label");
    expect(useModalMockedReturnedValue.setDescriptionId).toHaveBeenCalledWith("modal-id_custom-header-id_desc");
  });
});
