import React, { forwardRef, type ForwardRefExoticComponent, type RefAttributes } from "react";
import { MenuItem, type MenuItemProps } from "../../../Menu";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";

export interface BreadcrumbMenuItemProps extends MenuItemProps {
  /** Link to navigate to when item is clicked */
  link?: string;
}

interface BreadcrumbMenuItemComponent
  extends ForwardRefExoticComponent<BreadcrumbMenuItemProps & RefAttributes<unknown>> {
  isMenuChild?: boolean;
  isSelectable?: boolean;
}

const BreadcrumbMenuItem: BreadcrumbMenuItemComponent = forwardRef<unknown, BreadcrumbMenuItemProps>(
  (
    { id, "data-testid": dataTestId, link, onClick, ...rest }: BreadcrumbMenuItemProps,
    ref: React.ForwardedRef<HTMLLIElement>
  ) => {
    const handleClick = link
      ? (event: React.MouseEvent | React.KeyboardEvent) => {
          if (onClick) onClick(event);
          if (link) window.open(link);
        }
      : onClick;

    return (
      <MenuItem
        id={id}
        onClick={handleClick}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU_ITEM, id)}
        ref={ref}
        {...rest}
      />
    );
  }
);

BreadcrumbMenuItem.isMenuChild = true;
BreadcrumbMenuItem.isSelectable = true;

export default BreadcrumbMenuItem;
