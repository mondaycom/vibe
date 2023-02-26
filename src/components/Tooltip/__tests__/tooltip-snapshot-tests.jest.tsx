import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "../Tooltip";

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

describe("Tooltip renders correctly", () => {
  it("with end arrowPosition", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount content="test" arrowPosition={Tooltip.arrowPositions.END}>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with theme", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount content="test" theme={Tooltip.themes.Error}>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with position", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount content="test" position={Tooltip.positions.LEFT}>
          <div />
        </Tooltip>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with justify", () => {
    const tree = renderer
      .create(
        <Tooltip shouldShowOnMount content="test" justify={Tooltip.justifyTypes.END}>
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
});
