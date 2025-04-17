import React from "react";
import MenuButton, { MenuButtonProps } from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";

export interface BreadcrumbMenuProps extends MenuButtonProps {}

const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({
  children,
  ...props
}) => {
  return (
    <MenuButton
      size={MenuButton.sizes.SMALL}
      closeMenuOnItemClick
      closeDialogOnContentClick
      {...props}
    >
      <Menu
        size={Menu.sizes.MEDIUM} 
        focusOnMount 
        focusItemIndexOnMount={0}
        ariaLabel="Breadcrumb Menu Options"
      >
        {children}
      </Menu>
    </MenuButton>
  );
};

export default BreadcrumbMenu;
