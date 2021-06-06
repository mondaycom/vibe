import React from "react";
import { withPerformance } from "storybook-addon-performance";
import Tab from "../Tab";
import { StoryStateRow, StoryStateColumn } from "../../../storybook-helpers";

export const DefaultStory = () => (
  <ul role="tablist">
    <Tab id="tab">Tab</Tab>
  </ul>
);

export const States = () => (
  <section>
    <StoryStateRow>
      <StoryStateColumn title="Normal">
        <ul role="tablist">
          <Tab id="normal">Normal</Tab>
        </ul>
      </StoryStateColumn>

      <StoryStateColumn title="Disabled">
        <ul role="tablist">
          <Tab id="disabled" disabled>Disabled</Tab>
        </ul>
      </StoryStateColumn>

      <StoryStateColumn title="Active">
        <ul role="tablist">
          <Tab id="active" active>Active</Tab>
        </ul>
      </StoryStateColumn>

      <StoryStateColumn title="Focus">
        <ul role="tablist">
          <Tab id="focus" focus>Focus</Tab>
        </ul>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export default {
    title: "Components/Tabs/Tab",
    component: Tab,
    decorators: [withPerformance]

};
