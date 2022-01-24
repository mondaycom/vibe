import React from "react";
import renderer from "react-test-renderer";
import Tab from "../Tab";
import Email from "../../../Icon/Icons/components/Email";
import Icon from "../../../Icon/Icon";

describe("Tab renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Tab />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled", () => {
    const tree = renderer.create(<Tab disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when active", () => {
    const tree = renderer.create(<Tab active />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when focus", () => {
    const tree = renderer.create(<Tab focus />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when focus and active", () => {
    const tree = renderer.create(<Tab focus active />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon on left", () => {
    const tree = renderer
      .create(
        <Tab icon={Email} iconType={Icon.type.SVG} iconSide="left">
          Tab
        </Tab>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon on right", () => {
    const tree = renderer
      .create(
        <Tab icon={Email} iconType={Icon.type.SVG} iconSide="right">
          Tab
        </Tab>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<Tab value={0}>Tab</Tab>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<Tab id="test">Tab</Tab>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Tab className="test">Tab</Tab>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
