import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabsContext,
  Text,
} from "@vibe/core";
import type { Section } from "../section";

const controls: Section["controls"] = [
  {
    key: "size",
    label: "Size",
    type: "select",
    options: [
      { value: "small", label: "Small" },
      { value: "medium", label: "Medium" },
      { value: "large", label: "Large" },
    ],
  },
  {
    key: "activeTab",
    label: "Active tab",
    type: "select",
    options: [
      { value: "0", label: "Overview" },
      { value: "1", label: "Activity" },
      { value: "2", label: "Settings" },
    ],
  },
];

const defaultState = {
  size: "medium",
  activeTab: 0,
};

const Demo: Section["Demo"] = ({ state }) => {
  const activeTabId = Number(state.activeTab);

  return (
    <TabsContext activeTabId={activeTabId}>
      <TabList activeTabId={activeTabId} size={state.size as string}>
        <Tab>Overview</Tab>
        <Tab>Activity</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text>Overview panel content.</Text>
        </TabPanel>
        <TabPanel>
          <Text>Activity panel content.</Text>
        </TabPanel>
        <TabPanel>
          <Text>Settings panel content.</Text>
        </TabPanel>
      </TabPanels>
    </TabsContext>
  );
};

const section: Section = {
  id: "tabs",
  title: "Tabs",
  defaultState,
  controls,
  Demo,
};

export default section;
