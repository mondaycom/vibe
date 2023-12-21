import React from "react";
import renderer from "react-test-renderer";
import { cleanup, fireEvent, render } from "@testing-library/react";
import { act } from "@testing-library/react-hooks";
import Menu from "../Menu";
import MenuItem from "../../MenuItem/MenuItem";
import MenuTitle from "../../MenuTitle/MenuTitle";
import Divider from "../../../Divider/Divider";
import { mockRequestAnimationFrame, restoreRequestAnimationFrameMock } from "../../../../tests/__tests__/test-utils";

describe("Snapshots", () => {
  beforeEach(() => {
    mockRequestAnimationFrame();
  });

  afterEach(() => {
    restoreRequestAnimationFrameMock();
  });

  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom class name", () => {
    const tree = renderer.create(<Menu classname="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with children", () => {
    const tree = renderer
      .create(
        <Menu classname="dummy-class-name" focusItemIndexOnMount={0}>
          <MenuTitle caption="my title" />
          <MenuItem title="item 1" />
          <Divider />
          <MenuItem title="item 2" />
        </Menu>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.useFakeTimers();
const menuTitleCaption = "Title";
const menuItem1Name = "My item 1";
const menuItem1Id = "menu-item-1";
const menuItem1OnClickMock = jest.fn();
const menuItem2OnClickMock = jest.fn();
const menuItem2Name = "My item 2";
const menuItem2Id = "menu-item-2";

const renderComponent = ({ ...props } = {}) => {
  return render(
    <Menu {...props} ariaLabel="menu">
      <MenuTitle caption={menuTitleCaption} />
      <MenuItem title={menuItem1Name} onClick={menuItem1OnClickMock} id={menuItem1Id} />
      <Divider />
      <MenuItem title={menuItem2Name} onClick={menuItem2OnClickMock} id={menuItem2Id} />
    </Menu>
  );
};

describe.skip("<Menu />", () => {
  afterEach(() => {
    cleanup();
  });

  it("calls onClick only for the selected menu item when using the mouse", () => {
    const menuComponent = renderComponent();

    const menuItem = menuComponent.getByText(menuItem1Name);

    act(() => {
      fireEvent.mouseOver(menuItem);
      jest.advanceTimersByTime(1000);
      fireEvent.click(menuItem);
    });

    jest.advanceTimersByTime(1000);
    expect(menuItem1OnClickMock.mock.calls.length).toBe(1);
    expect(menuItem2OnClickMock.mock.calls.length).toBe(0);
  });

  it("calls onClick only for the selected menu item when using the enter", () => {
    const menuComponent = renderComponent();
    const menuItem = menuComponent.getByText(menuItem1Name);

    act(() => {
      fireEvent.mouseOver(menuItem);
      jest.advanceTimersByTime(1000);
      fireEvent.keyUp(menuItem, { key: "Enter" });
    });

    jest.advanceTimersByTime(1000);
    expect(menuItem1OnClickMock.mock.calls.length).toBe(1);
    expect(menuItem2OnClickMock.mock.calls.length).toBe(0);
  });

  it("calls onClick only for the selected menu item when using keyboard", () => {
    const menuComponent = renderComponent();
    const menuElement = menuComponent.getByLabelText("menu");

    act(() => {
      fireEvent.keyUp(menuElement, { key: "ArrowDown" });
      jest.advanceTimersByTime(1000);
      fireEvent.keyUp(menuElement, { key: "Enter" });
    });

    jest.advanceTimersByTime(1000);
    expect(menuItem1OnClickMock.mock.calls.length).toBe(1);
    expect(menuItem2OnClickMock.mock.calls.length).toBe(0);
  });

  it("menu has correct active-descendant when item is active", () => {
    const menuComponent = renderComponent();
    expect(menuComponent).not.toHaveAttribute("aria-activedescendant");

    const menuItem = menuComponent.getByText(menuItem1Name);

    act(() => {
      fireEvent.mouseOver(menuItem);
      jest.advanceTimersByTime(1000);
      fireEvent.click(menuItem);
    });

    jest.advanceTimersByTime(1000);
    expect(menuComponent).toHaveAttribute("aria-activedescendant", menuItem1Id);
  });
});
