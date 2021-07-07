import React from "react";
import renderer from "react-test-renderer";
import Avatar from "../Avatar.scss";

const IMG_SRC =
  "https://files.monday.com/use1/photos/16447897/small/16447897-Hadas_Farhi_photo_2020_10_04_10_14_06.png?1601806446";

describe("AttentionBox Tests", () => {
  describe("Snapshot Tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Avatar />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with image and text", () => {
      const tree = renderer.create(<Avatar img={IMG_SRC} text="Name" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with image", () => {
      const tree = renderer.create(<Avatar img={IMG_SRC} />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with not valid image", () => {
      const tree = renderer.create(<Avatar img="not valid src" />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly with text", () => {
      const tree = renderer.create(<Avatar />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly square avatar", () => {
      const tree = renderer.create(<Avatar isSquare />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly accessibility props", () => {
      const tree = renderer.create(<Avatar tabIndex={-1} ariaHidden />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
