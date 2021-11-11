import React from "react";
import renderer from "react-test-renderer";
import Toggle from "../Toggle";


describe("Toggle renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selection defined by default selected (on) ", () => {
    const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isDefaultSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selection defined by default selected (off) ", () => {
    const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isDefaultSelected={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selection defined by isSelected (on)", () => {
    const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selection defined by isSelected (off)", () => {
    const tree = renderer.create(<Toggle componentClassName="dummy-class-name" isSelected={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when disabled", () => {
    const tree = renderer.create(<Toggle isDisabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
