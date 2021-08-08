import React from "react";
import { fireEvent, render, cleanup } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import TipseenContent from "../TipseenContent";
import renderer from "react-test-renderer";
import Tipseen from "../Tipseen";

jest.useFakeTimers();
const renderComponent = ({ ...props }) => {
  return render(
    <Tipseen {...props}>
      <div />
    </Tipseen>
  );
};

describe("Tipseen content tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<TipseenContent title="title" content="content" isDismissHidden={false} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<TipseenContent />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without title", () => {
      const tree = renderer.create(<TipseenContent content="content" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without dismiss button", () => {
      const tree = renderer.create(<TipseenContent content="content" isDismissHidden />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without submit button", () => {
      const tree = renderer.create(<TipseenContent content="content" isSubmitHidden />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
