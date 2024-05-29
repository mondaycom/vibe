import React from "react";
import { createComponentTemplate } from "vibe-storybook-components";
import Tab from "../../Tab/Tab";
import { Email } from "../../../Icon/Icons";

export default {
  title: "Navigation/Tabs/Tab",
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
      <Tab disabled>Disabled</Tab>
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
