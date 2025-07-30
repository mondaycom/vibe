import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import { Upgrade } from "@vibe/icons";
import MultiStepIndicator from "../MultiStepIndicator";
import { Step } from "../MultiStep.types";

const exampleSteps: Step[] = [
  {
    status: "fulfilled",
    titleText: "Title",
    subtitleText: "Subtitle"
  },
  {
    status: "active",
    titleText: "Active",
    subtitleText: "Active Subtitle"
  },
  {
    status: "pending",
    titleText: "Pending",
    subtitleText: "Pending Subtitle"
  }
];

describe("MultiStepIndicator renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<MultiStepIndicator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with steps", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} />);
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} className="test" />);
    expect(tree).toMatchSnapshot();
  });

  it("with stepComponentClassName", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} stepComponentClassName="test" />);
    expect(tree).toMatchSnapshot();
  });

  it("with textPlacement vertical", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} textPlacement="vertical" />);
    expect(tree).toMatchSnapshot();
  });

  it("with dividerComponentClassName", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} dividerComponentClassName="test" />);
    expect(tree).toMatchSnapshot();
  });

  it("with isFulfilledStepDisplayNumber", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} isFulfilledStepDisplayNumber />);
    expect(tree).toMatchSnapshot();
  });

  it("with fulfilledStepIcon", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} fulfilledStepIcon={Upgrade} />);
    expect(tree).toMatchSnapshot();
  });

  it("with mode compact", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} size="compact" />);
    expect(tree).toMatchSnapshot();
  });

  it("with mode compact textPlacement vertical", () => {
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} size="compact" textPlacement="vertical" />);
    expect(tree).toMatchSnapshot();
  });
});
