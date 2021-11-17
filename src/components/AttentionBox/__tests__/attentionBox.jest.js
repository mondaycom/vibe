import React from "react";
import renderer from "react-test-renderer";
import AttentionBox from "../AttentionBox";

describe("AttentionBox Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<AttentionBox className="dummy-class-name" title="Title" text="Text" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty props", () => {
      const tree = renderer.create(<AttentionBox />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty title prop", () => {
      const tree = renderer.create(<AttentionBox className="dummy-class-name" title="" text="Text" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with undefined title prop", () => {
      const tree = renderer.create(<AttentionBox className="dummy-class-name" text="Text" />);
    });

    it("renders correctly with no icon", () => {
      const tree = renderer
        .create(<AttentionBox className="dummy-class-name-no-icon" title="Title" text="Text" withoutIcon />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
