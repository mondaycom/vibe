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
        <Badge type="counter" count={5}>
          Child
        </Badge>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders at different position", () => {
    const tree = renderer.create(<Badge anchor="bottom-start">Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with different color", () => {
    const tree = renderer.create(<Badge color="primary">Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders out of horizontal bounds", () => {
    const tree = renderer.create(<Badge alignment="outside">Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with margins from component's bounds", () => {
    const tree = renderer.create(<Badge alignment="circular">Child</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
