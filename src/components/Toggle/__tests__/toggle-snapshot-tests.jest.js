import React from "react";
import renderer from "react-test-renderer";
import Toggle from "../Toggle";

describe("Toggle renders correctly", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Toggle />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selection defined by default selected (on) ", () => {
    const tree = renderer.create(<Toggle className="dummy-class-name" isDefaultSelected />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selection defined by default selected (off) ", () => {
    const tree = renderer.create(<Toggle className="dummy-class-name" isDefaultSelected={false} />).toJSON();
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
    const tree = renderer.create(<Toggle disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with not default onOverrideText", () => {
    const tree = renderer.create(<Toggle onOverrideText="TestOn" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with not default offOverrideText", () => {
    const tree = renderer.create(<Toggle offOverrideText="TestOff" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when labels are hidden", () => {
    const tree = renderer.create(<Toggle areLabelsHidden />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with aria controls", () => {
    const tree = renderer.create(<Toggle ariaControls="aria controls" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
