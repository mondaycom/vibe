import React from "react";
import renderer from "react-test-renderer";
import Title from "../Title";

describe("Text renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Title />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with type", () => {
    const tree = renderer.create(<Title size={Title.types.H2}>text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with weight", () => {
    const tree = renderer.create(<Title weight={Title.weights.BOLD}>text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with color", () => {
    const tree = renderer.create(<Title color={Title.colors.SECONDARY}>text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element", () => {
    const tree = renderer.create(<Title element="p">text</Title>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with align", () => {
    const tree = renderer.create(<Title align={Title.align.CENTER}>text</Title>).toJSON();
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
