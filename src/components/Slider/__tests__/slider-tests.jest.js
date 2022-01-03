import React from "react";
import { cleanup, render } from "@testing-library/react";
import Slider from "../Slider";

const renderComponent = props => {
  return render(<Slider {...props} />);
};

describe("Slider tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {
    expect(1).toEqual(1);
  });

  it("should do x when y", () => {
    expect(1).toEqual(1);
  });
});
