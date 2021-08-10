import React from "react";
import renderer from "react-test-renderer";
import MultiVerticalStepIndicator from "../MultiVerticalStepIndicator";

describe("MultiVerticalStepIndicator", () => {
  describe("Render tests", () => {
    it("Renders correctly with empty props", () => {
      const tree = renderer.create(<MultiVerticalStepIndicator />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Renders correctly with non-default props", () => {
      const exampleSteps = [
        {
          status: MultiVerticalStepIndicator.stepStatuses.FULFILLED,
          titleText: "Title",
          subtitleText: "Subtitle"
        },
        {
          status: MultiVerticalStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active",
          subtitleText: "Active Subtitle"
        },
        {
          status: MultiVerticalStepIndicator.stepStatuses.PENDING,
          titleText: "Pending",
          subtitleText: "Pending Subtitle"
        }
      ];
      const tree = renderer.create(
        <MultiVerticalStepIndicator type={MultiVerticalStepIndicator.types.SUCCESS} steps={exampleSteps} />
      );
      expect(tree).toMatchSnapshot();
    });

    it("Render correctly with clickable steps", () => {
      const exampleSteps = [
        {
          status: MultiVerticalStepIndicator.stepStatuses.FULFILLED,
          titleText: "Title",
          subtitleText: "Subtitle"
        },
        {
          status: MultiVerticalStepIndicator.stepStatuses.ACTIVE,
          titleText: "Active",
          subtitleText: "Active Subtitle"
        },
        {
          status: MultiVerticalStepIndicator.stepStatuses.PENDING,
          titleText: "Pending",
          subtitleText: "Pending Subtitle"
        }
      ];

      const callback = () => {
        console.log("test");
      };

      const tree = renderer.create(
        <MultiVerticalStepIndicator
          type={MultiVerticalStepIndicator.types.SUCCESS}
          steps={exampleSteps}
          onClick={callback}
        />
      );
      expect(tree).toMatchSnapshot();
    });
  });
});
