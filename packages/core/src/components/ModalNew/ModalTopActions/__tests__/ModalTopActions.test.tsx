import React from "react";
import { render, fireEvent, within } from "@testing-library/react";
import ModalTopActions from "../ModalTopActions";
import IconButton from "../../../IconButton/IconButton";
import { Feedback as FeedbackIcon } from "../../../Icon/Icons";
import { ButtonColor } from "../../../Button/ButtonConstants";
import { camelCase } from "lodash-es";

describe("ModalTopActions", () => {
  const closeButtonAriaLabel = "Close modal";

  it("renders the close button with the correct aria-label", () => {
    const { getByLabelText } = render(<ModalTopActions closeButtonAriaLabel={closeButtonAriaLabel} />);

    expect(getByLabelText(closeButtonAriaLabel)).toBeInTheDocument();
  });

  it("calls onClose when the close button is clicked", () => {
    const mockOnClose = jest.fn();

    const { getByLabelText } = render(
      <ModalTopActions onClose={mockOnClose} closeButtonAriaLabel={closeButtonAriaLabel} />
    );

    fireEvent.click(getByLabelText(closeButtonAriaLabel));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it("does not fail when onClose is not provided", () => {
    const { getByLabelText } = render(<ModalTopActions closeButtonAriaLabel={closeButtonAriaLabel} />);
    fireEvent.click(getByLabelText(closeButtonAriaLabel));
    expect(() => getByLabelText(closeButtonAriaLabel)).not.toThrow();
  });

  it("renders the action button using the renderAction prop as a function", () => {
    const renderAction = jest.fn(color => <IconButton data-testid="extra-action" icon={FeedbackIcon} color={color} />);
    const { getByTestId } = render(<ModalTopActions renderAction={renderAction} />);

    expect(within(getByTestId("extra-action")).getByTestId("icon")).toBeInTheDocument();
  });

  it("calls renderAction with correct color argument", () => {
    const renderAction = jest.fn(color => <IconButton data-testid="extra-action" icon={FeedbackIcon} color={color} />);
    render(<ModalTopActions color="dark" renderAction={renderAction} />);

    expect(renderAction).toHaveBeenCalledWith(ButtonColor.ON_INVERTED_BACKGROUND);
  });

  it("renders the action button using the renderAction prop directly", () => {
    const renderAction = (
      <IconButton data-testid="extra-action" icon={FeedbackIcon} color={IconButton.colors.ON_PRIMARY_COLOR} />
    );
    const { getByTestId } = render(<ModalTopActions renderAction={renderAction} />);

    expect(within(getByTestId("extra-action")).getByTestId("icon")).toBeInTheDocument();
  });

  it("applies the correct color when 'dark' is passed", () => {
    const { getByLabelText } = render(<ModalTopActions color="dark" closeButtonAriaLabel={closeButtonAriaLabel} />);
    expect(getByLabelText(closeButtonAriaLabel)).toHaveClass(camelCase("color-" + ButtonColor.ON_INVERTED_BACKGROUND));
  });

  it("applies the correct color when 'light' is passed", () => {
    const { getByLabelText } = render(<ModalTopActions color="light" closeButtonAriaLabel={closeButtonAriaLabel} />);
    expect(getByLabelText(closeButtonAriaLabel)).toHaveClass(camelCase("color-" + ButtonColor.ON_PRIMARY_COLOR));
  });

  it("applies the default color when no color is passed", () => {
    const { getByLabelText } = render(<ModalTopActions closeButtonAriaLabel={closeButtonAriaLabel} />);
    expect(getByLabelText(closeButtonAriaLabel)).toHaveClass(camelCase("color-" + ButtonColor.PRIMARY));
  });
});
