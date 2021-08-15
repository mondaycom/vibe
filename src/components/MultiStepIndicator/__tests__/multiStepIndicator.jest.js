import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import MultiStepIndicator from "../MultiStepIndicator";

describe("MultiStepIndicator", () => {
  describe("Render tests", () => {
    it("Renders correctly with empty props", () => {
      const tree = renderer.create(<MultiStepIndicator />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Renders correctly with non-default props", () => {
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
      const tree = renderer.create(<MultiStepIndicator type={MultiStepIndicator.types.SUCCESS} steps={exampleSteps} />);
      expect(tree).toMatchSnapshot();
    });

    it("Render correctly with clickable steps", () => {
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

      const callback = () => {
        console.log("test");
      };

      const tree = renderer.create(
        <MultiStepIndicator type={MultiStepIndicator.types.SUCCESS} steps={exampleSteps} onClick={callback} />
      );
      expect(tree).toMatchSnapshot();
    });

    it("onClick works and is called once", () => {
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
        }
      ];

      const stepClickMock = jest.fn();

      const multiStepIndicatorComponent = render(
        <MultiStepIndicator type={MultiStepIndicator.types.SUCCESS} steps={exampleSteps} onClick={stepClickMock} />
      );

      const step = multiStepIndicatorComponent.getByText("Title");

      act(() => {
        fireEvent.mouseOver(step);
        jest.advanceTimersByTime(1000);
        fireEvent.click(step);
      });

      jest.advanceTimersByTime(1000);
      expect(stepClickMock.mock.calls.length).toBe(1);
    });
  });
});
