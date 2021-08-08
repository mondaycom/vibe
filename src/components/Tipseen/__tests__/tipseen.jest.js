import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Tipseen from "../tipseen";
import renderer from "react-test-renderer";
import { TIPSEEN_CLOSE_BUTTON_TEST_ID } from "../TipseenConstants";

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
      const tipseen = renderComponent({
        onClose: onClickMock
      });
      const closeButton = tipseen.getByTestId(TIPSEEN_CLOSE_BUTTON_TEST_ID);

      act(() => {
        fireEvent.click(closeButton);
      });
      expect(onClickMock.mock.calls.length).toBe(1);
    });
  });
});
