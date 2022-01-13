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
    it("with horizontal position", () => {
      const tree = renderer
        .create(
          <Flex horizontalPosition={Flex.horizontalPositions.END}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with horizontal spacing", () => {
      const tree = renderer
        .create(
          <Flex horizontalSpacingSize={Flex.horizontalSpacingSizes.LARGE}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with vertical position", () => {
      const tree = renderer
        .create(
          <Flex verticalPosition={Flex.verticalPositions.END}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with vertical spacing", () => {
      const tree = renderer
        .create(
          <Flex verticalSpacingSize={Flex.verticalSpacingSizes.LARGE}>
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
          <Flex vertical>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with horizontal position", () => {
      const tree = renderer
        .create(
          <Flex vertical horizontalPosition={Flex.horizontalPositions.END}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with horizontal spacing", () => {
      const tree = renderer
        .create(
          <Flex vertical horizontalSpacingSize={Flex.horizontalSpacingSizes.LARGE}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with vertical position", () => {
      const tree = renderer
        .create(
          <Flex vertical verticalPosition={Flex.verticalPositions.END}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </Flex>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
    it("with vertical spacing", () => {
      const tree = renderer
        .create(
          <Flex vertical verticalSpacingSize={Flex.verticalSpacingSizes.LARGE}>
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
          <Flex vertical wrap>
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
