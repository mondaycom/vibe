import React from "react";
import renderer from "react-test-renderer";
import Flex from "../Flex";

describe("Flex renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<Flex />).toJSON();
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
          <Flex align={Flex.align.END}>
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
          <Flex justify={Flex.justify.SPACE_BETWEEN}>
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
          <Flex align={Flex.align.END}>
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
          <Flex gap={Flex.gaps.LARGE}>
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
  });
  describe("Vertical display", () => {
    it("with children", () => {
      const tree = renderer
        .create(
          <Flex direction={Flex.directions.COLUMN}>
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
          <Flex direction={Flex.directions.COLUMN} justify={Flex.justify.SPACE_BETWEEN}>
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
          <Flex direction={Flex.directions.COLUMN} align={Flex.align.END}>
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
          <Flex direction={Flex.directions.COLUMN} wrap>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
