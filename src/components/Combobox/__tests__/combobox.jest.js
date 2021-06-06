import React from "react";
import renderer from "react-test-renderer";
import Combobox from "../Combobox";

it("renders correctly with empty props", () => {
  const tree = renderer.create(<Combobox />).toJSON();
  expect(tree).toMatchSnapshot();
});
