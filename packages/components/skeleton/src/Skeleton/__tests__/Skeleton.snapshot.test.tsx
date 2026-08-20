import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Skeleton from "../Skeleton";

describe("Skeleton renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Skeleton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("renders correctly when rectangle", () => {
    it("with empty props", () => {
      const tree = renderer.create(<Skeleton type="rectangle" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height", () => {
      const tree = renderer.create(<Skeleton type="rectangle" height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed width", () => {
      const tree = renderer.create(<Skeleton type="rectangle" width={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height and width", () => {
      const tree = renderer.create(<Skeleton type="rectangle" width={100} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("renders correctly when circle", () => {
    it("with empty props", () => {
      const tree = renderer.create(<Skeleton type="circle" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height", () => {
      const tree = renderer.create(<Skeleton type="circle" height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed width", () => {
      const tree = renderer.create(<Skeleton type="circle" width={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height and width", () => {
      const tree = renderer.create(<Skeleton type="circle" width={100} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("renders correctly when text", () => {
    it("with empty props", () => {
      const tree = renderer.create(<Skeleton type="text" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height", () => {
      const tree = renderer.create(<Skeleton type="text" height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed width", () => {
      const tree = renderer.create(<Skeleton type="text" width={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height and width", () => {
      const tree = renderer.create(<Skeleton type="text" width={100} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H1 size", () => {
      const tree = renderer.create(<Skeleton type="text" size="h1" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H2 size", () => {
      const tree = renderer.create(<Skeleton type="text" size="h2" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H3 size", () => {
      const tree = renderer.create(<Skeleton type="text" size="h3" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H4 size", () => {
      const tree = renderer.create(<Skeleton type="text" size="h4" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H5 size", () => {
      const tree = renderer.create(<Skeleton type="text" size="h5" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with CUSTOM size", () => {
      const tree = renderer.create(<Skeleton type="text" size="custom" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
