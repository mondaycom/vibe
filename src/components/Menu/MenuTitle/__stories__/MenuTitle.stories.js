import React from "react";
import MenuTitle from "components/Menu/MenuTitle/MenuTitle";
import Menu from "components/Menu/Menu/Menu";
import MenuItem from "components/MenuItem/MenuItem";
import { createComponentTemplate } from "../../../../storybook";

export const menuTitleTemplate = createComponentTemplate(MenuTitle);

export const menuTitleCaptionPositionsTemplate = () => [
  <Menu key="top">
    <MenuTitle caption="Top caption" captionPosition={MenuTitle.positions.top} />
    <MenuItem title="Menu item" />
  </Menu>,
  <Menu key="center">
    <MenuTitle caption="Center caption" captionPosition={MenuTitle.positions.CENTER} />
    <MenuItem title="Menu item" />
  </Menu>
];
