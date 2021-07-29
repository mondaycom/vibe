import React, { useMemo, useState } from "react";
import { action } from "@storybook/addon-actions";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import Steps from "../Steps";
import {
  StoryStateRow,
  StoryStateColumn,
  ComponentStateDescription,
  FlexLayout,
  Divider
} from "../../storybook-helpers";
import DarkThemeContainer from "../../../StoryBookComponents/DarkThemeContainer/DarkThemeContainer";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { STEPS_GALLERY_TYPE, STEPS_NUMBERS_TYPE } from "../StepsConstants";

export const Sandbox = () => {
  const [numbersIndex, setNumberIndex] = useState(0);
  const changeIndex = (e, active) => setNumberIndex(active);
  const steps = useMemo(() => [<div>first</div>, <div>second</div>]);
  return (
    <div>
      <Steps
        id="Knobs"
        steps={steps}
        type={STEPS_NUMBERS_TYPE}
        activeStepIndex={numbersIndex}
        onChangeActiveStep={changeIndex}
      />
      <Steps
        id="Knobs"
        steps={steps}
        type={STEPS_GALLERY_TYPE}
        activeStepIndex={numbersIndex}
        onChangeActiveStep={changeIndex}
      />
    </div>
  );
};

export default {
  title: "Components/Steps",
  component: Steps,
  decorators: [withPerformance]
};
