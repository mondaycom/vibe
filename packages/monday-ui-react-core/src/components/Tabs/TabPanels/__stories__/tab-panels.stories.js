import { createStoryMetaSettingsDecorator } from "../../../../storybook/functions/createStoryMetaSettingsDecorator";
import TabPanel from "../../TabPanel/TabPanel";
import TabPanels from "../TabPanels";

const metaSettings = createStoryMetaSettingsDecorator({
  component: TabPanels,
  enumPropNamesArray: ["animationDirection"]
});

export default {
  title: "Navigation/Tabs/TabPanels",
  component: TabPanels,
  argTypes: metaSettings.argTypes,
  decorators: metaSettings.decorators
};

const tabPanelsTemplate = args => (
  <TabPanels {...args}>
    <TabPanel>First tab panel</TabPanel>
    <TabPanel>Second tab panel</TabPanel>
    <TabPanel>Third tab panel</TabPanel>
  </TabPanels>
);

export const Overview = {
  render: tabPanelsTemplate.bind({}),
  name: "Overview",
  args: {
    activeTabId: 1
  }
};
