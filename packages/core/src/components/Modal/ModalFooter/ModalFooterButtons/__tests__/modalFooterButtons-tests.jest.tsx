import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import ModalFooterButtons, { ModalFooterButtonsProps } from "../ModalFooterButtons";

const PRIMARY_BUTTON_TEXT = "Confirm";
const SECONDARY_BUTTON_TEXT = "Cancel";

const renderComponent = (props: ModalFooterButtonsProps) => {
  return render(<ModalFooterButtons {...props} />);
};

describe("ModalFooterButtons", () => {
  afterEach(() => {
    cleanup();
  });

  describe("onClick handlers", () => {
    it("should call onPrimaryButtonClick after click confirm", () => {
      const onPrimaryButtonClick = jest.fn();
      const onSecondaryButtonClick = jest.fn();
      const modalFooterComponent = renderComponent({
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        secondaryButtonText: SECONDARY_BUTTON_TEXT,
        onPrimaryButtonClick,
        onSecondaryButtonClick
      });
      fireEvent.click(modalFooterComponent.getByText(PRIMARY_BUTTON_TEXT));
      expect(onPrimaryButtonClick).toBeCalledTimes(1);
      expect(onSecondaryButtonClick).not.toBeCalled();
    });

    it("should call onSecondaryButtonClick after click cancel", () => {
      const onPrimaryButtonClick = jest.fn();
      const onSecondaryButtonClick = jest.fn();
      const modalFooterComponent = renderComponent({
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        secondaryButtonText: SECONDARY_BUTTON_TEXT,
        onPrimaryButtonClick,
        onSecondaryButtonClick
      });
      fireEvent.click(modalFooterComponent.getByText(SECONDARY_BUTTON_TEXT));
      expect(onSecondaryButtonClick).toBeCalledTimes(1);
      expect(onPrimaryButtonClick).not.toBeCalled();
    });

    it("should not call onPrimaryButtonClick after click confirm when primary button is disabled", () => {
      const onPrimaryButtonClick = jest.fn();
      const onSecondaryButtonClick = jest.fn();
      const modalFooterComponent = renderComponent({
        primaryButtonText: PRIMARY_BUTTON_TEXT,
        secondaryButtonText: SECONDARY_BUTTON_TEXT,
        disablePrimaryButton: true,
        onPrimaryButtonClick,
        onSecondaryButtonClick
      });
      fireEvent.click(modalFooterComponent.getByText(PRIMARY_BUTTON_TEXT));
      expect(onPrimaryButtonClick).not.toBeCalled();
      expect(onSecondaryButtonClick).not.toBeCalled();
    });
  });
});
