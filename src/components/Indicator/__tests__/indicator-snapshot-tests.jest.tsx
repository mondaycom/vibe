import React from "react";
import renderer from "react-test-renderer";
import Indicator from "../Indicator";
import { IndicatorColor } from "../IndicatorConstants";

describe("Indicator", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Indicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a custom indicatorColor", () => {
    const tree = renderer.create(<Indicator indicatorColor={IndicatorColor.PRIMARY} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with an ariaLabel", () => {
    const tree = renderer.create(<Indicator ariaLabel="test arialabel" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
