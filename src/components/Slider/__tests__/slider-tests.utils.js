import React from "react";
import { render } from "@testing-library/react";
import Slider from "../Slider";

export function renderComponent(props) {
  return render(<Slider {...props} />);
}

export async function renderComponentForSnapshot(props, dataTestId = "monday-slider__thumb-0") {
  const { asFragment, findByTestId } = renderComponent(props);
  await findByTestId(dataTestId);
  return asFragment().firstChild;
}
