import React from "react";
import renderer from "react-test-renderer";
import Tab from "../Tab/Tab";
import TabList from "../TabList/TabList";
import TabPanels from "../TabPanels/TabPanels.jsx"
import TabPanel from "../TabPanel/TabPanel.jsx";
import { Email } from "../../Icon/Icons/components/Email";

describe("Snapshot tests", () => {
  

  describe("TabList renders correctly", () => {
    it("with children", () => {
      const tree = renderer.create(
        <TabList>
          <Tab>First</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with className", () => {
      const tree = renderer.create(
        <TabList className="test">
          <Tab>First</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with id", () => {
      const tree = renderer.create(
        <TabList id="test">
          <Tab>First</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with activeTabId", () => {
      const tree = renderer.create(
        <TabList activeTabId={1}>
          <Tab>First</Tab>
          <Tab>Second</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with size", () => {
      const tree = renderer.create(
        <TabList size="lg">
          <Tab>First</Tab>
          <Tab>Second</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with tabType", () => {
      const tree = renderer.create(
        <TabList tabType="stretched">
          <Tab>First</Tab>
          <Tab>Second</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("TabPanels renders correctly", () => {
    it("with empty props", () => {
      const tree = renderer.create(
        <TabPanels>
          <TabPanel>First</TabPanel>
          <TabPanel>Second</TabPanel>
          <TabPanel>Third</TabPanel>
        </TabPanels>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with the given active tab panel", () => {
      const tree = renderer.create(
        <TabPanels activeTabId={1}>
          <TabPanel>First</TabPanel>
          <TabPanel>Second</TabPanel>
          <TabPanel>Third</TabPanel>
        </TabPanels>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with animation from left to right", () => {
      const tree = renderer.create(
        <TabPanels animationDirection="ltr">
          <TabPanel>First</TabPanel>
          <TabPanel>Second</TabPanel>
          <TabPanel>Third</TabPanel>
        </TabPanels>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("with animation from right to left", () => {
      const tree = renderer.create(
        <TabPanels animationDirection="rtl">
          <TabPanel>First</TabPanel>
          <TabPanel>Second</TabPanel>
          <TabPanel>Third</TabPanel>
        </TabPanels>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
