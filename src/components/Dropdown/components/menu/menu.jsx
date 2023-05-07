import cx from "classnames";
import React from "react";
import { components } from "react-select";
import styles from "./menu.module.scss";

const Menu = ({ children, Renderer, selectProps, dropdownMenuWrapperClassName, ...props }) => {
  const withFixedPosition =
    selectProps?.selectProps?.insideOverflowContainer || selectProps?.selectProps?.insideOverflowWithTransformContainer;
  return (
    <components.Menu
      {...props}
      className={cx(
        styles.dropdownMenuWrapper,
        {
          [styles.dropdownMenuWrapperFixedPosition]: withFixedPosition
        },
        dropdownMenuWrapperClassName
      )}
    >
      {Renderer && Renderer(props)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
