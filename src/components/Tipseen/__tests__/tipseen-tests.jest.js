import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import TipseenContent from "../TipseenContent";
import Tipseen from "../Tipseen";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT, TIPSEEN_CLOSE_BUTTON_TEST_ID, TIPSEEN_CLOSE_BUTTON_ARIA_LABEL } from "../TipseenConstants";

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
      )
         fireEvent.click(getByLabelText("Close"));
      
      waitFor(() => {
        expect(onClickMock.mock.calls.length).toBe(1);
      });
    });
  });
 
});

