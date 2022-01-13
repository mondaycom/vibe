import React from "react";
import { fireEvent, render, act } from "@testing-library/react";
import renderer from "react-test-renderer";
import MenuItemButton from "../MenuItemButton";

describe("Snapshots", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<MenuItemButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom class name", () => {
    const tree = renderer.create(<MenuItemButton classname="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with title and icon", () => {
    const tree = renderer.create(<MenuItemButton icon="fa fa-star">my item</MenuItemButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when disabled", () => {
    const tree = renderer.create(<MenuItemButton disabled={true}>my item</MenuItemButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selected", () => {
    const tree = renderer.create(<MenuItemButton selected={true}>my item</MenuItemButton>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.useFakeTimers();
const itemName = "My item";

const renderComponent = ({ ...props } = {}) => {
  return render(<MenuItemButton title={itemName} {...props} />);
};

describe.skip("<MenuItemButton />", () => {
  it("calls onClick when clicking on the menu item", () => {
    const onClickMock = jest.fn();
    const menuItemComponent = renderComponent({
      onClick: onClickMock
    });

    const item = menuItemComponent.getByText(itemName);

    act(() => {
      fireEvent.mouseOver(item);
      jest.advanceTimersByTime(1000);
      fireEvent.click(item);
    });

    jest.advanceTimersByTime(1000);
    expect(onClickMock.mock.calls.length).toBe(1);
  });
});
