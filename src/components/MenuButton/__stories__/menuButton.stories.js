import React from "react";
import { select, boolean } from "@storybook/addon-knobs";
import { withPerformance } from "storybook-addon-performance";
import MenuButton from "../MenuButton";
import { ComponentStateDescription, FlexLayout } from "../../storybook-helpers";
import DropdownChevronDown from "../../Icon/Icons/components/DropdownChevronDown";
import "./menuButton.style.scss";
import { Menu, MenuItem, MenuTitle } from "../../index";
import { Favorite, Sun, Moon } from "../../Icon/Icons";

function MenuButtonContent() {
  return <div className="menu-button-content-story">I can be whatever i want to be!</div>;
}

export const Sandbox = () => (
  <div>
    <MenuButton
      id="Knobs"
      size={select("Size", MenuButton.sizes, MenuButton.sizes.MEDIUM)}
      closeDialogOnContentClick={boolean("Close Dialog On Content Click", false)}
      dialogPaddingSize={select("Dialog Padding Size", MenuButton.paddingSizes, MenuButton.paddingSizes.MEDIUM)}
      ariaLabel="Default menu icon"
    >
      <Menu id="menu" size={Menu.sizes.MEDIUM}>
        <MenuTitle caption="Look up, you might see" captionPosition={MenuTitle.positions.TOP} />
        <MenuItem icon={Sun} iconType={MenuItem.iconType.SVG} title="The sun" />
        <MenuItem icon={Moon} iconType={MenuItem.iconType.SVG} title="The moon" />
        <MenuItem icon={Favorite} iconType={MenuItem.iconType.SVG} title="And the stars" />
      </Menu>
    </MenuButton>
  </div>
);

export const DifferentIcon = () => (
  <div>
    <MenuButton component={DropdownChevronDown} ariaLabel={"chevron menu icon menu button"}>
      <MenuButtonContent />
    </MenuButton>
  </div>
);

export const Sizes = () => (
  <FlexLayout fullWidth spaceBetween className="monday-button-story-ai ">
    <section>
      <MenuButton size={MenuButton.sizes.XXS} ariaLabel={"extra extra small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"XXS"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.XS} ariaLabel={"extra small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"XS"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.SMALL} ariaLabel={"small menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"SMALL"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.MEDIUM} ariaLabel={"medium menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"MEDIUM"} />
    </section>
    <section>
      <MenuButton size={MenuButton.sizes.LARGE} ariaLabel={"large menu button"}>
        <MenuButtonContent />
      </MenuButton>
      <ComponentStateDescription title={"LARGE"} />
    </section>
  </FlexLayout>
);

export default {
  title: "Components|MenuButton",
  component: MenuButton,
  decorators: [withPerformance]
};
