import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import TipseenContent from "../TipseenContent";
import Tipseen from "../Tipseen";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "../TipseenConstants";

jest.mock("react-transition-group", () => {
  const FakeTransition = jest.fn(({ children }) => children);
  const FakeSwitchTransition = jest.fn(({ children }) => children);
  const FakeCSSTransition = jest.fn(({ children }) => children);
  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
    SwitchTransition: FakeSwitchTransition
  };
});

jest.useFakeTimers();

describe("Integration Tests", () => {
  describe("Tipseen tests", () => {
    it("call onClose function when click on close button", () => {
      const onClickMock = jest.fn();
      const { getByLabelText } = render(
        <Tipseen onClose={onClickMock}>
          <div />
        </Tipseen>
      );
      fireEvent.click(getByLabelText("Close"));

      waitFor(() => {
        expect(onClickMock.mock.calls.length).toBe(1);
      });
    });
  });

  describe("Tipseen content tests", () => {
    it("call onDismiss function when click on dismiss button", () => {
      const onDismissMock = jest.fn();
      const { getByText } = render(
        <TipseenContent isDismissHidden={false} onDismiss={onDismissMock}>
          content
        </TipseenContent>
      );
      const dismissButton = getByText(DISMISS_BUTTON_TEXT);

      act(() => {
        fireEvent.click(dismissButton);
      });
      expect(onDismissMock.mock.calls.length).toBe(1);
    });

    it("call onSubmit function when click on dismiss button", () => {
      const onSubmitMock = jest.fn();
      const { getByText } = render(<TipseenContent onSubmit={onSubmitMock}>content</TipseenContent>);
      const submitButton = getByText(SUBMIT_BUTTON_TEXT);

      act(() => {
        fireEvent.click(submitButton);
      });
      expect(onSubmitMock.mock.calls.length).toBe(1);
    });
  });
});
