import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Tab from "../../Tab/Tab";
import { Email } from "@vibe/icons";

export default {
  title: "Components/Tabs/Tab",
  component: Tab
};

const tabTemplate = createComponentTemplate(Tab);

export const Overview = {
  render: tabTemplate.bind({}),
  args: {
    children: "Tab"
  },
  name: "Overview"
};

export const States = {
  render: () => (
    <>
      <Tab>Normal</Tab>
      <Tab disabled tooltipProps={{ content: "This tab is disabled" }}>
        Disabled
      </Tab>
      <Tab active>Active</Tab>
    </>
  ),

  name: "States"
};

export const Icons = {
  render: () => (
    <>
      <Tab icon={Email}>Tab</Tab>
      <Tab icon={Email} iconSide="right">
        Tab
      </Tab>
    </>
  ),

  name: "Icons"
};
