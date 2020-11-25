import React from "react";
import renderer from "react-test-renderer";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  act,
} from "@testing-library/react";
import Menu from "../Menu";
import MenuItem from "../../MenuItem/MenuItem";
import MenuTitle from "../../MenuTitle/MenuTitle";
import Divider from "../../../Divider/Divider";

describe("Snapshots", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom class name", () => {
    const tree = renderer
      .create(<Menu classname="dummy-class-name" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with children", () => {
    const tree = renderer
      .create(
        <Menu classname="dummy-class-name">
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
const menuItem1OnClickMock = jest.fn();
const menuItem2OnClickMock = jest.fn();
const menuItem2Name = "My item 2";

const renderComponent = ({ ...props } = {}) => {
  return render(
    <Menu {...props} ariaLabel="menu">
      <MenuTitle caption={menuTitleCaption} />
      <MenuItem title={menuItem1Name} onClick={menuItem1OnClickMock} />
      <Divider />
      <MenuItem title={menuItem2Name} onClick={menuItem2OnClickMock} />
    </Menu>
  );
};

describe("<Menu />", () => {
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

  // it("calls onClick only for the selected menu item when using the enter", () => {
  //   const menuComponent = renderComponent();
  //   const menuElement = menuComponent.getByLabelText("menu");
  //   const menuItem = menuComponent.getByText(menuItem1Name);

  //   act(() => {
  //     fireEvent.focus(menuComponent.container);
  //     fireEvent.mouseOver(menuItem);
  //     jest.advanceTimersByTime(1000);
  //     fireEvent.keyDown(menuItem, { key: "Enter", keyCode: 13 });
  //   });

  //   jest.advanceTimersByTime(1000);
  //   expect(menuItem1OnClickMock.mock.calls.length).toBe(1);
  //   expect(menuItem2OnClickMock.mock.calls.length).toBe(0);
  // });

  // it("calls onClick only for the selected menu item when using keyboard", () => {
  //   const menuComponent = renderComponent();
  //   const menuElement = menuComponent.getByLabelText("menu");

  //   act(() => {
  //     fireEvent.focus(menuElement);
  //     jest.advanceTimersByTime(1000);
  //     fireEvent.keyDown(menuElement, { key: "ArrowDown" });
  //     jest.advanceTimersByTime(1000);
  //     fireEvent.keyDown(menuElement, { key: "Enter" });
  //   });

  //   jest.advanceTimersByTime(1000);
  //   expect(menuItem1OnClickMock.mock.calls.length).toBe(1);
  //   expect(menuItem2OnClickMock.mock.calls.length).toBe(0);
  // });
});
