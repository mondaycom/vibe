import React from "react";
import { withPerformance } from "storybook-addon-performance";
import Tab from "../Tab";
import { StoryStateRow, StoryStateColumn, ComponentStateDescription } from "../../../storybook-helpers";
import Icon from "../../../Icon/Icon";
import Email from "../../../Icon/Icons/components/Email";

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

      <StoryStateColumn title="Focus and active">
        <ul role="tablist">
          <Tab id="focus-active" focus active>Focus and active</Tab>
        </ul>
      </StoryStateColumn>
    </StoryStateRow>
  </section>
);

export const Icons = () => (
  <section>
    <ComponentStateDescription title="Icon left to tab name"/>
    <StoryStateRow>
      <ul role="tablist">
        <Tab icon={Email} iconType={Icon.type.SVG} iconSide="left">
          Tab
        </Tab>
      </ul>
    </StoryStateRow>

    <ComponentStateDescription title="Icon right to tab name"/>
    <StoryStateRow>
      <ul role="tablist">
        <Tab icon={Email} iconType={Icon.type.SVG} iconSide="right">
          Tab
        </Tab>
      </ul>
    </StoryStateRow>
  </section>
);

export default {
    title: "Components|Tabs/Tab",
    component: Tab,
    decorators: [withPerformance]

};
