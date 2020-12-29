import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";
import Divider from "../../../Divider/Divider";
import MenuTitle from "../../MenuTitle/MenuTitle";
import { FlexLayout, selectIcon } from "../../../storybook-helpers";

import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";

import Icon from "../../../Icon/Icon";

import { Activity, Archive, Settings, Invite } from "../../../Icon/Icons";

const renderMenuItems = () => {
  return [
    <MenuTitle id="menu-title-1" caption={"Caption"} captionPosition={MenuTitle.positions.TOP} />,
    <MenuItem
      id="menu-item-1"
      title={"Sombody"}
      icon={Activity}
      subMenuRenderer={true}
      onClick={() => {
        alert("1");
      }}
    />,
    <MenuItem
      id="menu-item-2"
      title={"Come"}
      icon={Archive}
      subMenuRenderer={true}
      onClick={() => {
        alert("2");
      }}
    />,
    <MenuItem
      id="menu-item-3"
      title={"Get her"}
      icon={Settings}
      subMenuRenderer={true}
      onClick={() => {
        alert("3");
      }}
    />,
    <MenuTitle id="menu-title-2" caption={"Caption"} />,
    <MenuItem
      id="menu-item-4"
      title={"Like a"}
      icon={"fa fa-star-o"}
      subMenuRenderer={true}
      onClick={() => {
        alert("4");
      }}
    />,
    <MenuItem
      id="menu-item-5"
      title={"Striper"}
      icon={Invite}
      subMenuRenderer={true}
      onClick={() => {
        alert("5");
      }}
    />,
    <Divider id="devider" />,
    <MenuItem
      id="menu-item-6"
      title={"She's dancing"}
      icon={"fa fa-star-o"}
      subMenuRenderer={true}
      onClick={() => {
        alert("6");
      }}
    />,
    <MenuItem
      id="menu-item-7"
      title={"When disabled"}
      icon={"fa fa-star-o"}
      disabled={true}
      onClick={() => {
        alert("7");
      }}
    />
  ];
};

export const Sandbox = () => {
  const iconType = select("icon type", { FONT: Icon.type.ICON_FONT, SVG: Icon.type.SVG }, Icon.type.SVG);
  const icon = iconType === Icon.type.SVG ? selectIcon("SVG icon", "Activity") : text("font icon", "fa fa-star");
  return (
    <div style={{ width: 200 }}>
      <MenuItem
        id="menu-item"
        title={text("title", "My item")}
        icon={icon}
        disabled={boolean("disabled", false)}
        onClick={() => alert("hello")}
      />
    </div>
  );
};

export const States = () => (
  <div style={{ width: 700 }}>
    <FlexLayout>
      <StoryLine title="Menu item">
        <MenuItem id="menu-item" title={("title", "My item")} icon={"fa fa-star-o"} iconType={Icon.type.ICON_FONT} />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu item with svg icon">
        <MenuItem id="menu-item" title={"SVG icon item"} icon={Activity} iconType={Icon.type.ICON_SVG} />
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Disabled menu item">
        <MenuItem id="menu-item" title={"Disabled item"} icon={"fa fa-star-o"} disabled={true} />
      </StoryLine>
    </FlexLayout>
  </div>
);

export const subMenu = () => {
  const iconType = select("icon type", { FONT: Icon.type.ICON_FONT, SVG: Icon.type.SVG }, Icon.type.SVG);
  const icon = iconType === Icon.type.SVG ? selectIcon("SVG icon", "Activity") : text("font icon", "fa fa-star");
  return (
    <div>
      <div style={{ width: "260px" }}>
        <MenuItem
          id="menu-item"
          title={text("title", "Hover me to see the sub menu")}
          icon={icon}
          disabled={boolean("disabled", false)}
          onClick={() => alert("hello")}
        >
          <Menu id="menu" size={Menu.sizes.SMALL}>
            {renderMenuItems()}
          </Menu>
        </MenuItem>
      </div>
    </div>
  );
};

export default {
  title: "Work in progress/Menu/MenuItem",
  component: MenuItem
};
