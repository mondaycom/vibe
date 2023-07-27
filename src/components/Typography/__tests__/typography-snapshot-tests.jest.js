import React from "react";
import renderer from "react-test-renderer";
import Typography from "../Typography";

describe("Text renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Typography />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with color", () => {
    const tree = renderer.create(<Typography color="secondary">text</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element", () => {
    const tree = renderer.create(<Typography element="p">text</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with align", () => {
    const tree = renderer.create(<Typography align="center">text</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with html attribute", () => {
    const tree = renderer.create(<Typography role="banner">text</Typography>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element as children", () => {
    const tree = renderer
      .create(
        <Typography>
          <div>text</div>
        </Typography>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
