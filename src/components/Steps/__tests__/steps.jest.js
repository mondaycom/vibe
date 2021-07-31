import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Steps from "../Steps";
import renderer from "react-test-renderer";
import { sinon } from "../../../test/test-helpers";
import { BACK_COMMAND_TEST_ID, NEXT_COMMAND_TEST_ID } from "../StepsConstants";

jest.useFakeTimers();
const steps = [<div data-testid="first-step">first</div>, <div data-testid="second-step">second</div>];
const renderComponent = ({ ...props }) => {
  return render(<Steps steps={steps} {...props}></Steps>);
};
describe("Steps tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Steps />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    describe("renders correctly with numbers view", () => {
      it("with regular props", () => {
        const tree = renderer.create(<Steps type={Steps.types.NUMBERS} steps={steps} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing first step", () => {
        const tree = renderer.create(<Steps type={Steps.types.NUMBERS} steps={steps} activeStepIndex={0} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing last step", () => {
        const tree = renderer
          .create(<Steps type={Steps.types.NUMBERS} steps={steps} activeStepIndex={steps.length - 1} />)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
    });
    describe("renders correctly with gallery view", () => {
      it("with regular props", () => {
        const tree = renderer.create(<Steps type={Steps.types.GALLERY} steps={steps} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing first step", () => {
        const tree = renderer.create(<Steps type={Steps.types.GALLERY} steps={steps} activeStepIndex={0} />).toJSON();
        expect(tree).toMatchSnapshot();
      });
      it("when viewing last step", () => {
        const tree = renderer.create(
          <Steps type={Steps.types.GALLERY} steps={steps} activeStepIndex={steps.length - 1} />
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
        activeStepIndex: steps.length - 1
      });
      const backwardButton = steps.getByTestId(BACK_COMMAND_TEST_ID);

      act(() => {
        fireEvent.click(backwardButton);
      });

      expect(onClickMock.mock.calls.length).toBe(1);
    });
    it("call onChangeIndexCallback when click on go back button and it does not disable", () => {
      const onClickMock = jest.fn();
      const steps = renderComponent({
        onChangeActiveStep: onClickMock,
        activeStepIndex: 0
      });
      const forwardButton = steps.getByTestId(NEXT_COMMAND_TEST_ID);

      act(() => {
        fireEvent.click(forwardButton);
      });

      expect(onClickMock.mock.calls.length).toBe(1);
    });
    it("does not call onChangeIndexCallback when click on go back button and it disable", () => {
      const onClickMock = jest.fn();
      const steps = renderComponent({
        onChangeActiveStep: onClickMock,
        activeStepIndex: 0
      });
      const backwardButton = steps.getByTestId(BACK_COMMAND_TEST_ID);

      act(() => {
        fireEvent.click(backwardButton);
      });

      expect(onClickMock.mock.calls.length).toBe(0);
    });
    it("does not call onChangeIndexCallback when click on go back button and it disable", () => {
      const onClickMock = jest.fn();
      const steps = renderComponent({
        onChangeActiveStep: onClickMock,
        activeStepIndex: steps.length - 1
      });
      const forwardButton = steps.getByTestId(NEXT_COMMAND_TEST_ID);

      act(() => {
        fireEvent.click(forwardButton);
      });

      expect(onClickMock.mock.calls.length).toBe(0);
    });
  });
});
