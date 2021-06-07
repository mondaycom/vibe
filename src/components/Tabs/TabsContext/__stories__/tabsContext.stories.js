import React from "react";
import { action } from '@storybook/addon-actions';
import { text, boolean, number, select } from "@storybook/addon-knobs";
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

export default {
    title: "Components/Tabs/TabsContext",
    component: TabsContext,
    decorators: [withPerformance]

};
