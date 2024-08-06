import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import TipseenContent from "../TipseenContent";
import Tipseen from "../Tipseen";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "../TipseenConstants";
import renderer from "react-test-renderer";
import TipseenTitle from "../TipseenTitle";

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

const tipseenMockChildren = <div className="monday-storybook-tipseen_container" />;

describe("Snapshot tests", () => {
  describe("TipseenTitle", () => {
    it("should render null without text", () => {
      const tree = renderer.create(<TipseenTitle />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("should render correctly with given text", () => {
      const tree = renderer.create(<TipseenTitle text="I'm a title" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Tipseen content tests", () => {
    it("renders correctly without props", () => {
      const tree = renderer.create(<TipseenContent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with dismiss", () => {
      const tree = renderer.create(<TipseenContent hideDismiss={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without submit", () => {
      const tree = renderer.create(<TipseenContent hideSubmit />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with dismiss - deprecated version", () => {
      const tree = renderer.create(<TipseenContent isDismissHidden={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without submit - deprecated version", () => {
      const tree = renderer.create(<TipseenContent isSubmitHidden />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Tipseen tests", () => {
    it("renders correctly without p" + "rops", () => {
      const tree = renderer.create(<Tipseen>{tipseenMockChildren}</Tipseen>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without close", () => {
      const tree = renderer.create(<Tipseen hideCloseButton>{tipseenMockChildren}</Tipseen>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without close - deprecated version", () => {
      const tree = renderer.create(<Tipseen isCloseButtonHidden>{tipseenMockChildren}</Tipseen>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with dark close button theme", () => {
      const tree = renderer
        .create(<Tipseen closeButtonTheme={Tipseen.closeButtonThemes.DARK}>{tipseenMockChildren}</Tipseen>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with floating variation", () => {
      const tree = renderer.create(<Tipseen floating />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

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
        <TipseenContent hideDismiss={false} onDismiss={onDismissMock}>
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
