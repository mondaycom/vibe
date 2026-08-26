import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  TabsContext,
} from "@vibe/core";
import { Calendar, Chart, Table } from "@vibe/icons";
import { useRef } from "react";
import { ComponentGallery, type GalleryVariation } from "./ComponentGallery";
import { useGlidingTabIndicators } from "./useGlidingTabIndicators";

function Panel({ children }: { children: string }) {
  return (
    <Box backgroundColor="greyBackgroundColor" padding="medium" style={{ width: "100%", minHeight: 72 }}>
      {children}
    </Box>
  );
}

const tabsVariations: GalleryVariation[] = [
  {
    id: "default",
    label: "Default",
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
            <Panel>First slide</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Second slide</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Third slide</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Fourth slide</Panel>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    ),
  },
  {
    id: "size-small",
    label: "Size — Small",
    render: () => (
      <TabsContext>
        <TabList size="sm">
          <Tab>Overview</Tab>
          <Tab>Activity</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Panel>Overview</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Activity</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Settings</Panel>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    ),
  },
  {
    id: "size-medium",
    label: "Size — Medium",
    render: () => (
      <TabsContext>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Activity</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Panel>Overview</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Activity</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Settings</Panel>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    ),
  },
  {
    id: "size-large",
    label: "Size — Large",
    render: () => (
      <TabsContext>
        <TabList size="lg">
          <Tab>Overview</Tab>
          <Tab>Activity</Tab>
          <Tab>Settings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Panel>Overview</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Activity</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Settings</Panel>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    ),
  },
  {
    id: "with-icons",
    label: "With icons",
    render: () => (
      <TabsContext>
        <TabList>
          <Tab icon={Table}>Table</Tab>
          <Tab icon={Chart}>Chart</Tab>
          <Tab icon={Calendar}>Calendar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Panel>Table view</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Chart view</Panel>
          </TabPanel>
          <TabPanel>
            <Panel>Calendar view</Panel>
          </TabPanel>
        </TabPanels>
      </TabsContext>
    ),
  },
  {
    id: "stretched",
    label: "Stretched",
    render: () => (
      <div style={{ width: "100%" }}>
        <TabList tabType="stretched">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
      </div>
    ),
  },
  {
    id: "stretched-underline",
    label: "Stretched underline",
    render: () => (
      <div style={{ width: "100%" }}>
        <TabList stretchedUnderline>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
          <Tab disabled>Disabled</Tab>
        </TabList>
      </div>
    ),
  },
];

export function TabsGalleryView() {
  const rootRef = useRef<HTMLDivElement>(null);
  useGlidingTabIndicators(rootRef);

  return (
    <div ref={rootRef}>
      <ComponentGallery
        className="tabs-gallery"
        title="Tabs"
        description="All tabs variations currently supported by the component."
        variations={tabsVariations}
      />
    </div>
  );
}
