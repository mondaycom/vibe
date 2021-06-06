import React from "react";
import { withPerformance } from "storybook-addon-performance";
import TabPanels from "../TabPanels";
import TabPanel from "../../TabPanel/TabPanel";

export const Sandbox = () => (
  <div>
    <TabPanels>
      <TabPanel>First tab panel</TabPanel>
      <TabPanel>Second tab panel</TabPanel>
      <TabPanel>Third tab panel</TabPanel>
    </TabPanels>
  </div>
);

export default {
  title: "Components/Tabs/TabPanels",
  component: TabPanels,
  decorators: [withPerformance]
};
