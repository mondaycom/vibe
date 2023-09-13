import cx from "classnames";
import React from "react";
import { components } from "react-select";
import styles from "./menu.module.scss";

const Menu = ({ children, Renderer, selectProps, dropdownMenuWrapperClassName, ...props }) => {
  const rendererProps = { children, selectProps, ...props };
  const withFixedPosition =
    selectProps?.selectProps?.insideOverflowContainer || selectProps?.selectProps?.insideOverflowWithTransformContainer;
  // Temporary fix for menu animation is above the select when using menuPortalTarget
  const withoutAnimation = !!selectProps?.menuPortalTarget;
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
