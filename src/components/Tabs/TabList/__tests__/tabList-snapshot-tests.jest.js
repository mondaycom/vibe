import React from "react";
import renderer from "react-test-renderer";
import TabList from "../TabList";
import Tab from "../../Tab/Tab";

describe("TabList renders correctly", () => {
  it("with children", () => {
    const tree = renderer
      .create(
        <TabList>
          <Tab>First</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer
      .create(
        <TabList className="test">
          <Tab>First</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer
      .create(
        <TabList id="test">
          <Tab>First</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with activeTabId", () => {
    const tree = renderer
      .create(
        <TabList activeTabId={1}>
          <Tab>First</Tab>
          <Tab>Second</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with size", () => {
    const tree = renderer
      .create(
        <TabList size="lg">
          <Tab>First</Tab>
          <Tab>Second</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with tabType", () => {
    const tree = renderer
      .create(
        <TabList tabType="stretched">
          <Tab>First</Tab>
          <Tab>Second</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("stretched tab list", () => {
    const tree = renderer
      .create(
        <TabList tabType="stretched">
          <Tab>First</Tab>
          <Tab>Second</Tab>
          <Tab>Third</Tab>
        </TabList>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
