import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Steps from "../Steps";
import renderer from "react-test-renderer";
import { NEXT_DESCRIPTION, BACK_DESCRIPTION } from "../StepsConstants";

jest.useFakeTimers();
const stepsContent = [<div data-testid="first-step">first</div>, <div data-testid="second-step">second</div>];
const renderComponent = ({ ...props }) => {
  return render(<Steps steps={stepsContent} {...props} />);
};
describe("Steps tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Steps />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    describe("renders correctly with numbers view", () => {
      it("with regular props", () => {
        const tree = renderer.create(<Steps type={Steps.types.NUMBERS} steps={stepsContent} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing first step", () => {
        const tree = renderer
          .create(<Steps type={Steps.types.NUMBERS} steps={stepsContent} activeStepIndex={0} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing last step", () => {
        const tree = renderer
          .create(<Steps type={Steps.types.NUMBERS} steps={stepsContent} activeStepIndex={stepsContent.length - 1} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe("renders correctly with gallery view", () => {
      it("with regular props", () => {
        const tree = renderer.create(<Steps type={Steps.types.GALLERY} steps={stepsContent} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing first step", () => {
        const tree = renderer
          .create(<Steps type={Steps.types.GALLERY} steps={stepsContent} activeStepIndex={0} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing last step", () => {
        const tree = renderer.create(
          <Steps type={Steps.types.GALLERY} steps={stepsContent} activeStepIndex={stepsContent.length - 1} />
        );
        expect(tree).toMatchSnapshot();
      });
    });
  });

  describe("Integration Tests", () => {
    afterEach(() => {
      cleanup();
    });

    it("call onChangeIndexCallback when click on go back button and it does not disable", () => {
      const onClickMock = jest.fn();
      const steps = renderComponent({
        onChangeActiveStep: onClickMock,
        activeStepIndex: stepsContent.length - 1
      });
      const backwardButton = steps.getByText(BACK_DESCRIPTION);

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
      const forwardButton = steps.getByText(NEXT_DESCRIPTION);

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
      const backwardButton = steps.getByText(BACK_DESCRIPTION);

      act(() => {
        fireEvent.click(backwardButton);
      });

      console.log(onClickMock, onClickMock.mock);

      expect(onClickMock.mock.calls.length).toBe(0);
    });
    it("does not call onChangeIndexCallback when click on next button when in last page", () => {
      const onClickMock = jest.fn();
      const steps = renderComponent({
        onChangeActiveStep: onClickMock,
        activeStepIndex: stepsContent.length - 1
      });
      const forwardButton = steps.getByText(NEXT_DESCRIPTION);

      act(() => {
        fireEvent.click(forwardButton);
      });

      expect(onClickMock.mock.calls.length).toBe(0);
    });
  });
});
