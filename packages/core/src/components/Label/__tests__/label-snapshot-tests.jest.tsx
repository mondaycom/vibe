import React from "react";
import renderer from "react-test-renderer";
import Label from "../Label";

describe("Label renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Label />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("fill", () => {
    it("primary", () => {
      const tree = renderer.create(<Label text="Test" kind="fill" color="primary" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("dark", () => {
      const tree = renderer.create(<Label text="Test" kind="fill" color="dark" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("positive", () => {
      const tree = renderer.create(<Label text="Test" kind="fill" color="positive" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("negative", () => {
      const tree = renderer.create(<Label text="Test" kind="fill" color="negative" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("line", () => {
    it("primary", () => {
      const tree = renderer.create(<Label text="Test" kind="line" color="primary" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("dark", () => {
      const tree = renderer.create(<Label text="Test" kind="line" color="dark" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("positive", () => {
      const tree = renderer.create(<Label text="Test" kind="line" color="positive" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("negative", () => {
      const tree = renderer.create(<Label text="Test" kind="line" color="negative" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("without animation", () => {
      const tree = renderer.create(<Label text="Test" isAnimationDisabled />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with leg", () => {
      const tree = renderer.create(<Label text="Test" isLegIncluded />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with wrapperClassName", () => {
      const tree = renderer.create(<Label wrapperClassName="test" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
