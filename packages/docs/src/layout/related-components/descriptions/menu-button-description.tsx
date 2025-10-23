import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { MenuButton, Menu, MenuItem } from "@vibe/core";
import { Sun, Moon, Favorite } from "@vibe/icons";

export const MenuButtonDescription = () => {
  const component = useMemo(
    () => (
      <MenuButton>
        <Menu id="menu" size={Menu.sizes.MEDIUM}>
          <MenuItem icon={Sun} iconType="svg" title="The sun" />
          <MenuItem icon={Moon} iconType="svg" title="The moon" />
          <MenuItem icon={Favorite} iconType="svg" title="And the stars" />
        </Menu>
      </MenuButton>
    ),
    []
  );
  return (
    <RelatedComponent
      component={component}
      title="MenuButton"
      href="/?path=/docs/components-menubutton--docs"
      description="A component to open content next to another component"
    />
  );
};
