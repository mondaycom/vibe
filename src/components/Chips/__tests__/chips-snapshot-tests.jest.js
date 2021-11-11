import React from "react";
import Chips from "../Chips";
import renderer from "react-test-renderer";
import { Calendar } from "../../Icon/Icons";

describe("Chips renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Chips />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with color", () => {
    const tree = renderer.create(<Chips color={Chips.colors.NEGATIVE} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it("renders correctly disabled chip", () => {
    const tree = renderer.create(<Chips disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly without close button", () => {
    const tree = renderer.create(<Chips readOnly={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with text", () => {
    const tree = renderer.create(<Chips label="text" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it.skip("renders correctly with right icon ", () => {
    const tree = renderer.create(<Chips rightIcon={Calendar} readOnly />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
