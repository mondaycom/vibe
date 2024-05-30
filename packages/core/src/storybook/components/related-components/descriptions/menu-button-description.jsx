import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import MenuButton from "../../../../components/MenuButton/MenuButton";
import Menu from "../../../../components/Menu/Menu/Menu";
import MenuItem from "../../../../components/Menu/MenuItem/MenuItem";
import Sun from "../../../../components/Icon/Icons/components/Sun";
import Moon from "../../../../components/Icon/Icons/components/Moon";
import Favorite from "../../../../components/Icon/Icons/components/Favorite";

export const MenuButtonDescription = () => {
  const component = useMemo(
    () => (
      <MenuButton>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} iconType={MenuItem.iconType.SVG} title="The sun" />
          <MenuItem icon={Moon} iconType={MenuItem.iconType.SVG} title="The moon" />
          <MenuItem icon={Favorite} iconType={MenuItem.iconType.SVG} title="And the stars" />
        </Menu>
      </MenuButton>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="MenuButton"
      href="/?path=/docs/buttons-menubutton--docs"
      description="A component to open content next to another component"
    />
  );
};
