import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import MultiStepIndicator from "../MultiStepIndicator";

describe("MultiStepIndicator tests", () => {
  it("onClick works and is called once", () => {
    const exampleSteps = [
      {
        status: MultiStepIndicator.stepStatuses.FULFILLED,
        titleText: "Title",
        subtitleText: "Subtitle"
      },
      {
        status: MultiStepIndicator.stepStatuses.ACTIVE,
        titleText: "Active",
        subtitleText: "Active Subtitle"
      }
    ];

    const stepClickMock = jest.fn();

    const multiStepIndicatorComponent = render(
      <MultiStepIndicator type={MultiStepIndicator.types.SUCCESS} steps={exampleSteps} onClick={stepClickMock} />
    );

    const step = multiStepIndicatorComponent.getByText("Title");
    act(() => {
      fireEvent.click(step);
    });
    expect(stepClickMock.mock.calls.length).toBe(1);
  });
});
