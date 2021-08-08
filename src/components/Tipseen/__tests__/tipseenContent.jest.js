import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import TipseenContent from "../TipseenContent";
import renderer from "react-test-renderer";
import Tipseen from "../Tipseen";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT, TIPSEEN_CLOSE_BUTTON_TEST_ID } from "../TipseenConstants";

jest.useFakeTimers();
const renderComponent = ({ ...props }) => {
  return render(
    <TipseenContent {...props}>
      <div />
    </TipseenContent>
  );
};

describe("Tipseen content tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TipseenContent title="title" content="content" isDismissHidden={false}>
            <div />
          </TipseenContent>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<TipseenContent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without title", () => {
      const tree = renderer
        .create(
          <TipseenContent content="content">
            <div />
          </TipseenContent>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without dismiss button", () => {
      const tree = renderer
        .create(
          <TipseenContent content="content" isDismissHidden>
            <div />
          </TipseenContent>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without submit button", () => {
      const tree = renderer
        .create(
          <TipseenContent content="content" isSubmitHidden>
            <div />
          </TipseenContent>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("Integration Tests", () => {
    afterEach(() => {
      cleanup();
    });

    it("call onDismiss function when click on dismiss button", () => {
      const onClickMock = jest.fn();
      const tipseen = renderComponent({
        onClose: onClickMock
      });
      const dismissButton = tipseen.getByLabelText(DISMISS_BUTTON_TEXT);

      act(() => {
        fireEvent.click(dismissButton);
      });
      expect(onClickMock.mock.calls.length).toBe(1);
    });

    it("call onSubmit function when click on dismiss button", () => {
      const onClickMock = jest.fn();
      const tipseen = renderComponent({
        onClose: onClickMock
      });
      const submitButton = tipseen.getByLabelText(SUBMIT_BUTTON_TEXT);

      act(() => {
        fireEvent.click(submitButton);
      });
      expect(onClickMock.mock.calls.length).toBe(1);
    });
  });
});
