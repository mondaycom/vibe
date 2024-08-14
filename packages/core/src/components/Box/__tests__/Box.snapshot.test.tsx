import React from "react";
import renderer from "react-test-renderer";
import Box from "../Box";

jest.mock("../Box.module.scss", () => ({
  box: "box",
  border: "border",
  borderColorUiBorderColor: "borderColorUiBorderColor",
  roundedSmall: "roundedSmall",
  shadowSmall: "shadowSmall",
  mSmall: "mSmall",
  mxSmall: "mxSmall",
  mySmall: "mySmall",
  mtSmall: "mtSmall",
  meSmall: "meSmall",
  msSmall: "msSmall",
  pSmall: "pSmall",
  pxSmall: "pxSmall",
  pySmall: "pySmall",
  ptSmall: "ptSmall",
  peSmall: "peSmall",
  pbSmall: "pbSmall",
  psSmall: "psSmall",
  bgPrimaryBackgroundColor: "bgPrimaryBackgroundColor",
  textPrimaryTextColor: "textPrimaryTextColor"
}));

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
    const tree = renderer.create(<Box border="border" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderColor prop", () => {
    const tree = renderer.create(<Box borderColor="borderColorUiBorderColor" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with rounded prop", () => {
    const tree = renderer.create(<Box rounded="roundedSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with shadow prop", () => {
    const tree = renderer.create(<Box shadow="shadowSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with margin prop", () => {
    const tree = renderer.create(<Box margin="mSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginX prop", () => {
    const tree = renderer.create(<Box marginX="mxSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginY prop", () => {
    const tree = renderer.create(<Box marginY="mySmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginTop prop", () => {
    const tree = renderer.create(<Box marginTop="mtSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginEnd prop", () => {
    const tree = renderer.create(<Box marginEnd="meSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginStart prop", () => {
    const tree = renderer.create(<Box marginStart="msSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with padding prop", () => {
    const tree = renderer.create(<Box padding="pSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingX prop", () => {
    const tree = renderer.create(<Box paddingX="pxSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingY prop", () => {
    const tree = renderer.create(<Box paddingY="pySmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingTop prop", () => {
    const tree = renderer.create(<Box paddingTop="ptSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingEnd prop", () => {
    const tree = renderer.create(<Box paddingEnd="peSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingBottom prop", () => {
    const tree = renderer.create(<Box paddingBottom="pbSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingStart prop", () => {
    const tree = renderer.create(<Box paddingStart="psSmall" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with backgroundColor prop", () => {
    const tree = renderer.create(<Box backgroundColor="bgPrimaryBackgroundColor" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text prop", () => {
    const tree = renderer.create(<Box textColor="textPrimaryTextColor" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
