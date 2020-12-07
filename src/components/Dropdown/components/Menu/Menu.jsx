import React from "react";
import cx from "classnames";
import { components } from "react-select";
import "./Menu.scss";

const Menu = props => (
  <components.Menu
    {...props}
    className={cx("menu", {
      "dropdown-wrapper__menu--open": props.isOpen
    })}
  >
    {props.children}
  </components.Menu>
);

export default Menu;
