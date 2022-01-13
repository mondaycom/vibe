/* eslint-disable no-unused-vars */
import React from "react";
import MenuItemButton from "../MenuItemButton";
import Menu from "../../Menu/Menu";
import { Invite } from "../../../Icon/Icons";

export const menuItemButtonKindsTemplate = args => [
  <Menu>
    <MenuItemButton kind={MenuItemButton.kinds.PRIMARY}>Primary</MenuItemButton>
  </Menu>,
  <Menu>
    <MenuItemButton kind={MenuItemButton.kinds.SECONDARY}>Secondary</MenuItemButton>
  </Menu>,
  <Menu>
    <MenuItemButton kind={MenuItemButton.kinds.TERTIARY}>Tertiary</MenuItemButton>
  </Menu>
];

export const menuItemButtonDisabledTemplate = args => [
  <Menu>
    <MenuItemButton kind={MenuItemButton.kinds.PRIMARY} disabled disableReason="Disabled reason">
      Primary
    </MenuItemButton>
  </Menu>,
  <Menu>
    <MenuItemButton kind={MenuItemButton.kinds.SECONDARY} disabled disableReason="Disabled reason">
      Secondary
    </MenuItemButton>
  </Menu>,
  <Menu>
    <MenuItemButton kind={MenuItemButton.kinds.TERTIARY} disabled disableReason="Disabled reason">
      Tertiary
    </MenuItemButton>
  </Menu>
];

export const menuItemButtonIconTemplate = args => [
  <Menu>
    <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
  </Menu>,
  <Menu>
    <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
  </Menu>
];
