import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbsBar from "../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";

describe("BreadcrumbsBar renders correctly", () => {
  it("with empty props", () => {
    const tree = renderer.create(<BreadcrumbsBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with bar type", () => {
    Object.values(BreadcrumbsBar.types).forEach(type => {
      const tree = renderer.create(<BreadcrumbsBar type={type} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("with children", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem text="Workspace" />
          <BreadcrumbItem text="Board" />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
