import { vi, describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import { noop as NOOP } from "lodash-es";
import Button from "../Button";
import { WhatsNew } from "@vibe/icons";
import { ButtonSize } from "../Button.types";

vi.mock("../../Icon/CustomSvgIcon/CustomSvgIcon", () => ({
  default: () => <div data-testid="custom-icon-mock" />
}));

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

  Object.values(["small", "medium", "large"]).forEach(size => {
    it(`renders Button size- ${size}`, () => {
      const tree = renderer.create(<Button size={size as ButtonSize}>Button</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  Object.values(Button.colors).forEach(color => {
    it(`renders Button color- ${color}`, () => {
      const tree = renderer.create(<Button color={color}>Button</Button>).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  Object.values(Button.kinds).forEach(kind => {
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
