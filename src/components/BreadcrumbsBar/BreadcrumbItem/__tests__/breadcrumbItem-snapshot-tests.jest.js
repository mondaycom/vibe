import React from "react";
import renderer from "react-test-renderer";
import { Board } from "../../../Icon/Icons";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem";

describe("BreadcrumbsItem renders correctly ", () => {
  it("with empty props", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with icon", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem icon={Board} />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with current item", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem isCurrent />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("when disabled item", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem disabled />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with className", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem className="test" />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("with text", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem text="item" />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
