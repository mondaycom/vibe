import Tab from "../Tab/Tab";
import TabList from "../TabList/TabList";
import TabPanel from "../TabPanel/TabPanel";
import TabPanels from "../TabPanels/TabPanels";
import TabsContext from "../TabsContext/TabsContext";

export const tabsTemplate = ({ tabPanelClassName, ...otherArgs }) => {
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
