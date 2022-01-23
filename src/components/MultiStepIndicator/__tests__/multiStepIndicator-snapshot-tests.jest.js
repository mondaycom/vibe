import React from "react";
import renderer from "react-test-renderer";
import { Featured } from "../../Icon/Icons";
import MultiStepIndicator from "../MultiStepIndicator";

const exampleSteps = [
  {
    status: MultiStepIndicator.stepStatuses.FULFILLED,
    titleText: "Title",
    subtitleText: "Subtitle"
  },
  {
    status: MultiStepIndicator.stepStatuses.ACTIVE,
    titleText: "Active",
    subtitleText: "Active Subtitle"
  },
  {
    status: MultiStepIndicator.stepStatuses.PENDING,
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
    const tree = renderer.create(
      <MultiStepIndicator steps={exampleSteps} textPlacement={MultiStepIndicator.textPlacements.VERTICAL} />
    );
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
    const tree = renderer.create(<MultiStepIndicator steps={exampleSteps} fulfilledStepIcon={Featured} />);
    expect(tree).toMatchSnapshot();
  });
});
