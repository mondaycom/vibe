import React from "react";
import renderer from "react-test-renderer";
import { TipseenWizard } from "../TipseenWizard";

const steps = [
  <div>Popover message will appear here loremipsum dolor samet…</div>,
  <div>Popover message will appear here loremipsum dolor samet…</div>,
  <div>Popover message will appear here loremipsum dolor samet…</div>
];

jest.useFakeTimers();
const renderComponent = ({ ...props }) => {
  return render(
    <TipseenWizard steps={steps} {...props}>
      <div />
    </TipseenWizard>
  );
};

describe("Tipseen content tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TipseenWizard title="title" steps={steps} className="mock-class-name">
            <div />
          </TipseenWizard>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<TipseenWizard />).toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly without title", () => {
      const tree = renderer
        .create(
          <TipseenWizard steps={steps}>
            <div />
          </TipseenWizard>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
