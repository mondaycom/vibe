import React from "react";
import MenuButton from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";
import { VibeComponentProps } from "src/types";

export interface BreadcrumbMenuProps extends VibeComponentProps {
  children: React.ReactNode;
}

const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({ children, ...props }) => {
  return (
    <MenuButton 
      size={MenuButton.sizes.XXS} 
      closeMenuOnItemClick
      closeDialogOnContentClick
      removeTabCloseTrigger
      {...props}
    >
      <Menu 
        size={Menu.sizes.MEDIUM} 
        focusOnMount 
        ariaLabel="Breadcrumb Menu Options"
      >
        {children}
      </Menu>
    </MenuButton>
  );
};

export default BreadcrumbMenu;
