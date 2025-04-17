import React from "react";
import cx from "classnames";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import { VibeComponentProps } from "../../../../types";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
import styles from "./BreadcrumbMenuItem.module.scss";

export interface BreadcrumbMenuItemProps extends VibeComponentProps {
  /** The display text. */
  text: string;
  /** Should item be disabled. */
  disabled?: boolean;
  /** Icon to display in the menu item */
  icon?: React.ComponentType;
  /** Callback function to be called when the item is clicked */
  onClick?: (event: React.MouseEvent) => void;
  /** Should the item be marked as selected */
  selected?: boolean;
  /** Link to navigate to when item is clicked */
  link?: string;
}

const BreadcrumbMenuItem: React.FC<BreadcrumbMenuItemProps> = ({
  className,
  text,
  disabled = false,
  icon,
  onClick,
  selected,
  link,
  id,
  "data-testid": dataTestId
}) => {
  return (
    <MenuItem
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU_ITEM, id)}
      className={cx(styles.breadcrumbMenuItem, className)}
      title={text}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      selected={selected}
      link={link}
    />
  );
};

export default BreadcrumbMenuItem;
