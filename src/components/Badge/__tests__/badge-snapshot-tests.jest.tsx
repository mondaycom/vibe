import React from "react";
import renderer from "react-test-renderer";
import Badge from "../Badge";
import Indicator from "../Indicator/Indicator";

describe("Badge", () => {
  it("renders with no props with default badge Indicator", () => {
    const tree = renderer.create(<Badge>Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with Counter and counter props", () => {
    const tree = renderer
      .create(
        <Badge type={Badge.types.COUNTER} count={5}>
          Child
        </Badge>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders at different position", () => {
    const tree = renderer.create(<Badge anchor={Badge.anchors.BOTTOM_START}>Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with different color", () => {
    const tree = renderer.create(<Badge color={Indicator.colors.PRIMARY}>Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders out of horizontal bounds", () => {
    const tree = renderer.create(<Badge alignment={Badge.alignments.OUTSIDE}>Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with margins from component's bounds", () => {
    const tree = renderer.create(<Badge alignment={Badge.alignments.CIRCULAR}>Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
