import React from "react";
import renderer from "react-test-renderer";
import TabList from "../TabList";
import Tab from "../../Tab/Tab";

describe("<TabList />", () => {
  describe("Snapshot tests", () => {
    it("renders correctly with empty props", () => {
      const tree = renderer.create(
        <TabList>
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly small tab list", () => {
      const tree = renderer.create(
        <TabList size="sm">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly medium tab list", () => {
      const tree = renderer.create(
        <TabList size="md">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly large tab list", () => {
      const tree = renderer.create(
        <TabList size="lg">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("renders correctly stretched tab list", () => {
      const tree = renderer.create(
        <TabList tabType="stretched">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});