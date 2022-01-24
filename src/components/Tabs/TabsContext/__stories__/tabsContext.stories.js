import React from "react";
import { withPerformance } from "storybook-addon-performance";
import TabsContext from "../TabsContext";
import TabList from "../../TabList/TabList";
import Tab from "../../Tab/Tab";
import TabPanel from "../../TabPanel/TabPanel";
import { TabPanels } from "../../../index";
import "./tabsContext.stories.scss";

export const DefaultStory = () => (
  <TabsContext>
    <TabList>
      <Tab>First</Tab>
      <Tab>Second</Tab>
      <Tab>Third</Tab>
    </TabList>

    <TabPanels>
      <TabPanel>First panel</TabPanel>
      <TabPanel>Second panel</TabPanel>
      <TabPanel>Third panel</TabPanel>
    </TabPanels>
  </TabsContext>
);

export const Sandbox = () => {
  return (
    <TabsContext activeTabId={0}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>First panel</TabPanel>
        <TabPanel>Second panel</TabPanel>
        <TabPanel>Third panel</TabPanel>
      </TabPanels>
    </TabsContext>
  );
};

export default {
  title: "Components|Tabs/TabsContext",
  component: TabsContext,
  decorators: [withPerformance]
};
