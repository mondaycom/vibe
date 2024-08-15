import React from "react";
import renderer from "react-test-renderer";
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import MenuButton from "../MenuButton";
import Bolt from "../../Icon/Icons/components/Bolt";
import Button from "../../Button/Button";
import MenuItem from "../../Menu/MenuItem/MenuItem";
import Menu from "../../Menu/Menu/Menu";
import { userEvent } from "@storybook/testing-library";

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
        <MenuButton size="large">
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
        <MenuButton text="Hello" componentPosition="start">
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
            <Button kind="primary" {...props} className={""}>
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
      await waitFor(() => {
        fireEvent.click(button);
      });
      const menu = await screen.findByText("Menu");
      expect(menu).toBeTruthy();
    });
  });

  describe("Item Click", () => {
    it.each`
      closeMenuOnItemClick | expected
      ${true}              | ${"close"}
      ${false}             | ${"not close"}
    `(
      "should $expected menu after clicking enter when closeMenuOnItemClick is $closeMenuOnItemClick",
      async ({ closeMenuOnItemClick }) => {
        const { getByLabelText } = render(
          <MenuButton ariaLabel="Menu Button" closeMenuOnItemClick={closeMenuOnItemClick}>
            <Menu>
              <MenuItem title="Menu Item" />
            </Menu>
          </MenuButton>
        );
        const button = getByLabelText("Menu Button");
        await waitFor(async () => {
          fireEvent.click(button);
          expect(await screen.findAllByText("Menu Item")).toBeTruthy();
          userEvent.type(button, "{enter}");
        });
        if (closeMenuOnItemClick) {
          await waitForElementToBeRemoved(() => screen.queryByText("Menu Item"));
          expect(screen.queryByText("Menu Item")).toBeFalsy();
        } else {
          expect(screen.queryByText("Menu Item")).toBeTruthy();
        }
      }
    );
  });
});
