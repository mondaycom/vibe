import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "../Slider";

export const SLIDER_LABEL = "my-slider";

export function renderSlider(props = {}) {
  return render(<Slider {...props} />);
}

export async function renderSliderInNonRangeMode(props = {}) {
  const renderResult = render(<Slider ariaLabel={SLIDER_LABEL} defaultValue={20} {...props} />);
  // noinspection JSCheckFunctionSignatures
  const elThumb = await screen.findByLabelText(SLIDER_LABEL);
  return { ...renderResult, elThumb };
}

export async function renderSliderInRangeMode(props = {}) {
  const renderResult = render(<Slider ranged={true} defaultValue={[25, 65]} {...props} />);
  // noinspection JSCheckFunctionSignatures
  const elThumbStart = await screen.findByTestId("monday-slider__thumb-0");
  // noinspection JSCheckFunctionSignatures
  const elThumbEnd = await screen.findByTestId("monday-slider__thumb-1");
  return { ...renderResult, elThumbStart, elThumbEnd };
}

export async function renderSliderForSnapshots(props, dataTestId = "monday-slider__thumb-0") {
  const { asFragment } = renderSlider(props);
  // noinspection JSCheckFunctionSignatures
  await screen.findByTestId(dataTestId);
  return asFragment().firstChild;
}
