import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import ModalFooterButtons, { ModalFooterButtonsProps } from "../ModalFooterButtons";

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
      const modalFooterComponent = renderComponent({ onPrimaryButtonClick, onSecondaryButtonClick });
      fireEvent.click(modalFooterComponent.getByText(/confirm/i));
      expect(onPrimaryButtonClick).toBeCalledTimes(1);
      expect(onSecondaryButtonClick).not.toBeCalled();
    });

    it("should call onSecondaryButtonClick after click cancel", () => {
      const onPrimaryButtonClick = jest.fn();
      const onSecondaryButtonClick = jest.fn();
      const modalFooterComponent = renderComponent({ onPrimaryButtonClick, onSecondaryButtonClick });
      fireEvent.click(modalFooterComponent.getByText(/cancel/i));
      expect(onSecondaryButtonClick).toBeCalledTimes(1);
      expect(onPrimaryButtonClick).not.toBeCalled();
    });
  });
});
