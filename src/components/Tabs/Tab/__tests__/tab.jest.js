import React from "react";
import renderer from "react-test-renderer";
import Tab from "../Tab";

describe("<Tab />", () => {
  describe("Snapshot tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(<Tab/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly disabled tab", () => {
      const tree = renderer.create(<Tab disabled />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly active tab", () => {
      const tree = renderer.create(<Tab active />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly focus tab", () => {
      const tree = renderer.create(<Tab focus />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly focus and active tab", () => {
      const tree = renderer.create(<Tab focus active />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
