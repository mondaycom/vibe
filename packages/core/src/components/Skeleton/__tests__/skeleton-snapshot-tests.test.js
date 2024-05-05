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
      const tree = renderer.create(<Skeleton type={Skeleton.types.RECTANGLE} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.RECTANGLE} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed width", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.RECTANGLE} width={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height and width", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.RECTANGLE} width={100} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("renders correctly when circle", () => {
    it("with empty props", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.CIRCLE} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.CIRCLE} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed width", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.CIRCLE} width={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height and width", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.CIRCLE} width={100} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("renders correctly when text", () => {
    it("with empty props", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed width", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} width={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with fixed height and width", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} width={100} height={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H1 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H1 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H1 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H1} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H2 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H2} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H3 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H3} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H4 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H4} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with H5 size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.types.H5} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with CUSTOM size", () => {
      const tree = renderer.create(<Skeleton type={Skeleton.types.TEXT} size={Skeleton.sizes.CUSTOM} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
