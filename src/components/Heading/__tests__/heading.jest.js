import React from "react";
import renderer from "react-test-renderer";
import Heading from "../Heading";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Heading type={Heading.types.h1} />).toJSON();
  expect(tree).toMatchSnapshot();
});
