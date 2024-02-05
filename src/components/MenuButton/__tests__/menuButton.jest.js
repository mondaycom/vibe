import React from "react";
import renderer from "react-test-renderer";
import { act, fireEvent, render, screen } from "@testing-library/react";
import MenuButton from "../MenuButton";
import Bolt from "../../Icon/Icons/components/Bolt";
import { Button } from "../../index";

jest.useFakeTimers();

describe("MenuButton", () => {
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
        <MenuButton component={Bolt} text="Hello">
          <div>Menu</div>
        </MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with .dummy-class-name", () => {
    const tree = renderer
      .create(
        <MenuButton className="dummy-class-name">
          <div>Menu</div>
        </MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with tooltip content", () => {
    const tree = renderer
      .create(
        <MenuButton tooltipContent="tooltip content">
          <div>Menu</div>
        </MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with showTooltipOnlyOnTriggerElement and tooltip content", () => {
    const tree = renderer
      .create(
        <MenuButton showTooltipOnlyOnTriggerElement tooltipContent="tooltip content">
          <div>Menu</div>
        </MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with showTooltipOnlyOnTriggerElement and without tooltip content", () => {
    const tree = renderer
      .create(
        <MenuButton showTooltipOnlyOnTriggerElement>
          <div>Menu</div>
        </MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with a default Menu icon at the end", () => {
    const tree = renderer
      .create(
        <MenuButton text="Hello" componentPosition={MenuButton.componentPositions.START}>
          <div>Menu</div>
        </MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with Button triggerElement", () => {
    const tree = renderer
      .create(
        <MenuButton
          triggerElement={props => (
            <Button kind={Button.kinds.PRIMARY} {...props} className={""}>
              Button
            </Button>
          )}
        ></MenuButton>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  // TODO - fix this test
  it.skip("renders correctly with open state", () => {
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

  describe("Enter", () => {
    it.each`
      closeDialogOnContentClick | expected
      ${true}                   | ${"close"}
      ${false}                  | ${"not close"}
    `(
      "should $expected menu after clicking enter when closeDialogOnContentClick is $closeDialogOnContentClick",
      async ({ closeDialogOnContentClick }) => {
        const { getByLabelText } = render(
          <MenuButton ariaLabel="Menu Button" closeDialogOnContentClick={closeDialogOnContentClick}>
            <div>Menu</div>
          </MenuButton>
        );
        const button = getByLabelText("Menu Button");
        act(() => {
          fireEvent.click(button);
          jest.advanceTimersByTime(1000);
        });
        expect(await screen.findByText("Menu")).toBeTruthy();
        act(() => {
          fireEvent.keyDown(button, { key: "Enter", code: "Enter", charCode: 13 });
          jest.advanceTimersByTime(1000);
        });
        if (closeDialogOnContentClick) {
          expect(await screen.queryByText("Menu")).toBeFalsy();
        } else {
          expect(await screen.queryByText("Menu")).toBeTruthy();
        }
      }
    );
  });
});
