import React from "react";
import MenuButton from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";
import { VibeComponentProps } from "src/types";
import styles from "./BreadcrumbsMenu.module.scss";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

export interface BreadcrumbMenuProps extends VibeComponentProps {
  children: React.ReactNode;
}

const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({ children, id, "data-testid": dataTestId, ...props }) => {
  return (
    <li className={styles.breadcrumbMenuWrapper} {...props}>
      <MenuButton
        id={id}
        size={MenuButton.sizes.XXS}
        closeMenuOnItemClick
        ariaLabel={"Hidden breadcrumbs menu"}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU, id)}
      >
        <Menu
          id={"breadcrumb-menu"}
          size={Menu.sizes.MEDIUM}
          focusItemIndexOnMount={0}
          ariaLabel="Expanded breadcrumbs menu"
        >
          {children}
        </Menu>
      </MenuButton>
    </li>
  );
};

export default BreadcrumbMenu;
