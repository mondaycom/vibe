import React from "react";
import "../Label";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Label />).toJSON();
  expect(tree).toMatchSnapshot();
});
