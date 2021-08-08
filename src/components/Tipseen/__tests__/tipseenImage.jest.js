import React from "react";
import renderer from "react-test-renderer";
import { TipseenWizard } from "../TipseenWizard";
import TipseenImage from "../TipseenImage";

jest.useFakeTimers();

describe("Tipseen image tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(
          <TipseenImage src="fake-tipseen-src" alt="alternative text" className="mock-class-name">
            <div />
          </TipseenImage>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<TipseenImage />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
