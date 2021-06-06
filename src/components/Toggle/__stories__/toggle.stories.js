import React from "react";
import { withPerformance } from "storybook-addon-performance";
import { StoryStateColumn, StoryStateRow } from "../../storybook-helpers";
import Toggle from "../Toggle";
import { boolean } from "@storybook/addon-knobs";

export const Sandbox = () => (
  <>
    <StoryStateRow>
      <StoryStateColumn title="Toggle" />
    </StoryStateRow>
    <StoryStateRow>
      <Toggle defaultSelected={boolean("Default Selected", true)} />
    </StoryStateRow>
  </>
);

export default {
  title: "Components/Toggle",
  component: Toggle,
  decorators: [withPerformance]
};
