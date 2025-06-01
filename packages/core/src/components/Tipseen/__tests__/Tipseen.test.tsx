import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import TipseenContent from "../TipseenContent";
import Tipseen from "../Tipseen";
import { DISMISS_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "../TipseenConstants";
import renderer from "react-test-renderer";
import TipseenTitle from "../TipseenTitle";

vi.mock("react-transition-group", () => {
  const FakeTransition = vi.fn(({ children }) => children);
  const FakeSwitchTransition = vi.fn(({ children }) => children);
  const FakeCSSTransition = vi.fn(({ children }) => children);
  return {
    CSSTransition: FakeCSSTransition,
    Transition: FakeTransition,
    SwitchTransition: FakeSwitchTransition
  };
});

vi.useFakeTimers();

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
      const { asFragment } = render(<TipseenContent />);
      expect(asFragment()).toMatchSnapshot();
    });
    it("renders correctly with dismiss", () => {
      const tree = renderer.create(<TipseenContent hideDismiss={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without submit", () => {
      const tree = renderer.create(<TipseenContent hideSubmit />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Tipseen tests", () => {
    it("renders correctly without p" + "rops", () => {
      const tree = renderer.create(<Tipseen content="content">{tipseenMockChildren}</Tipseen>).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without close", () => {
      const { asFragment } = render(
        <Tipseen content="content" showDelay={0} hideCloseButton>
          {tipseenMockChildren}
        </Tipseen>
      );
      expect(asFragment()).toMatchSnapshot();
    });
    it("renders correctly with dark close button theme", async () => {
      const { asFragment } = render(
        <Tipseen content="content" showDelay={0} closeButtonTheme="dark">
          {tipseenMockChildren}
        </Tipseen>
      );
      await waitFor(() => {
        expect(asFragment()).toBeTruthy();
      });
      expect(asFragment()).toMatchSnapshot();
    });
    it("renders correctly with floating variation", async () => {
      const { container } = render(<Tipseen content="content" floating />);
      await waitFor(() => {
        expect(container.firstChild).toBeTruthy();
      });
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe("Integration Tests", () => {
  describe("Tipseen tests", () => {
    it("call onClose function when click on close button", () => {
      const onClickMock = vi.fn();
      const { getByLabelText } = render(
        <Tipseen content="content" onClose={onClickMock}>
          <div />
        </Tipseen>
      );

      waitFor(() => {
        fireEvent.click(getByLabelText("Close"));
        expect(onClickMock.mock.calls.length).toBe(1);
      });
    });
  });

  describe("Tipseen content tests", () => {
    it("call onDismiss function when click on dismiss button", () => {
      const onDismissMock = vi.fn();
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
      const onSubmitMock = vi.fn();
      const { getByText } = render(<TipseenContent onSubmit={onSubmitMock}>content</TipseenContent>);
      const submitButton = getByText(SUBMIT_BUTTON_TEXT);

      act(() => {
        fireEvent.click(submitButton);
      });
      expect(onSubmitMock.mock.calls.length).toBe(1);
    });
  });
});
