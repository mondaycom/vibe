import { describe, it, expect } from "vitest";
import React from "react";
import { render } from "@testing-library/react";
import Tooltip from "../Tooltip";

describe("Tooltip renders correctly", () => {
  it("with theme", () => {
    const { baseElement } = render(
      <Tooltip shouldShowOnMount content="test" theme="primary">
        <div />
      </Tooltip>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with position", () => {
    const { baseElement } = render(
      <Tooltip shouldShowOnMount content="test" position="left">
        <div />
      </Tooltip>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with withoutDialog", () => {
    const { container } = render(
      <Tooltip withoutDialog content="test">
        <div />
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("without arrow", () => {
    const { baseElement } = render(
      <Tooltip tip={false} content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with hideWhenReferenceHidden", () => {
    const { baseElement } = render(
      <Tooltip hideWhenReferenceHidden content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with style", () => {
    const { baseElement } = render(
      <Tooltip style={{ width: "200px" }} content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(baseElement).toMatchSnapshot();
  });

  it("with data-testid", () => {
    const { baseElement } = render(
      <Tooltip data-testid="test" content="test" shouldShowOnMount>
        <div />
      </Tooltip>
    );
    expect(baseElement).toMatchSnapshot();
  });
});
