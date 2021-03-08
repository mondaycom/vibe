import React from "react";
import renderer from "react-test-renderer";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem";
import BoardIcon from "../../../Icon/Icons/components/Board";
import WorkspaceIcon from "../../../Icon/Icons/components/Workspace";
import { fireEvent, render } from "@testing-library/react";

jest.useFakeTimers();

describe("BreadcrumbsItem", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with icon", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem
            icon={WorkspaceIcon}
            text="Workspace"
          />
          <BreadcrumbItem
            icon={BoardIcon}
            text="Board"
          />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("if navigation item, href link is correct", () => {
    const { getByRole } = render(
      <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
        <BreadcrumbItem text="Workspace" link="https://www.google.com" />
      </BreadcrumbsBar>
    );

    const link = getByRole("link");

    expect(link.getAttribute('href')).toBe("https://www.google.com");
  });

  it("if navigation item, click works", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
        <BreadcrumbItem text="Workspace" onClick={onClickMock} />
      </BreadcrumbsBar>
    );

    const item = getByText("Workspace");
    fireEvent.click(item);
    jest.advanceTimersByTime(1000);

    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("if indication item, click does nothing", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <BreadcrumbsBar type={BreadcrumbsBar.types.INDICATION}>
        <BreadcrumbItem text="Workspace" onClick={onClickMock} />
      </BreadcrumbsBar>
    );

    const item = getByText("Workspace");
    fireEvent.click(item);
    jest.advanceTimersByTime(1000);

    expect(onClickMock.mock.calls.length).toBe(0);
  });

  it("click with Enter key works", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
        <BreadcrumbItem text="Workspace" onClick={onClickMock} />
      </BreadcrumbsBar>
    );

    const item = getByText("Workspace");
    fireEvent.focus(item);
    fireEvent.keyDown(item, { key: "Enter", code: "Enter", charCode:"13" });
    jest.advanceTimersByTime(1000);

    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("click with Space key works", () => {
    const onClickMock = jest.fn();

    const { getByText } = render(
      <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
        <BreadcrumbItem text="Workspace" onClick={onClickMock} />
      </BreadcrumbsBar>
    );

    const item = getByText("Workspace");
    fireEvent.keyDown(item, { key: " ", code: "Space", charCode:"32" });
    jest.advanceTimersByTime(1000);

    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("'current' item renders correctly", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem isCurrent={true} />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("'disabled' item renders correctly", () => {
    const tree = renderer
      .create(
        <BreadcrumbsBar>
          <BreadcrumbItem isDisabled={true} />
        </BreadcrumbsBar>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
