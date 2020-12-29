import React from "react";
import { cleanup, fireEvent, render, screen, act } from "@testing-library/react";
import renderer from "react-test-renderer";
import MenuItem from "../MenuItem";

describe("Snapshots", () => {
  it("renders correctly with empty props", () => {
    const tree = renderer.create(<MenuItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with custom class name", () => {
    const tree = renderer.create(<MenuItem classname="dummy-class-name" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with title and icon", () => {
    const tree = renderer.create(<MenuItem title="my item" icon="fa fa-star" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when disabled", () => {
    const tree = renderer.create(<MenuItem title="my item" disabled={true} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

jest.useFakeTimers();
const itemName = "My item";

const renderComponent = ({ ...props } = {}) => {
  return render(<MenuItem title={itemName} {...props} />);
};

describe("<MenuItem />", () => {
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
