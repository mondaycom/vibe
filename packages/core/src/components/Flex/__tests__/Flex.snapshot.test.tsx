import React from "react";
import renderer from "react-test-renderer";
import Flex from "../Flex";

describe("Flex renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Flex />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("with data-testid", () => {
    const tree = renderer.create(<Flex data-testid="test" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  describe("Horizontal display", () => {
    it("with children", () => {
      const tree = renderer
        .create(
          <Flex>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with align", () => {
      const tree = renderer
        .create(
          <Flex align="end">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with justify", () => {
      const tree = renderer
        .create(
          <Flex justify="space-between">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with align", () => {
      const tree = renderer
        .create(
          <Flex align="end">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with gap", () => {
      const tree = renderer
        .create(
          <Flex gap="large">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with wrap", () => {
      const tree = renderer
        .create(
          <Flex wrap>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with flex", () => {
      const tree = renderer
        .create(
          <Flex>
            <Flex flex={{ grow: 1, shrink: 0, basis: "auto" }}>1</Flex>
            <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>2</Flex>
            <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>3</Flex>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("Vertical display", () => {
    it("with children", () => {
      const tree = renderer
        .create(
          <Flex direction="column">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with justify", () => {
      const tree = renderer
        .create(
          <Flex direction="column" justify="space-between">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with align", () => {
      const tree = renderer
        .create(
          <Flex direction="column" align="end">
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with wrap", () => {
      const tree = renderer
        .create(
          <Flex direction="column" wrap>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with flex", () => {
      const tree = renderer
        .create(
          <Flex direction="column">
            <Flex flex={{ grow: 1, shrink: 0, basis: "auto" }}>1</Flex>
            <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>2</Flex>
            <Flex flex={{ grow: 0, shrink: 1, basis: "auto" }}>3</Flex>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
