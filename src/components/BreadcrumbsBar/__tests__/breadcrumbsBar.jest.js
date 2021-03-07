import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbsBar from "../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem/BreadcrumbItem";
import { fireEvent, render } from "@testing-library/react";

describe.only("BreadcrumbsBar", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<BreadcrumbsBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly bar type", () => {
    Object.values(BreadcrumbsBar.types).forEach(type => {
      const tree = renderer.create(<BreadcrumbsBar type={type} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  it("renders correctly with items", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem text="Workspace" link="https://www.google.com" isDisabled={false} isCurrent={false} />
          <BreadcrumbItem text="Board" func={() => alert("hello")} isDisabled={true} isCurrent={true} />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Tab navigation works", () => {
    const { getByText } = render(
      <BreadcrumbsBar>
        <BreadcrumbItem text="Workspace" />
        <BreadcrumbItem text="Board" />
      </BreadcrumbsBar>
    );
    const firstItem = getByText("Workspace");
    const secondItem = getByText("Board");

    fireEvent.focus(firstItem);
    fireEvent.keyDown(firstItem, { key: "Tab", code: "Tab", charCode: "9" });

    expect(secondItem).toHaveFocus;
  });
});
