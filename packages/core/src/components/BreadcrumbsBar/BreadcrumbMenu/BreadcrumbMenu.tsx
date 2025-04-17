import React from "react";
import cx from "classnames";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import MenuButton from "../../MenuButton/MenuButton";
import { DialogPosition } from "../../Dialog/Dialog.types";
import { VibeComponentProps } from "../../../types";
import styles from "./BreadcrumbMenu.module.scss";

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
    <li
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_ITEM, id)}
      className={cx(styles.breadcrumbMenuWrapper, className)}
    >
      <MenuButton
        size="small"
        dialogPosition={dialogPosition}
        onMenuShow={onMenuShow}
        onMenuHide={onMenuHide}
        className={styles.menuButton}
      >
        {children}
      </MenuButton>
    </li>
  );
};

export default BreadcrumbMenu;
