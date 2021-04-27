import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import MenuItem from "../../MenuItem/MenuItem";
import MenuItemButton from "../MenuItemButton";
import Menu from "../../Menu/Menu";
import MenuDivider from "../../MenuDivider/MenuDivider";
import MenuTitle from "../../MenuTitle/MenuTitle";
import { FlexLayout, selectIcon } from "../../../storybook-helpers";

import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";

import Icon from "../../../Icon/Icon";

import { Activity, Archive, Settings, Invite } from "../../../Icon/Icons";

const DISABLE_REASON = "You can't click me";

const renderMenuItems = () => {
  return [
    <MenuTitle id="menu-title-1" caption={"Caption"} captionPosition={MenuTitle.positions.TOP} />,
    <MenuDivider />,
    <MenuItem
      id="menu-item-1"
      title={"First"}
      icon={Activity}
      onClick={() => {
        alert("1");
      }}
    />,
    <MenuItemButton
      id="menu-item-button-1"
      rightIcon={"fa fa-star-o"}
      kind={MenuItemButton.kinds.PRIMARY}
      onClick={() => {
        alert("Button 1");
      }}
    >
      Primary Button
    </MenuItemButton>,
    <MenuItem
      id="menu-item-2"
      title={"Second"}
      icon={Invite}
      onClick={() => {
        alert("2");
      }}
    />,
    <MenuDivider />,
    <MenuItem
      id="menu-item-3"
      title={"Third"}
      icon={"fa fa-star-o"}
      onClick={() => {
        alert("3");
      }}
    />,
    <MenuItemButton
      id="menu-item-button-2"
      kind={MenuItemButton.kinds.SECONDARY}
      leftIcon={"fa fa-star-o"}
      onClick={() => {
        alert("Button 2");
      }}
    >
      Secondary Button
    </MenuItemButton>,
    <MenuItemButton
      id="menu-item-button-3"
      kind={MenuItemButton.kinds.TERTIARY}
      leftIcon={"fa fa-star-o"}
      onClick={() => {
        alert("Button 3");
      }}
    >
      Tertiary Button
    </MenuItemButton>
  ];
};

export const subMenu = () => {
  return (
    <div>
      <div style={{ width: "260px" }}>
        <Menu tabIndex={0} id="main-menu" size={Menu.sizes.SMALL}>
          {renderMenuItems()}
        </Menu>
      </div>
    </div>
  );
};

export const States = () => (
  <div style={{ width: 700 }}>
    <FlexLayout>
      <StoryLine title="Primary with left icon">
        <Menu size={Menu.sizes.SMALL} id="menu-1">
          <MenuItemButton
            id="menu-item-button-1"
            leftIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.PRIMARY}
            onClick={() => {
              alert("Button");
            }}
          >
            Primary Button
          </MenuItemButton>
          <MenuItemButton
            id="menu-item-button-1"
            disabled
            leftIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.PRIMARY}
            onClick={() => {
              alert("Button");
            }}
            disableReason="Disabled Reason"
          >
            Disabled Primary Button
          </MenuItemButton>
        </Menu>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Secondary with right icon">
        <Menu size={Menu.sizes.SMALL} id="menu-2">
          <MenuItemButton
            id="menu-item-button-1"
            rightIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.SECONDARY}
            onClick={() => {
              alert("Button");
            }}
          >
            Secondary Button
          </MenuItemButton>
          <MenuItemButton
            id="menu-item-button-1"
            rightIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.SECONDARY}
            disabled
            disableReason="Disabled Reason"
            onClick={() => {
              alert("Button");
            }}
          >
            Disabled Secondary Button
          </MenuItemButton>
        </Menu>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Tertiary with both icons">
        <Menu size={Menu.sizes.SMALL} id="menu-3">
          <MenuItemButton
            id="menu-item-button-1"
            leftIcon={"fa fa-star-o"}
            rightIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.TERTIARY}
            onClick={() => {
              alert("Button");
            }}
          >
            Tertiary Button
          </MenuItemButton>
          <MenuItemButton
            id="menu-item-button-1"
            leftIcon={"fa fa-star-o"}
            rightIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.TERTIARY}
            disabled
            disableReason="Disabled Reason"
            onClick={() => {
              alert("Button");
            }}
          >
            Disabled Tertiary Button
          </MenuItemButton>
        </Menu>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Tertiary without icons">
        <Menu size={Menu.sizes.SMALL} id="menu-4">
          <MenuItemButton
            id="menu-item-button-1"
            kind={MenuItemButton.kinds.TERTIARY}
            onClick={() => {
              alert("Button");
            }}
          >
            Tertiary Button
          </MenuItemButton>
          <MenuItemButton
            id="menu-item-button-1"
            kind={MenuItemButton.kinds.TERTIARY}
            disabled
            disableReason="Disabled Reason"
            onClick={() => {
              alert("Button");
            }}
          >
            Disabled Tertiary Button
          </MenuItemButton>
        </Menu>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Primary with overflow">
        <Menu size={Menu.sizes.SMALL} id="menu-5">
          <MenuItemButton
            id="menu-item-button-1"
            leftIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.PRIMARY}
            onClick={() => {
              alert("Button");
            }}
          >
            Primary Button Very Long Text
          </MenuItemButton>
          <MenuItemButton
            id="menu-item-button-1"
            disabled
            leftIcon={"fa fa-star-o"}
            kind={MenuItemButton.kinds.PRIMARY}
            onClick={() => {
              alert("Button");
            }}
            disableReason="Disabled Reason"
          >
            Disabled Primary Button Long Text
          </MenuItemButton>
        </Menu>
      </StoryLine>
    </FlexLayout>
  </div>
);

export default {
  title: "Components/Menu/MenuItemButton",
  component: MenuItemButton
};
