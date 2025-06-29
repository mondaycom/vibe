import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import LinearProgressBar from "../LinearProgressBar";

const multiValues = [
  { value: 25, color: "red" },
  { value: 75, color: "yellow" },
  { value: 100, color: "green" }
];

describe("LinearProgressBar renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<LinearProgressBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with value", () => {
    const tree = renderer.create(<LinearProgressBar value={20} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with size", () => {
    const tree = renderer.create(<LinearProgressBar value={20} size="large" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with barStyle", () => {
    const tree = renderer.create(<LinearProgressBar value={20} barStyle="positive" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with min", () => {
    const tree = renderer.create(<LinearProgressBar value={20} min={10} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with indicateProgress", () => {
    const tree = renderer.create(<LinearProgressBar value={20} indicateProgress />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with valueSecondary", () => {
    const tree = renderer.create(<LinearProgressBar value={20} valueSecondary={40} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with multi and multiValues", () => {
    const tree = renderer.create(<LinearProgressBar value={20} multi multiValues={multiValues} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with full width progress bar", () => {
    const tree = renderer.create(<LinearProgressBar value={20} fullWidth />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
