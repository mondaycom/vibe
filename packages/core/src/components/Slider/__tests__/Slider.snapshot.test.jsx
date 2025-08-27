import { vi, describe, it, expect } from "vitest";
import React from "react";
import { Sound } from "@vibe/icons";
import { renderSliderForSnapshots } from "./sliderTestUtils.jsx";

vi.mock("@vibe/icon", () => ({
  Icon: ({ icon, ...rest }) => (
    <div data-testid="mock-icon">{JSON.stringify({ ...rest, icon: icon && icon.displayName })}</div>
  )
}));

vi.mock("../../TextField/TextField", () => ({
  default: props => {
    return <div data-testid="mock-text-field-comp">{JSON.stringify(props)}</div>;
  }
}));

describe("Slider renders correctly", () => {
  it("01. with empty props", async () => {
    const render = await renderSliderForSnapshots();
    expect(render).toMatchSnapshot();
  });

  it("02. with ariaLabel", async () => {
    const render = await renderSliderForSnapshots({ ariaLabel: "My Slider" });
    expect(render).toMatchSnapshot();
  });

  it("03. with ariaLabelledby", async () => {
    const render = await renderSliderForSnapshots({ ariaLabelledby: "id-of-the-custom-label" });
    expect(render).toMatchSnapshot();
  });

  it("04. with custom className", async () => {
    const render = await renderSliderForSnapshots({ className: "slide-me" });
    expect(render).toMatchSnapshot();
  });

  it("05. with id and data-testid", async () => {
    const render = await renderSliderForSnapshots(
      { id: "my-slider", "data-testid": "my-slider" },
      "my-slider__thumb-0"
    );
    expect(render).toMatchSnapshot();
  });

  it("06. with disabled", async () => {
    const render = await renderSliderForSnapshots({ disabled: true });
    expect(render).toMatchSnapshot();
  });

  it("07. with color", async () => {
    const render = await renderSliderForSnapshots({ color: "positive" });
    expect(render).toMatchSnapshot();
  });

  it(`08. with size`, async () => {
    const render = await renderSliderForSnapshots({ size: "large" });
    expect(render).toMatchSnapshot();
  });

  it(`09. with min, max, and step`, async () => {
    const render = await renderSliderForSnapshots({ min: 10, max: 20, step: 2 });
    expect(render).toMatchSnapshot();
  });

  it(`10. with showValue`, async () => {
    const render = await renderSliderForSnapshots({ showValue: true });
    expect(render).toMatchSnapshot();
  });

  it(`11. with valueFormatter`, async () => {
    const render = await renderSliderForSnapshots({ valueFormatter: value => `--${value}GB--` });
    expect(render).toMatchSnapshot();
  });

  it(`12. with value (controlled component)`, async () => {
    const render = await renderSliderForSnapshots({ value: 12 });
    expect(render).toMatchSnapshot();
  });

  it(`13. with value, valueText (controlled component)`, async () => {
    const render = await renderSliderForSnapshots({ value: 15, valueText: "15kg" });
    expect(render).toMatchSnapshot();
  });

  it(`14. with indicateSelection`, async () => {
    const render = await renderSliderForSnapshots({ indicateSelection: true });
    expect(render).toMatchSnapshot();
  });

  it(`15. with prefix (string) and postfix (Icon)`, async () => {
    const render = await renderSliderForSnapshots({ prefix: "Vol", postfix: { icon: Sound } });
    expect(render).toMatchSnapshot();
  });

  it(`16. with prefix (custom) and postfix (render-props)`, async () => {
    const render = await renderSliderForSnapshots({
      prefix: <div>Custom component</div>,
      postfix: (value, valueText) => `Render Props result: ${valueText} (${value})`
    });
    expect(render).toMatchSnapshot();
  });

  it(`17. with ranged (ranged slider)`, async () => {
    const render = await renderSliderForSnapshots({ ranged: true });
    expect(render).toMatchSnapshot();
  });

  it(`18. ranged slider with options`, async () => {
    const render = await renderSliderForSnapshots({ defaultValue: [20, 30], min: 10, max: 50, ranged: true, step: 2 });
    expect(render).toMatchSnapshot();
  });
});
