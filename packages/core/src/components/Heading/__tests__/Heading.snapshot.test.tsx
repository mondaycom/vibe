import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Heading from "../Heading";

describe("Text renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Heading>text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with type", () => {
    const tree = renderer.create(<Heading type="h2">text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with weight", () => {
    const tree = renderer.create(<Heading weight="bold">text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with color", () => {
    const tree = renderer.create(<Heading color="secondary">text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element", () => {
    const tree = renderer.create(<Heading element="p">text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with align", () => {
    const tree = renderer.create(<Heading align="center">text</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element as children", () => {
    const tree = renderer
      .create(
        <Heading>
          <div>text</div>
        </Heading>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
