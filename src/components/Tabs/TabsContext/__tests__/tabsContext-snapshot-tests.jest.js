import React from "react";
import renderer from "react-test-renderer";
import TabsContext from "../TabsContext";
import TabPanel from "../../TabPanel/TabPanel";
import TabPanels from "../../TabPanels/TabPanels";
import Tab from "../../Tab/Tab";
import TabList from "../../TabList/TabList";

describe("TabsContext renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer
      .create(
        <TabsContext>
          <TabList>
            <Tab>First</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>First slide</TabPanel>
          </TabPanels>
        </TabsContext>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer
      .create(
        <TabsContext className="test">
          <TabList>
            <Tab>First</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>First slide</TabPanel>
          </TabPanels>
        </TabsContext>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer
      .create(
        <TabsContext id="test">
          <TabList>
            <Tab>First</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>First slide</TabPanel>
          </TabPanels>
        </TabsContext>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with activeTabId", () => {
    const tree = renderer
      .create(
        <TabsContext activeTabId={1}>
          <TabList>
            <Tab>First</Tab>
            <Tab>Second</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>First slide</TabPanel>
            <TabPanel>Second slide</TabPanel>
          </TabPanels>
        </TabsContext>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
