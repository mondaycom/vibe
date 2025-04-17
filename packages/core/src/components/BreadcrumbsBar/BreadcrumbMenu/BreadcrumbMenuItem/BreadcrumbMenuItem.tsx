import React from "react";
import { MenuItem, MenuItemProps } from "../../../Menu";
import { withStaticProps } from "../../../../types";
export interface BreadcrumbMenuItemProps extends MenuItemProps {
  /** Link to navigate to when item is clicked */
  link?: string;
}

const BreadcrumbMenuItem = ({ link, onClick, ...rest }: BreadcrumbMenuItemProps) => {
  // Create a custom onClick handler to handle link navigation if link is provided
  const handleClick = link
    ? (event: React.MouseEvent | React.KeyboardEvent) => {
        if (onClick) onClick(event);
        window.open(link, "_blank");
      }
    : onClick;

  return <MenuItem {...rest} onClick={handleClick} />;
};

export default withStaticProps(BreadcrumbMenuItem, {
  isMenuChild: true,
  isSelectable: true
});
