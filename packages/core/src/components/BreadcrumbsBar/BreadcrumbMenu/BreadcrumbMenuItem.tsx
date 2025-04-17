import React, { forwardRef, ReactElement, Ref } from "react";
import MenuItem from "../../Menu/MenuItem/MenuItem";
import { MenuItemProps } from "../../Menu/MenuItem/MenuItem";
import { SubIcon, VibeComponent, VibeComponentProps } from "../../../types";
import { IconType } from "../../Icon/IconConstants";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import cx from "classnames";
import styles from "./BreadcrumbMenu.module.scss";

export interface BreadcrumbMenuItemProps extends VibeComponentProps {
  title?: string;
  icon?: SubIcon;
  iconType?: IconType;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  active?: boolean;
}

export const BreadcrumbMenuItem: VibeComponent<BreadcrumbMenuItemProps, HTMLElement> = forwardRef(
  (
    {
      className,
      id,
      "data-testid": dataTestId,
      title = "",
      icon = null,
      iconType = IconType.SVG,
      disabled = false,
      onClick = undefined,
      active = false
    },
    ref: Ref<HTMLElement>
  ) => {
    const testId = dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU_ITEM, id);

    // We pass all props to MenuItem, as BreadcrumbMenuItem is just a contextual wrapper
    const menuItemProps: MenuItemProps = {
      className: cx(styles.breadcrumbMenuItem, className),
      id,
      "data-testid": testId,
      title,
      icon,
      iconType,
      disabled,
      onClick,
      selected: active // Map 'active' to 'selected' for MenuItem
    };

    // Pass the ref to the underlying MenuItem
    return <MenuItem {...menuItemProps} ref={ref} />;
  }
);
