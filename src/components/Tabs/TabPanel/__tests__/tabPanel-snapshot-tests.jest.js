import React from "react";
import renderer from "react-test-renderer";
import TabPanels from "../../TabPanels/TabPanels";
import TabPanel from "../TabPanel";

describe("TabPanel renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer
      .create(
        <TabPanels>
          <TabPanel>First</TabPanel>
        </TabPanels>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer
      .create(
        <TabPanels>
          <TabPanel className="test">First</TabPanel>
        </TabPanels>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with id", () => {
    const tree = renderer
      .create(
        <TabPanels>
          <TabPanel id="test">First</TabPanel>
        </TabPanels>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
