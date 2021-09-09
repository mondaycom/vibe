import React from "react";
import Label from "../Label";
import { boolean, select, text } from "@storybook/addon-knobs";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import { withPerformance } from "storybook-addon-performance";
import { bool } from "prop-types";

export const Sandbox = () => (
  <div>
    <Label
      id="Knobs"
      text={text("Text", "New")}
      color={select("Color", Object.values(Label.colors), Label.colors.PRIMARY)}
      kind={select("Kind", Object.values(Label.kinds), Label.kinds.FILL)}
      isAnimationDisabled={boolean("Is Animation Disabled", false)}
      isLegIncluded={boolean("Is Leg Included", false)}
    />
  </div>
);

export const Fill = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Primary">
        <Label text="New" />
      </StoryStateColumn>
      <StoryStateColumn title="Dark">
        <Label text="New" color={Label.colors.DARK} />
      </StoryStateColumn>
      <StoryStateColumn title="Positive">
        <Label text="New" color={Label.colors.POSITIVE} />
      </StoryStateColumn>
      <StoryStateColumn title="Negative">
        <Label text="New" color={Label.colors.NEGATIVE} />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const Line = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Primary">
        <Label text="New" kind={Label.kinds.LINE} />
      </StoryStateColumn>
      <StoryStateColumn title="Dark">
        <Label text="New" color={Label.colors.DARK} kind={Label.kinds.LINE} />
      </StoryStateColumn>
      <StoryStateColumn title="Positive">
        <Label text="New" color={Label.colors.POSITIVE} kind={Label.kinds.LINE} />
      </StoryStateColumn>
      <StoryStateColumn title="Negative">
        <Label text="New" color={Label.colors.NEGATIVE} kind={Label.kinds.LINE} />
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export default {
  title: "Components|Label",
  component: Label,
  decorators: [withPerformance]
};
