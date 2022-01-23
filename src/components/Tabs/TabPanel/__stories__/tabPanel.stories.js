import React from "react";
import { withPerformance } from "storybook-addon-performance";
import TabPanel from "../TabPanel";

export const DefaultStory = () => (
  <div>
    <TabPanel>Panel</TabPanel>
  </div>
);

export default {
  title: "Components|Tabs/TabPanel",
  component: TabPanel,
  decorators: [withPerformance]
};
