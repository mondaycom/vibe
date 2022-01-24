import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import SplitButton, { SECONDARY_BUTTON_ARIA_LABEL } from "../SplitButton";

jest.useFakeTimers();

const text = "Click Me!";
const className = "test-class";
const secondaryContentText = "Test secondary dialog content";
const secondaryContent = <div>{secondaryContentText}</div>;
const ArrowButtonLabel = SECONDARY_BUTTON_ARIA_LABEL;

const renderComponent = ({ ...props } = {}) => {
  return render(
    <SplitButton {...props} className={className} secondaryDialogContent={secondaryContent}>
      {text}
    </SplitButton>
  );
};

describe("SplitButton tests", () => {
  it("opens the secondary content dialog on click", async () => {
    const splitButtonComponent = renderComponent();
    const arrowButton = splitButtonComponent.getByLabelText(ArrowButtonLabel);
    fireEvent.click(arrowButton.parentElement);
    const expectedSecondaryDialog = await screen.findByText(secondaryContentText);
    expect(expectedSecondaryDialog).toBeTruthy();
  });

  it("doesn't open the secondary content dialog on click", () => {
    const splitButtonComponent = renderComponent({ disabled: true });
    const arrowButton = splitButtonComponent.getByLabelText(ArrowButtonLabel);
    fireEvent.click(arrowButton.parentElement);
    const expectedSecondaryDialog = screen.queryByText(secondaryContentText);
    expect(expectedSecondaryDialog).toBeFalsy();
  });

  describe("callbacks", () => {
    it("calls onSecondaryDialogDidShow when click on secondaryButton", () => {
      const onSecondaryDialogDidShow = jest.fn();
      const splitButtonComponent = renderComponent({
        onSecondaryDialogDidShow
      });
      const arrowButton = splitButtonComponent.getByLabelText(ArrowButtonLabel);
      act(() => {
        fireEvent.click(arrowButton);
        jest.advanceTimersByTime(1000);
      });
      expect(onSecondaryDialogDidShow.mock.calls.length).toBe(1);
    });

    it("calls onSecondaryDialogDidHide when click on secondaryButton", () => {
      const onSecondaryDialogDidHideMock = jest.fn();
      const splitButtonComponent = renderComponent({
        onSecondaryDialogDidHide: onSecondaryDialogDidHideMock
      });
      const arrowButton = splitButtonComponent.getByLabelText(ArrowButtonLabel);

      act(() => {
        fireEvent.click(arrowButton);
        jest.advanceTimersByTime(1000);
        fireEvent.click(arrowButton);
        jest.advanceTimersByTime(1000);
      });
      expect(onSecondaryDialogDidHideMock.mock.calls.length).toBe(1);
    });
  });
});
