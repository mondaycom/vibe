import cx from "classnames";
import React from "react";
import { components } from "react-select";
import styles from "./menu.module.scss";

const Menu = ({ children, Renderer, selectProps, dropdownMenuWrapperClassName, id, ariaLabel, ...props }) => {
  const rendererProps = {
    children,
    selectProps,
    ...props,
    innerProps: {
      ...props.innerProps,
      id,
      role: "listbox",
      "aria-label": ariaLabel
    }
  };

  const withFixedPosition =
    selectProps?.selectProps?.insideOverflowContainer || selectProps?.selectProps?.insideOverflowWithTransformContainer;

  // Temporary fix, which disables animation :
  // - when using menuPortalTarget or popupsContainerSelector there are issues that animation goes above the select preventing from tapping it (pr #1543)
  // - when using menuPosition="fixed" (e.g. inside of Modal) not whole list is visible for scroll cause of it (pr #1738)
  // const withoutAnimation =
  //   !!selectProps?.menuPortalTarget || !!selectProps.popupsContainerSelector || selectProps?.menuPosition === Dropdown.menuPositions.FIXED;
  // Always disable animation for now - messes up in too many places and isn't really noticeable
  const withoutAnimation = true;

  return (
    <components.Menu
      {...props}
      className={cx(
        styles.dropdownMenuWrapper,
        {
          [styles.dropdownMenuWrapperFixedPosition]: withFixedPosition,
          [styles.withoutAnimation]: withoutAnimation
        },
        dropdownMenuWrapperClassName
      )}
    >
      {Renderer && Renderer(rendererProps)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
