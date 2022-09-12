import React from "react";
import { cleanup } from "@testing-library/react";
import { snapshotDiff } from "../../../utils/jest-utils";
import { Sound } from "../../Icon/Icons";
import Slider from "../Slider";
import { renderSliderForSnapshots } from "./slider-tests.utils";

jest.mock("../../Icon/Icon", () => {
  return ({ icon, ...rest }) => {
    return <div data-testid="mock-icon">{JSON.stringify({ ...rest, icon: icon && icon.displayName })}</div>;
  };
});

jest.mock("../../TextField/TextField", () => {
  const TextField = props => {
    return <div data-testid="mock-text-field-comp">{JSON.stringify(props)}</div>;
  };
  return TextField;
});

describe("Slider Render", () => {
  let defaultRender;
  beforeAll(async () => {
    defaultRender = await renderSliderForSnapshots();
    cleanup();
  });

  afterEach(() => {
    cleanup();
  });

  it("01. with empty props", async () => {
    expect(defaultRender).toMatchSnapshot();
  });

  it("02. with ariaLabel", async () => {
    const props = { ariaLabel: "My Slider" };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("03. with ariaLabelledby", async () => {
    const props = { ariaLabelledby: "id-of-the-custom-label" };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("04. with custom className", async () => {
    const props = { className: "slide-me" };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("05. with id and data-testid", async () => {
    const props = { id: "my-slider", "data-testid": "my-slider" };
    const currentRender = await renderSliderForSnapshots(props, "my-slider__thumb-0");
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("06. with disabled", async () => {
    const props = { disabled: true };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it("07. with color", async () => {
    const props = { color: Slider.colors.POSITIVE };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`08. with size`, async () => {
    const props = { size: Slider.sizes.LARGE };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`09. with min, max, and step`, async () => {
    const props = { min: 10, max: 20, step: 2 };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`10. with showValue`, async () => {
    const props = { showValue: true };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`11. with valueFormatter`, async () => {
    const props = { valueFormatter: value => `--${value}GB--` };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`12. with value (controlled component)`, async () => {
    const props = { value: 12 };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`13. with value, valueText (controlled component)`, async () => {
    const props = { value: 15, valueText: "15kg" };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`14. with indicateSelection`, async () => {
    const props = { indicateSelection: true };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`15. with prefix (string) and postfix (Icon)`, async () => {
    const props = { prefix: "Vol", postfix: { icon: Sound } };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender)).toMatchSnapshot();
  });

  it(`16. with prefix (custom) and postfix (render-props)`, async () => {
    const props = {
      prefix: <div>Custom component</div>,
      postfix: (value, valueText) => `Render Props result: ${valueText} (${value})`
    };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender)).toMatchSnapshot();
  });

  it(`17. with ranged (ranged slider)`, async () => {
    const props = { ranged: true };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });

  it(`18. ranged slider with options`, async () => {
    const props = { defaultValue: [20, 30], min: 10, max: 50, ranged: true, step: 2 };
    const currentRender = await renderSliderForSnapshots(props);
    expect(snapshotDiff(defaultRender, currentRender, { props })).toMatchSnapshot();
  });
});
