import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import IconButton from "../IconButton";
import { SIZES } from "@vibe/shared";

describe("IconButton renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<IconButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer.create(<IconButton id="icon-button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with", () => {
    const tree = renderer.create(<IconButton className="class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with disabled", () => {
    const tree = renderer.create(<IconButton disabled />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with size - xs`, () => {
    const tree = renderer.create(<IconButton size="xs" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`with size - medium`, () => {
    const tree = renderer.create(<IconButton size="medium" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  Object.values(SIZES).forEach(size => {
    it(`with size - ${size}`, () => {
      const tree = renderer.create(<IconButton size={size} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("with aria label", () => {
    const tree = renderer.create(<IconButton ariaLabel="My aria label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with active", () => {
    const tree = renderer.create(<IconButton active />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
