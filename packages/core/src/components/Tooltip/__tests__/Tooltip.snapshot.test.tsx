import { vi, describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
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
    const { container } = render(
      <Tooltip shouldShowOnMount content="test" theme="primary">
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with position", () => {
    const { container } = render(
      <Tooltip shouldShowOnMount content="test" position="left">
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with withoutDialog", () => {
    const { container } = render(
      <Tooltip shouldShowOnMount withoutDialog content="test">
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("without arrow", () => {
    const { container } = render(
      <Tooltip tip={false} content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with hideWhenReferenceHidden", () => {
    const { container } = render(
      <Tooltip hideWhenReferenceHidden content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with style", () => {
    const { container } = render(
      <Tooltip style={{ width: "200px" }} content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("with data-testid", () => {
    const { container } = render(
      <Tooltip data-testid="test" content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
