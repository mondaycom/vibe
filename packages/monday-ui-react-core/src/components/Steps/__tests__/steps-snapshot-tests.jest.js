import React from "react";
import renderer from "react-test-renderer";
import Steps from "../Steps";

const stepsContent = [<div key="first">first</div>, <div key="second">second</div>];

describe("Steps", () => {
  describe("with numeric type renders correctly", () => {
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

    it("when hide navigations icons", () => {
      const tree = renderer
        .create(
          <Steps
            type={Steps.types.NUMBERS}
            steps={stepsContent}
            activeStepIndex={stepsContent.length - 1}
            areButtonsIconsHidden
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("when steps content is on top", () => {
      const tree = renderer
        .create(
          <Steps
            type={Steps.types.NUMBERS}
            steps={stepsContent}
            activeStepIndex={stepsContent.length - 1}
            isContentOnTop
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with gallery type renders correctly", () => {
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

    it("when hide navigations icons", () => {
      const tree = renderer
        .create(
          <Steps
            type={Steps.types.GALLERY}
            steps={stepsContent}
            activeStepIndex={stepsContent.length - 1}
            areButtonsIconsHidden
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("when steps content is on top", () => {
      const tree = renderer
        .create(
          <Steps
            type={Steps.types.GALLERY}
            steps={stepsContent}
            activeStepIndex={stepsContent.length - 1}
            isContentOnTop
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("when navigation buttons are hidden", () => {
      const tree = renderer
        .create(
          <Steps
            type={Steps.types.GALLERY}
            steps={stepsContent}
            activeStepIndex={stepsContent.length - 1}
            areNavigationButtonsHidden
          />
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
