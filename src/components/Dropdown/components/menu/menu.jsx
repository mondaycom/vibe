import { ELEMENT_TYPES, getTestId } from "../../../../utils/test-utils";
import cx from "classnames";
import React from "react";
import { components } from "react-select";
import styles from "./menu.module.scss";

const Menu = props => {
  const { children, Renderer, selectProps, id, "data-testid": dataTestId } = props;

  const withFixedPosition = selectProps?.selectProps?.insideOverflowContainer;

  return (
    <components.Menu
      {...props}
      className={cx("menu", styles.wrapper, "dropdown-menu-wrapper", {
        [styles.fixedPosition]: withFixedPosition,
        ["dropdown-menu-wrapper--fixed-position"]: withFixedPosition
      })}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.DROPDOWN_MENU, id)}
    >
      {Renderer && Renderer(props)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
