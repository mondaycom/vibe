import React, { forwardRef } from "react";
import MenuButton from "../../MenuButton/MenuButton";
import { Menu } from "../../Menu";
import { VibeComponentProps } from "../../../types";
import styles from "./BreadcrumbsMenu.module.scss";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";

export interface BreadcrumbMenuProps extends VibeComponentProps {
  children: React.ReactNode;
}
const BreadcrumbMenu = forwardRef(
  (
    { children, id, "data-testid": dataTestId, ...props }: BreadcrumbMenuProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    const menuButtonId = id || "breadcrumb-menu-button";
    const menuId = `${menuButtonId}-menu`;

    return (
      <li className={styles.breadcrumbMenuWrapper} {...props}>
        <MenuButton
          id={menuButtonId}
          size={"xxs"}
          closeMenuOnItemClick
          ariaLabel={"Hidden breadcrumbs menu"}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU, id)}
          ariaControls={menuId}
          ref={ref}
        >
          <Menu id={menuId} size={"medium"} focusItemIndexOnMount={0} ariaLabel="Expanded breadcrumbs menu">
            {children}
          </Menu>
        </MenuButton>
      </li>
    );
  }
);

export default BreadcrumbMenu;
