import React from "react";
import MenuButton from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";
import { VibeComponentProps } from "src/types";
import styles from "./BreadcrumbsMenu.module.scss";

export interface BreadcrumbMenuProps extends VibeComponentProps {
  children: React.ReactNode;
}

const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({ children, ...props }) => {
  return (
    <li className={styles.breadcrumbMenuWrapper} {...props}>
      <MenuButton size={MenuButton.sizes.XXS} closeMenuOnItemClick removeTabCloseTrigger>
        <Menu size={Menu.sizes.MEDIUM} focusItemIndexOnMount={0} ariaLabel="Expanded Breadcrumbs">
          {children}
        </Menu>
      </MenuButton>
    </li>
  );
};

export default BreadcrumbMenu;
