import { createComponentTemplate } from "vibe-storybook-components";
import TabPanel from "../TabPanel";

export default {
  title: "Navigation/Tabs/TabPanel",
  component: TabPanel
};

const tabPanelTemplate = createComponentTemplate(TabPanel);

export const Overview = {
  render: tabPanelTemplate.bind({}),
  name: "Overview",

  args: {
    children: "Content"
  }
};
