import React from "react";
import renderer from "react-test-renderer";
import Title from "../Title";

describe("Text renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with type", () => {
    const tree = renderer.create(<Title type="h2">text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with weight", () => {
    const tree = renderer.create(<Title weight="bold">text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with color", () => {
    const tree = renderer.create(<Title color="secondary">text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element", () => {
    const tree = renderer.create(<Title element="p">text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with align", () => {
    const tree = renderer.create(<Title align="center">text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element as children", () => {
    const tree = renderer
      .create(
        <Title>
          <div>text</div>
        </Title>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
