import React from "react";
import { MenuItem, MenuItemProps } from "../../../Menu";
import { withStaticProps } from "../../../../types";
import { getTestId } from "../../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "src/tests/constants";
export interface BreadcrumbMenuItemProps extends MenuItemProps {
  /** Link to navigate to when item is clicked */
  link?: string;
}

const BreadcrumbMenuItem = ({ id, "data-testid": dataTestId, link, onClick, ...rest }: BreadcrumbMenuItemProps) => {
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
      {...rest}
    />
  );
};

export default withStaticProps(BreadcrumbMenuItem, {
  isMenuChild: true,
  isSelectable: true
});
