import React from "react";
import renderer from "react-test-renderer";
import Badge from "../Badge";
import Indicator from "../../Indicator/Indicator";
import { IndicatorColor } from "../../Indicator/IndicatorConstants";
import Counter from "../../Counter/Counter";

describe("Badge", () => {
  it("renders with no children and props", () => {
    const tree = renderer.create(<Badge />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with different children", () => {
    const tree = renderer.create(<Badge>Other Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with custom Indicator", () => {
    const tree = renderer
      .create(
        <Badge badgeComponent={Indicator} badgeComponentProps={{ indicatorColor: IndicatorColor.PRIMARY }}>
          Child
        </Badge>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with Counter", () => {
    const tree = renderer
      .create(
        <Badge badgeComponent={Counter} badgeComponentProps={{ count: 5 }}>
          Child
        </Badge>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders at different position", () => {
    const tree = renderer
      .create(<Badge position={{ vertical: Badge.directions.BOTTOM, horizontal: Badge.directions.LEFT }}>Child</Badge>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with gap and circular", () => {
    const tree = renderer
      .create(
        <Badge gap circular>
          Child
        </Badge>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("does not render when show prop is false", () => {
    const tree = renderer.create(<Badge show={false}>Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
