import React from "react";
import renderer from "react-test-renderer";
import Tooltip from "../Tooltip";

describe("Tooltip renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Tooltip shouldShowOnMount />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with end arrowPosition", () => {
    const tree = renderer.create(<Tooltip shouldShowOnMount arrowPosition="end" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with theme", () => {
    const tree = renderer.create(<Tooltip shouldShowOnMount theme={Tooltip.themes.Error} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with position", () => {
    const tree = renderer.create(<Tooltip shouldShowOnMount position={Tooltip.positions.LEFT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with justify", () => {
    const tree = renderer.create(<Tooltip shouldShowOnMount justify={Tooltip.justifyTypes.END} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with withoutDialog", () => {
    const tree = renderer.create(<Tooltip withoutDialog />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("without arrow", () => {
    const tree = renderer.create(<Tooltip tip={false} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with y", () => {
    const tree = renderer.create(<Tooltip />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with y", () => {
    const tree = renderer.create(<Tooltip />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});