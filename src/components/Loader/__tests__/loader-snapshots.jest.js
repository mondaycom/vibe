import React from "react";
import renderer from "react-test-renderer";
import Loader from "../Loader";

describe("Loader renders correctly", () => {
  it("with custom class name", () => {
    const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} className="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("with size variants", () => {
    it("with XS size", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.XS} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with SMALL size", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.SMALL} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with MEDIUM size", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with LARGE size", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.LARGE} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with custom size as number", () => {
      const tree = renderer.create(<Loader size={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with color variants", () => {
    it("with PRIMARY color", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} color={Loader.colors.PRIMARY} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with ON_PRIMARY color", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} color={Loader.colors.ON_PRIMARY} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with SECONDARY color", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} color={Loader.colors.SECONDARY} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with DARK color", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} color={Loader.colors.DARK} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with visual variants", () => {
    it("with background", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} hasBackground />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
