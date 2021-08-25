import React, { useMemo, useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Steps from "../Steps";
import { STEPS_GALLERY_TYPE, STEPS_NUMBERS_TYPE } from "../StepsConstants";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import StoryTitle from "../../storybook-helpers/story-title/story-title";
import "./steps.stories.scss";

export const States = () => {
  const [numbersIndex, setNumberIndex] = useState(0);
  const changeIndex = (e, active) => {
    setNumberIndex(active);
  };
  const steps = useMemo(
    () => [<div>first</div>, <div>second</div>, <div>third</div>, <div>fourth</div>, <div>Fifth</div>],
    []
  );
  return (
    <StoryWrapper>
      <StoryTitle text="Regular mode - steps with number view" />
      <Steps
        className="monday-style-story-steps-wrapper"
        steps={steps}
        type={STEPS_NUMBERS_TYPE}
        activeStepIndex={numbersIndex}
        onChangeActiveStep={changeIndex}
      />
      <StoryTitle text="Regular mode - steps with gallery view" />
      <Steps
        className="monday-style-story-steps-wrapper"
        steps={steps}
        type={STEPS_GALLERY_TYPE}
        activeStepIndex={numbersIndex}
        onChangeActiveStep={changeIndex}
      />
      <StoryTitle text="On primary mode - steps with dots only" />
      <Steps
        steps={steps}
        className="monday-style-story-steps-wrapper"
        type={STEPS_GALLERY_TYPE}
        activeStepIndex={numbersIndex}
        onChangeActiveStep={changeIndex}
        areNavigationButtonsHidden
      />
      <StoryTitle text="On primary mode - steps with number view" />
      <Steps
        className="monday-style-story-steps-on-primary-wrapper"
        steps={steps}
        type={STEPS_NUMBERS_TYPE}
        activeStepIndex={numbersIndex}
        isOnPrimary
        onChangeActiveStep={changeIndex}
      />
      <StoryTitle text="On primary mode - steps with gallery view" />
      <Steps
        className="monday-style-story-steps-on-primary-wrapper"
        steps={steps}
        type={STEPS_GALLERY_TYPE}
        activeStepIndex={numbersIndex}
        isOnPrimary
        onChangeActiveStep={changeIndex}
      />
      <StoryTitle text="On primary mode - steps with dots only" />
      <Steps
        className="monday-style-story-steps-on-primary-wrapper"
        steps={steps}
        type={STEPS_GALLERY_TYPE}
        activeStepIndex={numbersIndex}
        onChangeActiveStep={changeIndex}
        isOnPrimary
        areNavigationButtonsHidden
      />
    </StoryWrapper>
  );
};
export const Sandbox = () => {
  const isOnPrimary = boolean("Is on primary", false);
  const stepsNumber = number("Steps number", 5);
  const [numbersIndex, setNumberIndex] = useState(0);
  const changeIndex = (e, active) => setNumberIndex(active);
  const steps = useMemo(() => {
    const retval = [];
    for (let i = 0; i < stepsNumber; i++) {
      retval.push(<div>{i}</div>);
    }
    return retval;
  }, [stepsNumber]);
  return (
    <div style={{ width: "300px" }}>
      <Steps
        steps={steps}
        className={isOnPrimary ? "monday-style-story-steps-on-primary-wrapper" : undefined}
        type={select("Type", [Steps.types.GALLERY, Steps.types.NUMBERS])}
        activeStepIndex={number("Active step index", 0)}
        areNavigationButtonsHidden={boolean("Are navigation buttons hidden")}
        isOnPrimary={isOnPrimary}
        isContentOnTop={boolean("Is content on top", false)}
        areButtonsIconsHidden={boolean("Are button icons hidden", false)}
      />
    </div>
  );
};

export default {
  title: "Components/Steps",
  component: Steps,
  decorators: [withPerformance]
};
