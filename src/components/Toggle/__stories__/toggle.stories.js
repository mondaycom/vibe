import React, { useCallback, useState } from "react";
import { withPerformance } from "storybook-addon-performance";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import Toggle from "../Toggle";
import { boolean, text } from "@storybook/addon-knobs";
import "./toggle.stories.scss";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";

export const Sandbox = () => {
  const [isSelected, setIsSelected] = useState(true);
  const onChange = isSelected => {
    setIsSelected(isSelected);
  };
  const controlledClassName = isSelected
    ? "monday-style-story-toggle__controlled-area--selected"
    : "monday-style-story-toggle__controlled-area--not-selected";
  const controlledText = isSelected ? "On" : "Off";
  return (
    <div className="monday-style-story-toggle">
      <StoryStateRow>
        <Toggle
          onChange={onChange}
          areLabelsHidden={boolean("areLabelsHidden", false)}
          isDisabled={boolean("Disabled", false)}
          ariaLabel={text("Aria Label", "Toggle aria label")}
          ariaControls="monday-style-story-toggle__controlled-area"
        />
      </StoryStateRow>
      <StoryStateRow>
        <div id="monday-style-story-toggle__controlled-area" className={controlledClassName}>
          {controlledText}
        </div>
      </StoryStateRow>
    </div>
  );
};

export const States = () => {
  return (
    <StoryWrapper componentClassName="monday-style-story-toggle__state-wrapper">
      <StoryStateRow componentDescription="On">
        <Toggle isSelected />
      </StoryStateRow>
      <StoryStateRow componentDescription="Off">
        <Toggle isSelected={false} />
      </StoryStateRow>
      <StoryStateRow componentDescription="Disabled & On">
        <Toggle isSelected isDisabled />
      </StoryStateRow>
      <StoryStateRow componentDescription="Disabled & Off">
        <Toggle isSelected={false} isDisabled />
      </StoryStateRow>
    </StoryWrapper>
  );
};

export default {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [withPerformance]
};
