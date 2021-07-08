import React from "react";
import { withPerformance } from "storybook-addon-performance";
import TabPanels from "../TabPanels";
import TabPanel from "../../TabPanel/TabPanel";
import DescriptionLabel from "../../../storybook-helpers/description-label/description-label";
import { ComponentStateDescription, StoryStateRow, Divider } from "../../../storybook-helpers";

export const DefaultStory = () => (
  <TabPanels>
    <TabPanel>First tab panel</TabPanel>
    <TabPanel>Second tab panel</TabPanel>
    <TabPanel>Third tab panel</TabPanel>
  </TabPanels>
);

export const Active = () => (
  <section>
    <ComponentStateDescription title="Custom active"/>
    <DescriptionLabel>
      Pass the specific tab id that is active
    </DescriptionLabel>

    <TabPanels activeTabId={1}>
      <TabPanel>First tab panel</TabPanel>
      <TabPanel>Second tab panel</TabPanel>
      <TabPanel>Third tab panel</TabPanel>
    </TabPanels>
  </section>
);

export const Animations = () => (
  <section>
    <ComponentStateDescription title="Left to Right"/>
    <StoryStateRow>
      <TabPanels animationDirection="ltr">
        <TabPanel>First tab panel</TabPanel>
        <TabPanel>Second tab panel</TabPanel>
        <TabPanel>Third tab panel</TabPanel>
      </TabPanels>
    </StoryStateRow>

    <Divider />

    <ComponentStateDescription title="Right to Left"/>
    <StoryStateRow>
      <TabPanels animationDirection="rtl">
        <TabPanel>First tab panel</TabPanel>
        <TabPanel>Second tab panel</TabPanel>
        <TabPanel>Third tab panel</TabPanel>
      </TabPanels>
    </StoryStateRow>
  </section>
);

export default {
  title: "Components/Tabs/TabPanels",
  component: TabPanels,
  decorators: [withPerformance]
};
