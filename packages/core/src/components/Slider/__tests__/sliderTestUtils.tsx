import React from "react";
import { render, screen } from "@testing-library/react";
import Slider from "../Slider";

export const SLIDER_LABEL = "my-slider";

export function renderSliderInNonRangeMode(props = {}) {
  const renderResult = render(<Slider aria-label={SLIDER_LABEL} defaultValue={20} {...props} />);
  const elThumb = screen.getByLabelText(SLIDER_LABEL);
  return { ...renderResult, elThumb };
}

export function renderSliderInRangeMode(props = {}) {
  const renderResult = render(<Slider ranged={true} defaultValue={[25, 65]} {...props} />);
  const elThumbStart = screen.getByTestId("monday-slider__thumb-0");
  const elThumbEnd = screen.getByTestId("monday-slider__thumb-1");
  return { ...renderResult, elThumbStart, elThumbEnd };
}

export function renderSliderForSnapshots(props, dataTestId = "monday-slider__thumb-0") {
  const { asFragment } = render(<Slider {...props} />);
  screen.getByTestId(dataTestId);
  return asFragment().firstChild;
}
