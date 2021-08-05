import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Tipseen from "../tipseen";
import renderer from "react-test-renderer";

jest.useFakeTimers();
const renderComponent = ({ ...props }) => {
  return render(
    <Tipseen {...props}>
      <div />
    </Tipseen>
  );
};
describe("Tipseen tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer
        .create(
          <Tipseen>
            <div />
          </Tipseen>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with title", () => {
      const tree = renderer.create(<Tipseen title="mock title" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without close button", () => {
      const tree = renderer
        .create(
          <Tipseen isCloseButtonHidden>
            <div />
          </Tipseen>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without title", () => {
      const tree = renderer.create(<Tipseen />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("Integration Tests", () => {
    afterEach(() => {
      cleanup();
    });

    it("call onClose function when click on close button", () => {
      const onClickMock = jest.fn();
      const steps = renderComponent({
        onChangeActiveStep: onClickMock,
        activeStepIndex: stepsContent.length - 1
      });
      const backwardButton = steps.getByTestId(BACK_COMMAND_TEST_ID);

      act(() => {
        fireEvent.click(backwardButton);
      });
      expect(onClickMock.mock.calls.length).toBe(1);
    });
  });
});
