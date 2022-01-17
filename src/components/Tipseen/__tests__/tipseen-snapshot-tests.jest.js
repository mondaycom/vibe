import React from "react";
import renderer from "react-test-renderer";
import Tipseen from "../Tipseen";
import TipseenContent from "../TipseenContent";
import TipseenImage from "../TipseenImage";
import TipseenWizard from "../TipseenWizard";

const steps = [
  <div>Popover message will appear here loremipsum dolor samet…</div>,
  <div>Popover message will appear here loremipsum dolor samet…</div>,
  <div>Popover message will appear here loremipsum dolor samet…</div>
];

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

describe("Snapshot Tests", () => {
  describe("Tipseen renders correctly", () => {
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

  describe("Tipseen content tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TipseenContent title="title" isDismissHidden={false}>
            content
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
      const tree = renderer.create(<TipseenContent>content</TipseenContent>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly without dismiss button", () => {
      const tree = renderer.create(<TipseenContent isDismissHidden>content</TipseenContent>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly without submit button", () => {
      const tree = renderer
        .create(
          <TipseenContent isSubmitHidden>
            content
          </TipseenContent>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when override submit button text", () => {
      const tree = renderer
        .create(<TipseenContent submitButtonText="submit button text">content</TipseenContent>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly when override dismiss button text", () => {
      const tree = renderer
        .create(<TipseenContent dismissButtonText="dismiss button text">content</TipseenContent>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Tipseen image tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TipseenImage src="fake-tipseen-src" alt="alternative text" className="mock-class-name">
            <div />
          </TipseenImage>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty props", () => {
      const tree = renderer.create(<TipseenImage />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Tipseen wizard tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TipseenWizard title="title" steps={steps} className="mock-class-name">
            <div />
          </TipseenWizard>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty props", () => {
      const tree = renderer.create(<TipseenWizard />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly without title", () => {
      const tree = renderer
        .create(
          <TipseenWizard steps={steps}>
            <div />
          </TipseenWizard>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
