import { describe, it, expect } from "vitest";
import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbsBar from "../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";
import BreadcrumbMenu from "../BreadcrumbMenu/BreadcrumbMenu";
import BreadcrumbMenuItem from "../BreadcrumbMenu/BreadcrumbMenuItem/BreadcrumbMenuItem";

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

  it("with breadcrumb menu", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem text="Board" />
          <BreadcrumbMenu>
            <BreadcrumbMenuItem title="Item 1" />
            <BreadcrumbMenuItem title="Item 2" />
          </BreadcrumbMenu>
          <BreadcrumbItem text="My Item" isCurrent />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
