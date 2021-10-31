import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Tipseen from "../Tipseen";
import renderer from "react-test-renderer";
import { TIPSEEN_CLOSE_BUTTON_ARIA_LABEL } from "../TipseenConstants";

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
const renderComponent = props => {
  return render(
    <Tipseen {...props}>
      <div />
    </Tipseen>
  );
};
describe("Tipseen tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <Tipseen>
            <div />
          </Tipseen>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with title", () => {
      const tree = renderer
        .create(
          <Tipseen title="mock title">
            <div />
          </Tipseen>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without close button", () => {
      const tree = renderer
        .create(
          <Tipseen isCloseButtonHidden>
            <div />
          </Tipseen>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with custom width", () => {
      const tree = renderer
        .create(
          <Tipseen width={100}>
            <div />
          </Tipseen>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Integration Tests", () => {
    afterEach(() => {
      cleanup();
    });

    it("call onClose function when click on close button", () => {
      const onClickMock = jest.fn();
      const tipseen = renderComponent({
        onClose: onClickMock,
        isCloseButtonHidden: true
      });
      const closeButton = tipseen.getByLabelText(TIPSEEN_CLOSE_BUTTON_ARIA_LABEL);

      act(() => {
        fireEvent.click(closeButton);
      });
      expect(onClickMock.mock.calls.length).toBe(1);
    });
  });
});
