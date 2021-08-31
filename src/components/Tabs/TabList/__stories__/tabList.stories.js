import React from "react";
import { withPerformance } from "storybook-addon-performance";
import TabList from "../TabList";
import { StoryStateRow, ComponentStateDescription } from "../../../storybook-helpers";
import DescriptionLabel from "../../../storybook-helpers/description-label/description-label";
import Tab from "../../Tab/Tab";

export const DefaultStory = () => (
  <TabList>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
    <Tab disabled>Disabled</Tab>
  </TabList>
);

export const Sizes = () => (
  <section>
    <ComponentStateDescription title="Small"/>
    <StoryStateRow>
      <TabList size="sm">
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </StoryStateRow>

    <ComponentStateDescription title="Medium"/>
    <StoryStateRow>
      <TabList size="md">
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </StoryStateRow>

    <ComponentStateDescription title="Large"/>
    <StoryStateRow>
      <TabList size="lg">
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </StoryStateRow>
  </section>
);

export const Types = () => (
  <section>
    <ComponentStateDescription title="Compact"/>
    <TabList tabType="compact">
      <Tab>First</Tab>
      <Tab>Second</Tab>
      <Tab>Third</Tab>
      <Tab disabled>Disabled</Tab>
    </TabList>

    <ComponentStateDescription title="Stretched"/>
    <DescriptionLabel>
      The width of the list is responsive to the screen's width.
    </DescriptionLabel>
    <TabList tabType="stretched">
      <Tab>First</Tab>
      <Tab>Second</Tab>
      <Tab>Third</Tab>
      <Tab disabled>Disabled</Tab>
    </TabList>
  </section>
);

export default {
    title: "Components|Tabs/TabList",
    component: TabList,
    decorators: [withPerformance]
};
