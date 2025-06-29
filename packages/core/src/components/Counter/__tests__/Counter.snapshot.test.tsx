import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import Counter from "../Counter";

describe("Counter renders correctly", () => {
  it("with count below the limit", () => {
    const tree = renderer.create(<Counter count={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with count above limit", () => {
    const tree = renderer.create(<Counter count={1000} maxDigits={3} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with the prefix", () => {
    const tree = renderer.create(<Counter count={13} prefix="+" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with negative color", () => {
    const tree = renderer.create(<Counter color="negative" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with line kind", () => {
    const tree = renderer.create(<Counter kind="line" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with count above limit and max digits", () => {
    const tree = renderer.create(<Counter maxDigits={4} count={1050} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with small size", () => {
    const tree = renderer.create(<Counter size="small" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with ariaLabeledBy", () => {
    const tree = renderer.create(<Counter ariaLabeledBy="aria label" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<Counter className="className" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with counterClassName", () => {
    const tree = renderer.create(<Counter counterClassName="counterClassName" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
