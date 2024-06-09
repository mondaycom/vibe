import React from "react";
import Tab from "../Tab/Tab";
import TabList from "../TabList/TabList";
import TabPanel from "../TabPanel/TabPanel";
import TabPanels from "../TabPanels/TabPanels";
import TabsContext from "../TabsContext/TabsContext";
import { Calendar, Chart, Table } from "../../Icon/Icons";
import TextField from "../../TextField/TextField";
import "./Tabs.stories.scss";

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

const tabsTemplate = ({ tabPanelClassName, ...otherArgs }: { tabPanelClassName: string }) => {
  return (
    <TabsContext {...otherArgs}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel className={tabPanelClassName}>First slide</TabPanel>
        <TabPanel className={tabPanelClassName}>Second slide</TabPanel>
        <TabPanel className={tabPanelClassName}>Third slide</TabPanel>
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
        <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>
        <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>
        <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>
        <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>
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
    <div className="monday-storybook-tabs_column-wrapper">
      <TabsContext>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
        <TabPanels animationDirection={TabPanels.animationDirections.LTR}>
          <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>
        </TabPanels>
      </TabsContext>
      <TabsContext>
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
        <TabPanels animationDirection={TabPanels.animationDirections.RTL}>
          <TabPanel className="monday-storybook-tabs_bg-color">First slide</TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">Second slide</TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">Third slide</TabPanel>
          <TabPanel className="monday-storybook-tabs_bg-color">Fourth slide</TabPanel>
        </TabPanels>
      </TabsContext>
    </div>
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
        <TabPanel className="monday-storybook-tabs_wrapper">
          <h2>Login Details</h2>
          <TextField title="Profile Name" size={TextField.sizes.MEDIUM} placeholder="Profile Name" />
        </TabPanel>
        <TabPanel className="monday-storybook-tabs_wrapper">
          <h2>Account Details</h2>
          <TextField title="Account Name" size={TextField.sizes.MEDIUM} placeholder="Account Name" />
        </TabPanel>
      </TabPanels>
    </TabsContext>
  ),

  name: "Admin section tabs"
};
