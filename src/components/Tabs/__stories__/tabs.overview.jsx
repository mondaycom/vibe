import Tab from "../Tab/Tab.jsx";
import TabList from "../TabList/TabList.jsx";
import TabPanel from "../TabPanel/TabPanel.jsx";
import TabPanels from "../TabPanels/TabPanels.jsx";
import TabsContext from "../TabsContext/TabsContext.jsx";

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
