import React from "react";
import renderer from "react-test-renderer";
import AttentionBox from "../AttentionBox";

describe("AttentionBox Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly", () => {
      const tree = renderer
        .create(<AttentionBox componentClassName="dummy-class-name" title="Title" text="Text" />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with empty props", () => {
      const tree = renderer.create(<AttentionBox />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
