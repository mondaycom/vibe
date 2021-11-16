import React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import AttentionBox from "../AttentionBox";
import { StoryStateRow, ComponentStateDescription } from "../../storybook-helpers";
import StoryWrapper from "../../../StoryBookComponents/StoryWrapper/StoryWrapper";
import { ATTENTION_BOX_TYPES } from "../AttentionBoxConstants";
import "./attentionBox.stories.scss";

const ATTENTION_BOX_TITLE = "Attention box title";
const ATTENTION_BOX_TEXT = "Studies show that 100% of people who celebrate birthdays, will eventually die.";

export const Sandbox = () => {
  const shouldOnClose = boolean("Does have onClose callback", false);

  return (
    <StoryWrapper>
      <AttentionBox
        title={text("Title", ATTENTION_BOX_TITLE)}
        text={text("Text", ATTENTION_BOX_TEXT)}
        type={select(
          "type",
          {
            Primary: ATTENTION_BOX_TYPES.PRIMARY,
            Success: ATTENTION_BOX_TYPES.SUCCESS,
            Danger: ATTENTION_BOX_TYPES.DANGER,
            Dark: ATTENTION_BOX_TYPES.DARK
          },
          ATTENTION_BOX_TYPES.PRIMARY
        )}
        withoutIcon={boolean("Without icon", false)}
        compact={boolean("Compact", false)}
        onClose={shouldOnClose ? () => {} : undefined}
      />
    </StoryWrapper>
  );
};

export const States = () => {
  return (
    <StoryWrapper>
      <StoryStateRow>
        <ComponentStateDescription title="Primary" />
        {renderAttentionBox(ATTENTION_BOX_TYPES.PRIMARY)}
      </StoryStateRow>
      <StoryStateRow>
        <ComponentStateDescription title="Success" />
        {renderAttentionBox(ATTENTION_BOX_TYPES.SUCCESS)}
      </StoryStateRow>
      <StoryStateRow>
        <ComponentStateDescription title="Danger" />
        {renderAttentionBox(ATTENTION_BOX_TYPES.DANGER)}
      </StoryStateRow>
      <StoryStateRow>
        <ComponentStateDescription title="Dark" />
        {renderAttentionBox(ATTENTION_BOX_TYPES.DARK)}
      </StoryStateRow>
    </StoryWrapper>
  );
};

const renderAttentionBox = type => {
  const customClass = "monday-style-attention-box-component-custom-class";

  return <AttentionBox type={type} title={ATTENTION_BOX_TITLE} text={ATTENTION_BOX_TEXT} className={customClass} />;
};

export default {
  title: "Components|AttentionBox",
  component: AttentionBox,
  decorators: [withPerformance]
};
