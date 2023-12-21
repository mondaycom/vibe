import React from "react";
import { fireEvent, render } from "@testing-library/react";
import BreadcrumbsBar from "../../BreadcrumbsBar";
import BreadcrumbItem from "../BreadcrumbItem";

jest.useFakeTimers();

describe("BreadcrumbsItem tests", () => {
  it("if navigation item, href link is correct", () => {
    const { getByRole } = render(
      <BreadcrumbsBar type={BreadcrumbsBar.types.NAVIGATION}>
        <BreadcrumbItem text="Workspace" link="https://www.google.com" />
      </BreadcrumbsBar>
    );

    const link = getByRole("link");

    expect(link.getAttribute("href")).toBe("https://www.google.com");
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
    fireEvent.keyDown(item, { key: "Enter", code: "Enter", charCode: "13" });
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
    fireEvent.keyDown(item, { key: " ", code: "Space", charCode: "32" });
    jest.advanceTimersByTime(1000);

    expect(onClickMock.mock.calls.length).toBe(1);
  });

  it("should call the click callback when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <BreadcrumbsBar>
        <BreadcrumbItem text="Workspace" onClick={onClickMock} />
      </BreadcrumbsBar>
    );
    const item = getByText("Workspace");
    fireEvent.click(item);
    expect(onClickMock.mock.calls.length).toBe(0);
  });
});
