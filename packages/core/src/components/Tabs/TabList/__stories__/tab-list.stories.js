import TabList from "../TabList.tsx";
import Tab from "../../Tab/Tab";
import styles from "./tab-list.stories.module.scss";

export default {
  title: "Navigation/Tabs/TabList",
  component: TabList
};

const tabListTemplate = args => (
  <TabList {...args}>
    <Tab>First</Tab>
    <Tab>Second</Tab>
    <Tab>Third</Tab>
    <Tab disabled>Disabled</Tab>
  </TabList>
);

export const Overview = {
  render: tabListTemplate.bind({}),
  name: "Overview"
};

export const Default = {
  render: () => (
    <TabList>
      <Tab>First</Tab>
      <Tab>Second</Tab>
      <Tab>Third</Tab>
      <Tab disabled>Disabled</Tab>
    </TabList>
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

export const Sizes = {
  render: () => (
    <div className={styles.tabsSizesContainer}>
      <>
        Small
        <TabList size="sm">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
      </>
      <>
        Medium
        <TabList size="md">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
      </>
      <>
        Large
        <TabList size="lg">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
      </>
    </div>
  ),

  name: "Sizes"
};
