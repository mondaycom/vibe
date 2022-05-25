import React from "react";
import renderer from "react-test-renderer";
import Loader from "../Loader";
import styles from "./loader-snapshots.jest.module.scss";

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

    it("with custom size from class", () => {
      const tree = renderer.create(<Loader className={styles.mondayLoaderComponent} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with custom size from parent", () => {
      const tree = renderer
        .create(
          <div style={{ width: 100, height: 100 }}>
            <Loader />
          </div>
        )
        .toJSON();
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

    it("with custom color from parent", () => {
      const tree = renderer
        .create(
          <div style={{ color: "var(--color-dark-red)" }}>
            <Loader size={Loader.sizes.MEDIUM} />
          </div>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("with different types", () => {
    it("with CASUAL type", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} type={Loader.types.CASUAL} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with WITH_BACKGROUND type", () => {
      const tree = renderer.create(<Loader size={Loader.sizes.MEDIUM} type={Loader.types.WITH_BACKGROUND} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
