import Tab from "../Tab/Tab";
import TabList from "../TabList/TabList";
import TabPanel from "../TabPanel/TabPanel";
import TabPanels from "../TabPanels/TabPanels";
import TabsContext from "../TabsContext/TabsContext";

export const tabsTemplate = ({ className, ...otherArgs }) => {
  return (
    <TabsContext className={className} {...otherArgs}>
      <TabList>
        <Tab>First</Tab>
        <Tab>Second</Tab>
        <Tab>Third</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>First slide</TabPanel>
        <TabPanel>Second slide</TabPanel>
        <TabPanel>Third slide</TabPanel>
      </TabPanels>
    </TabsContext>
  );
};
