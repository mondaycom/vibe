import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent, screen, act } from "@testing-library/react";
import MenuButton from "../MenuButton";
import Bolt from "../../Icon/Icons/components/Bolt";

jest.useFakeTimers();

it("renders correctly with empty props", () => {
  const tree = renderer
    .create(
      <MenuButton>
        <div>Menu</div>
      </MenuButton>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with size Large", () => {
  const tree = renderer
    .create(
      <MenuButton size={MenuButton.sizes.LARGE}>
        <div>Menu</div>
      </MenuButton>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with Bolt Icon", () => {
  const tree = renderer
    .create(
      <MenuButton component={Bolt}>
        <div>Menu</div>
      </MenuButton>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with Bolt Icon", () => {
  const tree = renderer
    .create(
      <MenuButton componentClassName="dummy-class-name">
        <div>Menu</div>
      </MenuButton>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders correctly with open state", () => {
  const tree = renderer
    .create(
      <MenuButton open>
        <div>Menu</div>
      </MenuButton>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

describe("Click", () => {
  it("should show menu", async () => {
    const { getByLabelText } = render(
      <MenuButton ariaLabel="Menu Button">
        <div>Menu</div>
      </MenuButton>
    );
    const button = getByLabelText("Menu Button");
    act(() => {
      fireEvent.click(button);
      jest.advanceTimersByTime(1000);
    });
    const menu = await screen.findByText("Menu");
    expect(menu).toBeTruthy();
  });
});
