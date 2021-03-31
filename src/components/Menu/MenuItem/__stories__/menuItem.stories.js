import React from "react";
import { text, boolean, select } from "@storybook/addon-knobs";
import MenuItem from "../MenuItem";
import Menu from "../../Menu/Menu";
import MenuDivider from "../../MenuDivider/MenuDivider";
import MenuTitle from "../../MenuTitle/MenuTitle";
import { FlexLayout, selectIcon } from "../../../storybook-helpers";

import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";

import Icon from "../../../Icon/Icon";

import { Activity, Archive, Settings, Invite } from "../../../Icon/Icons";

const DISABLE_REASON = "You can't click me";

const subSubMenuRenderer = () => {
  return (
    <Menu tabIndex={0} id="menu-level-3" size={Menu.sizes.SMALL}>
      {[
        <MenuTitle id="sub-sub-menu-title-1" caption="sub-menu-Caption" captionPosition={MenuTitle.positions.TOP} />,
        <MenuItem id="sub-sub-menu-item-1" title="bla bla" icon={Activity} onClick={() => alert("1")} />,
        <MenuItem
          id="sub-sub-menu-item-2"
          title="bla blo bla bla"
          icon={Activity}
          onClick={() => console.log("bla bla")}
        />
      ]}
    </Menu>
  );
};

const anotherSubSubMenuRenderer = () => {
  return (
    <Menu tabIndex={0} id="menu-level-3-b" size={Menu.sizes.SMALL}>
      {[
        <MenuTitle id="sub-sub-menu-title-1-b" caption="sub-menu-Caption" captionPosition={MenuTitle.positions.TOP} />,
        <MenuItem id="sub-sub-menu-item-1-b" title="bla bla" icon={Activity} onClick={() => alert("1")} />,
        <MenuItem id="sub-sub-menu-item-2-b" title="bla blo bla" icon={Activity} onClick={() => alert("2")} />
      ]}
    </Menu>
  );
};

const renderMenuItems = ({ withSubSubMenu = false } = {}) => {
  return [
    <MenuTitle id="menu-title-1" caption={"Caption"} captionPosition={MenuTitle.positions.TOP} />,
    <MenuDivider />,
    <MenuItem
      id="menu-item-1"
      title={"Sombody"}
      icon={Activity}
      onClick={() => {
        alert("1");
      }}
    />,
    <MenuItem
      id="menu-item-2"
      title={"Come"}
      icon={Archive}
      onClick={() => {
        alert("2");
      }}
    >
      {withSubSubMenu && subSubMenuRenderer()}
    </MenuItem>,
    <MenuItem
      id="menu-item-3"
      title={"Get her"}
      icon={Settings}
      onClick={() => {
        alert("3");
      }}
    >
      {withSubSubMenu && anotherSubSubMenuRenderer()}
    </MenuItem>,
    <MenuItem
      id="menu-item-4"
      title={"Like a"}
      icon={"fa fa-star-o"}
      onClick={() => {
        alert("4");
      }}
    />,
    <MenuItem
      id="menu-item-5"
      title={"Striper"}
      icon={Invite}
      onClick={() => {
        alert("5");
      }}
    />,
    <MenuDivider />,
    <MenuItem
      id="menu-item-6"
      title={"She's dancing"}
      icon={"fa fa-star-o"}
      onClick={() => {
        alert("6");
      }}
    />,
    <MenuItem
      id="menu-item-7"
      title={"When disabled"}
      icon={"fa fa-star-o"}
      disabled={true}
      disableReason={DISABLE_REASON}
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
      <Menu tabIndex={0} id="main-menu" size={Menu.sizes.SMALL}>
        <MenuItem
          id="menu-item"
          title={text("title", "My item")}
          icon={icon}
          disabled={boolean("disabled", false)}
          disableReason={DISABLE_REASON}
          selected={boolean("selected", false)}
          onClick={() => alert("hello")}
        />
      </Menu>
    </div>
  );
};

export const States = () => (
  <div style={{ width: 700 }}>
    <FlexLayout>
      <StoryLine title="Menu item">
        <Menu size={Menu.sizes.SMALL}>
          <MenuItem id="menu-item" title={("title", "My item")} icon={"fa fa-star-o"} iconType={Icon.type.ICON_FONT} />
        </Menu>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Menu item with svg icon">
        <Menu size={Menu.sizes.SMALL}>
          <MenuItem id="menu-item" title={"SVG icon item"} icon={Activity} iconType={Icon.type.ICON_SVG} />
        </Menu>
      </StoryLine>
    </FlexLayout>
    <FlexLayout>
      <StoryLine title="Disabled menu item">
        <Menu size={Menu.sizes.SMALL}>
          <MenuItem id="menu-item" title={"Disabled item"} icon={"fa fa-star-o"} disabled={true} disableReason={DISABLE_REASON} />
        </Menu>
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
        <Menu tabIndex={0} id="main-menu" size={Menu.sizes.SMALL}>
          <MenuItem
            id="menu-item"
            title={text("title", " b Hover me to see the sub menu")}
            icon={icon}
            disabled={boolean("disabled", false)}
            disableReason={DISABLE_REASON}
            onClick={() => alert("hello")}
          >
            <Menu tabIndex={0} id="sub-menu" size={Menu.sizes.SMALL}>
              {renderMenuItems()}
            </Menu>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export const subSubMenu = () => {
  const iconType = select("icon type", { FONT: Icon.type.ICON_FONT, SVG: Icon.type.SVG }, Icon.type.SVG);
  const icon = iconType === Icon.type.SVG ? selectIcon("SVG icon", "Activity") : text("font icon", "fa fa-star");
  return (
    <div>
      <div style={{ width: "260px" }}>
        <Menu tabIndex={0} id="menu-level-1" size={Menu.sizes.SMALL} tabIndex="0">
          <MenuItem title={"Hover me to see the sub menu"} icon={icon} onClick={() => alert("hello")}>
            <Menu size={Menu.sizes.SMALL}>{renderMenuItems({ withSubSubMenu: true })}</Menu>
          </MenuItem>
          <MenuItem title={"menu item"} icon={icon} onClick={() => alert("hello")} />
          <MenuDivider />
          <MenuItem title={"menu item b"} icon={icon} onClick={() => alert("hello")} />
        </Menu>
      </div>
    </div>
  );
};

export const overflowMenuItem = () => {
  const iconType = select("icon type", { FONT: Icon.type.ICON_FONT, SVG: Icon.type.SVG }, Icon.type.SVG);
  const icon = iconType === Icon.type.SVG ? selectIcon("SVG icon", "Activity") : text("font icon", "fa fa-star");
  return (
    <div>
      <div style={{ width: "260px" }}>
        <Menu tabIndex={0} id="menu-level-1" size={Menu.sizes.SMALL}>
          <MenuItem
            id="menu-item-short-text"
            title="short text"
            icon={icon}
            disabled={boolean("disabled", false)}
            disableReason={DISABLE_REASON}
            onClick={() => alert("hello")}
          />

          <MenuItem
            id="menu-item-long-text"
            title="long text - bla bla bla bla bla bla bla bla bla bla bla"
            icon={icon}
            disabled={boolean("disabled", false)}
            disableReason={DISABLE_REASON}
            onClick={() => alert("hello")}
          />

          <MenuItem
            id="menu-item-long-text"
            title="long text with sub menu - bla bla bla bla bla bla bla bla bla bla bla"
            icon={icon}
            disabled={boolean("disabled", false)}
            disableReason={DISABLE_REASON}
            onClick={() => alert("hello")}
          >
            <Menu tabIndex={0} id="sub-menu" size={Menu.sizes.SMALL}>
              {renderMenuItems()}
            </Menu>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default {
  title: "Components/Menu/MenuItem",
  component: MenuItem
};
