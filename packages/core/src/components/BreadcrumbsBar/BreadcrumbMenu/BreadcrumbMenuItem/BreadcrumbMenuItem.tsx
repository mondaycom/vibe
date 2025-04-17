import React from "react";
import MenuItem from "../../../Menu/MenuItem/MenuItem";
import { SubIcon, VibeComponentProps } from "../../../../types";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
export interface BreadcrumbMenuItemProps extends VibeComponentProps {
  /** The display text. */
  text: string;
  /** Icon to display in the menu item */
  icon?: SubIcon;
  /** Callback function to be called when the item is clicked */
  onClick?: (event: React.MouseEvent) => void;
  /** Link to navigate to when item is clicked */
  link?: string;
}

// Extend React.FC with the static property
type BreadcrumbMenuItemType = React.FC<BreadcrumbMenuItemProps> & {
  isMenuChild?: boolean;
};

const BreadcrumbMenuItem: BreadcrumbMenuItemType = ({
  className,
  text,
  icon,
  onClick,
  link,
  id,
  "data-testid": dataTestId
}) => {
  // Create a custom onClick handler to handle link navigation if link is provided
  const handleClick = link
    ? (event: React.MouseEvent) => {
        if (onClick) onClick(event);
        window.open(link, "_blank");
      }
    : onClick;

  return (
    <MenuItem
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU_ITEM, id)}
      className={className}
      title={text}
      icon={icon}
      onClick={handleClick}
    />
  );
};

BreadcrumbMenuItem.isMenuChild = true;

export default BreadcrumbMenuItem;
