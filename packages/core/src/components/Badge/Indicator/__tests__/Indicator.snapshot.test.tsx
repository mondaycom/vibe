import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Indicator from "../Indicator";

describe("Indicator", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Indicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a custom color", () => {
    const tree = renderer.create(<Indicator color="primary" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
