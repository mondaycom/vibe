import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import { noop as NOOP } from "es-toolkit";
import Button from "../Button";
import { WhatsNew } from "@vibe/icons";
import { type ButtonSize, type ButtonColor, type ButtonType } from "../Button.types";

const BUTTON_COLORS: ButtonColor[] = [
  "primary",
  "positive",
  "negative",
  "inverted",
  "on-primary-color",
  "on-inverted-background",
  "brand",
  "fixed-light",
  "fixed-dark"
];

const BUTTON_KINDS: ButtonType[] = ["primary", "secondary", "tertiary"];

describe("Button renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Button>Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with className", () => {
    const tree = renderer.create(<Button className="test">Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with id", () => {
    const tree = renderer.create(<Button id="test">Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with callbacks", () => {
    const tree = renderer
      .create(
        <Button onMouseDown={NOOP} onClick={NOOP} onBlur={NOOP} onFocus={NOOP} className="test">
          Button
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  (["small", "medium", "large"] as ButtonSize[]).forEach(size => {
    it(`renders Button size- ${size}`, () => {
      const tree = renderer.create(<Button size={size}>Button</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  BUTTON_COLORS.forEach(color => {
    it(`renders Button color- ${color}`, () => {
      const tree = renderer.create(<Button color={color}>Button</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  BUTTON_KINDS.forEach(kind => {
    it(`renders Button kind- ${kind}`, () => {
      const tree = renderer.create(<Button kind={kind}>Button</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  it("renders correctly with leftIcon", () => {
    const tree = renderer.create(<Button leftIcon={WhatsNew}>Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with rightIcon", () => {
    const tree = renderer.create(<Button rightIcon={WhatsNew}>Button</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with props change ui", () => {
    const tree = renderer
      .create(
        <Button noSidePadding rightFlat leftFlat marginLeft marginRight active>
          Button
        </Button>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("a11y", () => {
    it("renders correctly with a11y props (false)", () => {
      const tree = renderer
        .create(
          <Button ariaLabel="text" ariaControls="area" ariaExpanded={false} ariaLabeledBy="id" ariaHasPopup={false}>
            Button
          </Button>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with a11y props (true)", () => {
      const tree = renderer
        .create(
          <Button ariaLabel="text" ariaControls="area" ariaExpanded={true} ariaLabeledBy="id" ariaHasPopup={true}>
            Button
          </Button>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
