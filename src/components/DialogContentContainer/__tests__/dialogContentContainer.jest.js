import React from "react";
import renderer from "react-test-renderer";
import DialogContentContainer from "../DialogContentContainer";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<DialogContentContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
