import React from "react";
import { Tab, TabList, TabPanel, TabPanels, TabsContext, Table, TextField, Box, Flex, type TabProps } from "@vibe/core";
import { Calendar, Chart } from "@vibe/icons";

export default {
  title: "Components/Tabs",
  component: Tab,
  subcomponents: {
    TabPanel,
    TabPanels,
    TabList,
    TabsContext
  }
};

export const Overview = {
  render: (args: TabProps) => (
    <TabsContext id="overview-tabs" {...args}>
      <TabList id="overview-tab-list">
        <Tab id="overview-tab-first">First</Tab>
        <Tab id="overview-tab-second">Second</Tab>
        <Tab id="overview-tab-third">Third</Tab>
      </TabList>
      <TabPanels id="overview-tab-panels">
        <TabPanel id="overview-panel-first">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            First slide
          </Box>
        </TabPanel>
        <TabPanel id="overview-panel-second">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            Second slide
          </Box>
        </TabPanel>
        <TabPanel id="overview-panel-third">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            Third slide
          </Box>
        </TabPanel>
      </TabPanels>
    </TabsContext>
  ),
  name: "Overview",
  parameters: {
    docs: {
      liveEdit: {
        isEnabled: false
      }
    }
  }
};

export const Default = {
  render: () => (
    <TabsContext id="default-tabs">
      <TabList id="default-tab-list">
        <Tab id="default-tab-first">First</Tab>
        <Tab id="default-tab-second">Second</Tab>
        <Tab id="default-tab-third">Third</Tab>
        <Tab id="default-tab-disabled" disabled>
          Disabled
        </Tab>
      </TabList>
      <TabPanels id="default-tab-panels">
        <TabPanel id="default-panel-first">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            First slide
          </Box>
        </TabPanel>
        <TabPanel id="default-panel-second">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            Second slide
          </Box>
        </TabPanel>
        <TabPanel id="default-panel-third">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            Third slide
          </Box>
        </TabPanel>
        <TabPanel id="default-panel-fourth">
          <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
            Fourth slide
          </Box>
        </TabPanel>
      </TabPanels>
    </TabsContext>
  )
};

export const Stretched = {
  render: () => (
    <div
      style={{
        width: "100%"
      }}
    >
      <TabList tabType="stretched">
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </div>
  )
};

export const StretchedUnderline = {
  render: () => (
    <div style={{ width: "100%" }}>
      <TabList stretchedUnderline>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
    </div>
  )
};

export const Motion = {
  render: () => (
    <Flex direction="column" gap="medium">
      <TabsContext>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
        <TabPanels animationDirection="ltr">
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              First slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              Second slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              Third slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              Fourth slide
            </Box>
          </TabPanel>
        </TabPanels>
      </TabsContext>
      <TabsContext>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
        <TabPanels animationDirection="rtl">
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              First slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              Second slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              Third slide
            </Box>
          </TabPanel>
          <TabPanel>
            <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
              Fourth slide
            </Box>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </Flex>
  )
};

export const BoardViewsTabs = {
  render: () => (
    <TabList>
      <Tab icon={Table}>Main Table</Tab>
      <Tab icon={Chart}>Chart</Tab>
      <Tab icon={Calendar}>Calendar</Tab>
    </TabList>
  ),

  parameters: {
    docs: {
      liveEdit: {
        scope: { Table, Chart, Calendar }
      }
    }
  }
};

export const AdminSectionTabs = {
  render: () => (
    <TabsContext>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Account</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <h2>Login Details</h2>
          <TextField title="Profile Name" size="medium" placeholder="Profile Name" />
        </TabPanel>
        <TabPanel>
          <h2>Account Details</h2>
          <TextField title="Account Name" size="medium" placeholder="Account Name" />
        </TabPanel>
      </TabPanels>
    </TabsContext>
  )
};
