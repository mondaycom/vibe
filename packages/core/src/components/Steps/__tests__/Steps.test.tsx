import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Steps, { StepsProps } from "../Steps";
import { NEXT_TEXT, BACK_TEXT } from "../StepsConstants";

jest.useFakeTimers();

const stepsContent = [
  <div key="first" data-testid="first-step">
    first
  </div>,
  <div key="second" data-testid="second-step">
    second
  </div>
];
const renderComponent = (props: StepsProps) => {
  return render(<Steps steps={stepsContent} {...props} />);
};

describe("Steps tests", () => {
  it("call onChangeIndexCallback when click on go back button and it does not disable", () => {
    const onClickMock = jest.fn();
    const steps = renderComponent({
      onChangeActiveStep: onClickMock,
      activeStepIndex: stepsContent.length - 1
    });
    const backwardButton = steps.getByText(BACK_TEXT);

    act(() => {
      fireEvent.click(backwardButton);
    });
    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("call onChangeIndexCallback when click on go forward button and it does not disable", () => {
    const onClickMock = jest.fn();
    const steps = renderComponent({
      onChangeActiveStep: onClickMock,
      activeStepIndex: 0
    });
    const forwardButton = steps.getByText(NEXT_TEXT);

    act(() => {
      fireEvent.click(forwardButton);
    });

    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("does not call onChangeIndexCallback when click on back button and when in first page", () => {
    const onClickMock = jest.fn();
    const steps = renderComponent({
      onChangeActiveStep: onClickMock,
      activeStepIndex: 0
    });
    const backwardButton = steps.getByText(BACK_TEXT);

    act(() => {
      fireEvent.click(backwardButton);
    });

    expect(onClickMock.mock.calls.length).toBe(0);
  });

  it("does not call onChangeIndexCallback when click on next button when in last page", () => {
    const onClickMock = jest.fn();
    const steps = renderComponent({
      onChangeActiveStep: onClickMock,
      activeStepIndex: stepsContent.length - 1
    });
    const forwardButton = steps.getByText(NEXT_TEXT);

    act(() => {
      fireEvent.click(forwardButton);
    });

    expect(onClickMock.mock.calls.length).toBe(0);
  });
});
