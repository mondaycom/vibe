import React from "react";
import { MenuItem, MenuItemButton } from "../../../Menu";
import { SubIcon, VibeComponentProps, withStaticProps } from "../../../../types";
import { ComponentDefaultTestId, getTestId } from "../../../../tests/test-ids-utils";
export interface BreadcrumbMenuItemProps extends VibeComponentProps {
  /** The display text. */
  text: string;
  /** Icon to display in the menu item */
  icon?: SubIcon;
  /** Callback function to be called when the item is clicked */
  onClick?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  /** Link to navigate to when item is clicked */
  link?: string;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is selected */
  selected?: boolean;
}

const BreadcrumbMenuItem = ({
  className,
  text,
  icon,
  onClick,
  link,
  id,
  disabled = false,
  selected = false,
  "data-testid": dataTestId,
  ...rest
}: BreadcrumbMenuItemProps) => {
  // Create a custom onClick handler to handle link navigation if link is provided
  const handleClick = link
    ? (event: React.MouseEvent | React.KeyboardEvent) => {
        if (onClick) onClick(event);
        if (!disabled) window.open(link, "_blank");
      }
    : onClick;

  return (
    <MenuItem
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.BREADCRUMB_MENU_ITEM, id)}
      className={className}
      icon={icon}
      onClick={handleClick}
      disabled={disabled}
      {...rest}
      title={text}
    />
  );
};

export default withStaticProps(BreadcrumbMenuItem, {
  isMenuChild: true,
  isSelectable: true
});
