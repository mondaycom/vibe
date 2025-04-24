import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from "react";
import { MenuItem, MenuItemProps } from "../../../Menu";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../../tests/constants";

export interface BreadcrumbMenuItemProps extends MenuItemProps {
  /** Link to navigate to when item is clicked */
  link?: string;
}

// Define the type for the component including static props
interface BreadcrumbMenuItemComponent extends ForwardRefExoticComponent<BreadcrumbMenuItemProps & RefAttributes<unknown>> {
  isMenuChild?: boolean;
  isSelectable?: boolean;
}

// Assign the forwardRef result to a variable with the explicit type
const BreadcrumbMenuItem: BreadcrumbMenuItemComponent = 
forwardRef<unknown, BreadcrumbMenuItemProps>(
  ({ id, "data-testid": dataTestId, link, onClick, ...rest }: BreadcrumbMenuItemProps, ref: React.ForwardedRef<HTMLLIElement>) => {
  // Create a custom onClick handler to handle link navigation if link is provided
  const handleClick = link
    ? (event: React.MouseEvent | React.KeyboardEvent) => {
        if (onClick) onClick(event);
        window.open(link, "_blank");
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
});

// Assign static props (now allowed by the type)
BreadcrumbMenuItem.isMenuChild = true;
BreadcrumbMenuItem.isSelectable = true;

export default BreadcrumbMenuItem;
