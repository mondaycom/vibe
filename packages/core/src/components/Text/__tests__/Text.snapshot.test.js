import React from "react";
import renderer from "react-test-renderer";
import Text from "../Text";

describe("Text renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with type", () => {
    const tree = renderer.create(<Text type="text1">text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with weight", () => {
    const tree = renderer.create(<Text weight="medium">text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with color", () => {
    const tree = renderer.create(<Text color="secondary">text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element", () => {
    const tree = renderer.create(<Text element="p">text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with align", () => {
    const tree = renderer.create(<Text align="center">text</Text>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with element as children", () => {
    const tree = renderer
      .create(
        <Text>
          <div>text</div>
        </Text>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
