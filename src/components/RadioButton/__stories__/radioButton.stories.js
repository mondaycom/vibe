import React from "react";
import { text, boolean, number } from "@storybook/addon-knobs";
import RadioButton from "../RadioButton";
import { StoryStateColumn, FlexLayout } from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import RadioButtonStoryLine from "./RadioButtonStoryLine";
import "./radioButton.stories.scss";
import { withPerformance } from "storybook-addon-performance";

export const Sandbox = () => {
  const radiosCount = number("radiosCount", 5);
  return (
    <StoryWrapper>
      <FlexLayout direction="column" className="monday-style-radio-buttons-wrapper-vertical">
        {renderRadioButtons(radiosCount, { includeKnobs: true })}
      </FlexLayout>
    </StoryWrapper>
  );
};

export const States = () => {
  return (
    <StoryWrapper>
      <RadioButtonStoryLine title="Regular">
        <RadioButton
          value="1"
          text="Option"
          name="regularRadio"
          componentClassName="monday-style-radio-button-regular"
          disabled={true}
        />
      </RadioButtonStoryLine>
      <RadioButtonStoryLine title="Hover">
        <RadioButton
          value="1"
          text="Option"
          name="hoverRadio"
          componentClassName="monday-style-radio-button-hover"
          disabled={true}
        />
      </RadioButtonStoryLine>
      <RadioButtonStoryLine title="Selected">
        <RadioButton
          value="1"
          text="Option"
          name="selectedRadio"
          defaultChecked={true}
          disabled={true}
          componentClassName="monday-style-radio-button-selected"
        />
      </RadioButtonStoryLine>
      <RadioButtonStoryLine title="Selected hover">
        <RadioButton
          value="1"
          text="Option"
          name="selectedHoverRadio"
          defaultChecked={true}
          disabled={true}
          componentClassName="monday-style-radio-button-selected-hover"
        />
      </RadioButtonStoryLine>
      <RadioButtonStoryLine title="Disabled">
        <RadioButton value="1" text="Option" name="disabledRadio" disabled={true} />
      </RadioButtonStoryLine>
      <RadioButtonStoryLine title="Disabled selected">
        <RadioButton value="1" text="Option" name="disabledSelectedRadio" disabled={true} defaultChecked={true} />
      </RadioButtonStoryLine>
    </StoryWrapper>
  );
};

export const Positioning = () => {
  return (
    <StoryWrapper>
      <FlexLayout>
        <StoryStateColumn title="Vertical spacing 16px">
          <FlexLayout direction="column" className="monday-style-radio-buttons-wrapper-vertical">
            {renderRadioButtons(3, { name: "radios0" })}
          </FlexLayout>
        </StoryStateColumn>
        <StoryStateColumn title="Horizontal spacing 24px    Up to 3 options">
          <FlexLayout direction="row" className="monday-style-radio-buttons-wrapper-horizontal">
            {renderRadioButtons(3, { name: "radios1" })}
          </FlexLayout>
        </StoryStateColumn>
      </FlexLayout>
    </StoryWrapper>
  );
};

const renderRadioButtons = (count, options = {}) => {
  const { includeKnobs, name = "radios" } = options;
  const radioButtons = [];
  for (let i = 0; i < count; i++) {
    radioButtons.push(
      <RadioButton
        value={includeKnobs ? text(`Value${i}`, `${i}`) : i}
        text={includeKnobs ? text(`Text${i}`, `Option ${i}`) : `Option ${i}`}
        name={includeKnobs ? text(`Name${i}`, "radios") : name}
        disabled={includeKnobs ? boolean(`Disabled${i}`, false) : false}
      />
    );
  }

  return radioButtons;
};

export default {
  title: "Components|RadioButton",
  component: RadioButton,
  decorators: [withPerformance]
};
