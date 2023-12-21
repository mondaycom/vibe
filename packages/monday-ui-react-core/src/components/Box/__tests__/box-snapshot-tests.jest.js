import React from "react";
import renderer from "react-test-renderer";
import Box from "../Box";

describe("Box renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Box></Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with children", () => {
    const tree = renderer.create(<Box>Child</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with border prop", () => {
    const tree = renderer.create(<Box border={Box.borders.DEFAULT} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderColor prop", () => {
    const tree = renderer.create(<Box borderColor={Box.borderColors.UI_BORDER_COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with rounded prop", () => {
    const tree = renderer.create(<Box rounded={Box.roundeds.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with shadow prop", () => {
    const tree = renderer.create(<Box shadow={Box.shadows.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with margin prop", () => {
    const tree = renderer.create(<Box margin={Box.margins.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginX prop", () => {
    const tree = renderer.create(<Box marginX={Box.marginXs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginY prop", () => {
    const tree = renderer.create(<Box marginY={Box.marginYs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginTop prop", () => {
    const tree = renderer.create(<Box marginTop={Box.marginTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginEnd prop", () => {
    const tree = renderer.create(<Box marginEnd={Box.marginEnds.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginStart prop", () => {
    const tree = renderer.create(<Box marginStart={Box.marginStarts.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with padding prop", () => {
    const tree = renderer.create(<Box padding={Box.paddings.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingX prop", () => {
    const tree = renderer.create(<Box paddingX={Box.paddingXs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingY prop", () => {
    const tree = renderer.create(<Box paddingY={Box.paddingYs.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingTop prop", () => {
    const tree = renderer.create(<Box paddingTop={Box.paddingTops.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingEnd prop", () => {
    const tree = renderer.create(<Box paddingEnd={Box.paddingEnds.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingBottom prop", () => {
    const tree = renderer.create(<Box paddingBottom={Box.paddingBottoms.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingStart prop", () => {
    const tree = renderer.create(<Box paddingStart={Box.paddingStarts.SMALL} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with backgronudColor prop", () => {
    const tree = renderer.create(<Box BackgronudColor={Box.backgroundColors.PRIMARY_BACKGROUND_COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text prop", () => {
    const tree = renderer.create(<Box textColor={Box.textColors.PRIMARY_TEXT_COLOR} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
