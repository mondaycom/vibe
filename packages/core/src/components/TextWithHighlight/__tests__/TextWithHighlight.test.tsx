import React from "react";
import renderer from "react-test-renderer";
import TextWithHighlight from "../TextWithHighlight";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<TextWithHighlight />).toJSON();
  expect(tree).toMatchSnapshot();
});
