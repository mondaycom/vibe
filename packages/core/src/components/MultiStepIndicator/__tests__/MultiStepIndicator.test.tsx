import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import MultiStepIndicator from "../MultiStepIndicator";
import { Step } from "../MultiStep.types";

describe("MultiStepIndicator tests", () => {
  it("onClick works and is called once", () => {
    const exampleSteps: Step[] = [
      {
        status: "fulfilled",
        titleText: "Title",
        subtitleText: "Subtitle"
      },
      {
        status: "active",
        titleText: "Active",
        subtitleText: "Active Subtitle"
      }
    ];

    const stepClickMock = jest.fn();

    const multiStepIndicatorComponent = render(
      <MultiStepIndicator type="success" steps={exampleSteps} onClick={stepClickMock} />
    );

    const step = multiStepIndicatorComponent.getByText("Title");
    act(() => {
      fireEvent.click(step);
    });
    expect(stepClickMock.mock.calls.length).toBe(1);
  });
});
