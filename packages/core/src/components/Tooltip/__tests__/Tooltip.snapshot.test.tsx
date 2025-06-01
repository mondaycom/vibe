import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "../Tooltip";

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

describe("Tooltip renders correctly", () => {
  it("with theme", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount content="test" theme="primary">
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with position", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount content="test" position="left">
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with withoutDialog", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount withoutDialog content="test">
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("without arrow", () => {
    const tree = renderer
      .create(
        <Tooltip tip={false} content="test" shouldShowOnMount>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with hideWhenReferenceHidden", () => {
    const tree = renderer
      .create(
        <Tooltip hideWhenReferenceHidden content="test" shouldShowOnMount>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with style", () => {
    const tree = renderer
      .create(
        <Tooltip style={{ width: "200px" }} content="test" shouldShowOnMount>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with data-testid", () => {
    const tree = renderer
      .create(
        <Tooltip data-testid="test" content="test" shouldShowOnMount>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
