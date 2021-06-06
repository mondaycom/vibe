import React from "react";
import { withPerformance } from "storybook-addon-performance";
import Tab from "../Tab";
import { StoryStateRow, StoryStateColumn } from "../../../storybook-helpers";

export const DefaultStory = () => (
  <Tab id="tab">Tab</Tab>
);

export const States = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Normal">
        <Tab id="normal">Normal</Tab>
      </StoryStateColumn>

      <StoryStateColumn title="Disabled">
        <Tab id="disabled" disabled>Disabled</Tab>
      </StoryStateColumn>

      <StoryStateColumn title="Active">
        <Tab id="active" active>Active</Tab>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export default {
    title: "Components/Tabs/Tab",
    component: Tab,
    decorators: [withPerformance]

};
