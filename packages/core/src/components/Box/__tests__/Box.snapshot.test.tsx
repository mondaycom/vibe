import React from "react";
import renderer from "react-test-renderer";
import Box from "../Box";

jest.mock("../Box.module.scss", () => ({
  box: "box",
  border: "border",
  borderColorUiBorderColor: "uiBorderColor",
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
    const tree = renderer.create(<Box border />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with borderColor prop", () => {
    const tree = renderer.create(<Box borderColor="uiBorderColor" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with rounded prop", () => {
    const tree = renderer.create(<Box rounded="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with shadow prop", () => {
    const tree = renderer.create(<Box shadow="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with margin prop", () => {
    const tree = renderer.create(<Box margin="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginX prop", () => {
    const tree = renderer.create(<Box marginX="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginY prop", () => {
    const tree = renderer.create(<Box marginY="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginTop prop", () => {
    const tree = renderer.create(<Box marginTop="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginEnd prop", () => {
    const tree = renderer.create(<Box marginEnd="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with marginStart prop", () => {
    const tree = renderer.create(<Box marginStart="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with padding prop", () => {
    const tree = renderer.create(<Box padding="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingX prop", () => {
    const tree = renderer.create(<Box paddingX="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingY prop", () => {
    const tree = renderer.create(<Box paddingY="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingTop prop", () => {
    const tree = renderer.create(<Box paddingTop="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingEnd prop", () => {
    const tree = renderer.create(<Box paddingEnd="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingBottom prop", () => {
    const tree = renderer.create(<Box paddingBottom="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with paddingStart prop", () => {
    const tree = renderer.create(<Box paddingStart="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with backgroundColor prop", () => {
    const tree = renderer.create(<Box backgroundColor="primaryBackgroundColor" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text prop", () => {
    const tree = renderer.create(<Box textColor="primaryTextColor" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
