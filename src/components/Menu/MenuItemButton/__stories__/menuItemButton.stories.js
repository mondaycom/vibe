/* eslint-disable no-unused-vars */
import React from "react";
import MenuItemButton from "../MenuItemButton";
import Menu from "../../Menu/Menu";
import { Invite } from "../../../Icon/Icons";

export const menuItemButtonKindsTemplate = args => [
  <Menu key="Primary">
    <MenuItemButton kind={MenuItemButton.kinds.PRIMARY}>Primary</MenuItemButton>
  </Menu>,
  <Menu key="Secondary">
    <MenuItemButton kind={MenuItemButton.kinds.SECONDARY}>Secondary</MenuItemButton>
  </Menu>,
  <Menu key="Tertiary">
    <MenuItemButton kind={MenuItemButton.kinds.TERTIARY}>Tertiary</MenuItemButton>
  </Menu>
];

export const menuItemButtonDisabledTemplate = args => [
  <Menu key="disabled-Primary">
    <MenuItemButton kind={MenuItemButton.kinds.PRIMARY} disabled disableReason="Disabled reason">
      Primary
    </MenuItemButton>
  </Menu>,
  <Menu key="disabled-Secondary">
    <MenuItemButton kind={MenuItemButton.kinds.SECONDARY} disabled disableReason="Disabled reason">
      Secondary
    </MenuItemButton>
  </Menu>,
  <Menu key="disabled-Tertiary">
    <MenuItemButton kind={MenuItemButton.kinds.TERTIARY} disabled disableReason="Disabled reason">
      Tertiary
    </MenuItemButton>
  </Menu>
];

export const menuItemButtonIconTemplate = args => [
  <Menu key="left">
    <MenuItemButton leftIcon={Invite}>Left icon</MenuItemButton>
  </Menu>,
  <Menu key="right">
    <MenuItemButton rightIcon={Invite}>Right icon</MenuItemButton>
  </Menu>
];
