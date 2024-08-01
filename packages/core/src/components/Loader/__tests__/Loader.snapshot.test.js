import React from "react";
import renderer from "react-test-renderer";
import Loader from "../Loader";

describe("Loader renders correctly", () => {
  it("with custom class name", () => {
    const tree = renderer.create(<Loader size="medium" className="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with custom class name wrapper", () => {
    const tree = renderer.create(<Loader size="medium" wrapperClassName="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe("with size variants", () => {
    it("with XS size", () => {
      const tree = renderer.create(<Loader size="xs" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with SMALL size", () => {
      const tree = renderer.create(<Loader size="small" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with MEDIUM size", () => {
      const tree = renderer.create(<Loader size="medium" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with LARGE size", () => {
      const tree = renderer.create(<Loader size="large" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with custom size as number", () => {
      const tree = renderer.create(<Loader size={100} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with color variants", () => {
    it("with PRIMARY color", () => {
      const tree = renderer.create(<Loader size="medium" color="primary" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with ON_PRIMARY color", () => {
      const tree = renderer.create(<Loader size="medium" color="dark" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with SECONDARY color", () => {
      const tree = renderer.create(<Loader size="medium" color="secondary" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with DARK color", () => {
      const tree = renderer.create(<Loader size="medium" color="dark" />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with visual variants", () => {
    it("with background", () => {
      const tree = renderer.create(<Loader size="medium" hasBackground />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
