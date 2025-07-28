import React from "react";
import Tab from "../Tab/Tab";
import TabList from "../TabList/TabList";
import TabPanel from "../TabPanel/TabPanel";
import TabPanels from "../TabPanels/TabPanels";
import TabsContext from "../TabsContext/TabsContext";
import { Calendar, Chart, Table } from "@vibe/icons";
import TextField from "../../TextField/TextField";
import Box from "../../Box/Box";
import Flex from "../../Flex/Flex";
import { TabProps } from "../Tab/Tab";

const ExampleTabContent = ({ children }: { children: string }) => (
  <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "480px", height: "111px" }}>
    {children}
  </Box>
);

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
  parameters: {
    docs: {
      liveEdit: {
        scope: { ExampleTabContent }
      }
    }
  }
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
  parameters: {
    docs: {
      liveEdit: {
        scope: { ExampleTabContent }
      }
    }
  }
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
