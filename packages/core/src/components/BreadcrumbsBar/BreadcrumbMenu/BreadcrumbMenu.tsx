import React from "react";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import MenuButton from "../../MenuButton/MenuButton";
import { DialogPosition } from "../../Dialog/Dialog.types";
import { VibeComponentProps } from "../../../types";
import styles from "./BreadcrumbMenu.module.scss";
import cx from "classnames";
import { Menu, MenuItem } from "../../Menu";
export interface BreadcrumbMenuProps extends VibeComponentProps {
  /** Position of the menu dialog */
  dialogPosition?: DialogPosition;
  /** Callback function to be called when the menu is shown */
  onMenuShow?: () => void;
  /** Callback function to be called when the menu is hidden */
  onMenuHide?: () => void;
  /** The children to render inside the menu */
  children?: React.ReactNode;
}

const BreadcrumbMenu: React.FC<BreadcrumbMenuProps> = ({
  className,
  dialogPosition = MenuButton.dialogPositions.BOTTOM_START,
  onMenuShow,
  onMenuHide,
  id,
  children,
  "data-testid": dataTestId
}) => {
  return (
    <MenuButton
      id={id}
      size={MenuButton.sizes.MEDIUM}
      dialogPosition={dialogPosition}
      onMenuShow={onMenuShow}
      onMenuHide={onMenuHide}
      className={cx(styles.menuButton, className)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU, id)}
    >
      <Menu size={Menu.sizes.MEDIUM}>
        {children}
      </Menu>
    </MenuButton>
  );
};

export default BreadcrumbMenu;
