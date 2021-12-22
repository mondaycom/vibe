import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import MultiStepIndicator from "../MultiStepIndicator";


const renderComponent = props => {
  return render(<MultiStepIndicator {...props} />);
};

describe("MultiStepIndicator tests", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls x when y", () => {});

  it("should do  x when y", () => {});
});
