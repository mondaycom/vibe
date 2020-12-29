import React from "react";
import Menu from "../Menu";
import { FlexLayout } from "../../../storybook-helpers";
import { text, boolean, number, select } from "@storybook/addon-knobs";
import StoryLine from "../../../../StoryBookComponents/StoryLink/StoryLine";
import MenuItem from "../../MenuItem/MenuItem";
import MenuTitle from "../../MenuTitle/MenuTitle";
import Divider from "../../../Divider/Divider";
import { selectIcon } from "../../../storybook-helpers";
import { Activity, Archive, Settings, Invite } from "../../../Icon/Icons";
import { withPerformance } from "storybook-addon-performance";

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

const renderMenuItem = index => {
  return (
    <MenuItem
      id={`menu-item-${index}`}
      title={text(`MenuItem ${index} name`, "item")}
      icon={selectIcon(`MenuItem ${index} icon`, "Activity")}
      disabled={boolean(`MenuItem ${index} disabled`, false)}
      onClick={() => {
        alert(index);
      }}
    />
  );
};

const renderDivider = index => {
  return <Divider id={`menu-divider-${index}`} />;
};

const renderMenuTitle = index => {
  return (
    <MenuTitle
      id={`menu-title-${index}`}
      caption={text(`MenuTitle ${index} caption`, "Caption")}
      captionPosition={select(
        `MenuTitle ${index} position`,
        {
          TOP: MenuTitle.positions.TOP,
          BOTTOM: MenuTitle.positions.BOTTOM,
          CENTER: MenuTitle.positions.CENTER
        },
        MenuTitle.positions.BOTTOM
      )}
    />
  );
};
const renderItem = index => {
  const itemType = select(`Item ${index} type`, {
    MenuItem: "MenuItem",
    Divider: "Divider",
    MenuTitle: "MenuTitle"
  });

  switch (itemType) {
    case "MenuItem": {
      return renderMenuItem(index);
    }
    case "Divider": {
      return renderDivider(index);
    }
    case "MenuTitle": {
      return renderMenuTitle(index);
    }
    default: {
      return renderMenuItem(index);
    }
  }
};

const renderMenuItemsByCount = itemsCount => {
  const items = [];
  for (var i = 0; i < itemsCount; i++) {
    items.push(renderItem(i));
  }

  return items;
};

export const Sandbox = () => {
  const itemsCount = number("itemsCount", 3);

  return (
    <div>
      <Menu
        id="menu"
        size={select("size", {
          SMALL: "small",
          MEDIUM: "medium",
          LARGE: "large"
        })}
      >
        {renderMenuItemsByCount(itemsCount)}
      </Menu>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div style={{ width: 700 }}>
      <FlexLayout>
        <StoryLine title="Small">
          <Menu id="menu" size={Menu.sizes.SMALL}>
            {renderMenuItems()}
          </Menu>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Medium">
          <Menu id="menu" size={Menu.sizes.MEDIUM} tabIndex={1}>
            {renderMenuItems()}
          </Menu>
        </StoryLine>
      </FlexLayout>

      <FlexLayout>
        <StoryLine title="Large">
          <Menu id="menu" size={Menu.sizes.LARGE} tabIndex={2}>
            {renderMenuItems()}
          </Menu>
        </StoryLine>
      </FlexLayout>
    </div>
  );
};

export default {
  title: "Work in progress/Menu/Menu",
  component: Menu,
  decorators: [withPerformance]
};
