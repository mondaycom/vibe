import React from "react";
import Tab from "../Tab/Tab";
import TabList from "../TabList/TabList";
import TabPanel from "../TabPanel/TabPanel";
import TabPanels from "../TabPanels/TabPanels";
import TabsContext from "../TabsContext/TabsContext";
import { Calendar, Chart, Table } from "../../Icon/Icons";
import TextField from "../../TextField/TextField";
import Box from "../../Box/Box";
import Flex from "../../Flex/Flex";

const ExampleTabContent = ({ children }: { children: string }) => (
  <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
    {children}
  </Box>
);

export default {
  title: "Navigation/Tabs/Tabs",
  component: Tab,
  subcomponents: {
    TabPanel,
    TabPanels,
    TabList,
    TabsContext
  }
};

const tabsTemplate = ({ ...args }) => {
  return (
    <TabsContext {...args}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ExampleTabContent>First slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
          <ExampleTabContent>Second slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
          <ExampleTabContent>Third slide</ExampleTabContent>
        </TabPanel>
      </TabPanels>
    </TabsContext>
  );
};

export const Overview = {
  render: tabsTemplate.bind({}),
  name: "Overview",

  args: {
    tabPanelClassName: "monday-storybook-tabs_bg-color"
  }
};

export const Default = {
  render: () => (
    <TabsContext>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
        <Tab disabled>Disabled</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ExampleTabContent>First slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
          <ExampleTabContent>Second slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
          <ExampleTabContent>Third slide</ExampleTabContent>
        </TabPanel>
        <TabPanel>
          <ExampleTabContent>Fourth slide</ExampleTabContent>
        </TabPanel>
      </TabPanels>
    </TabsContext>
  ),

  name: "Default"
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
  ),

  name: "Stretched"
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
            <ExampleTabContent>First slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Second slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Third slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Fourth slide</ExampleTabContent>
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
            <ExampleTabContent>First slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Second slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Third slide</ExampleTabContent>
          </TabPanel>
          <TabPanel>
            <ExampleTabContent>Fourth slide</ExampleTabContent>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    </Flex>
  ),

  name: "Motion"
};

export const BoardViewsTabs = {
  render: () => (
    <TabList>
      <Tab icon={Table}>Main Table</Tab>
      <Tab icon={Chart}>Chart</Tab>
      <Tab icon={Calendar}>Calendar</Tab>
    </TabList>
  ),

  name: "Board views tabs"
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
  ),

  name: "Admin section tabs"
};
