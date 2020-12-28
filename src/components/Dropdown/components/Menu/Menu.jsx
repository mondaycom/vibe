/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import { components } from "react-select";
import "./Menu.scss";

const Menu = props => {
  const { isOpen, children } = props;
  return (
    <components.Menu
      {...props}
      className={cx("menu", {
        "dropdown-wrapper__menu--open": isOpen
      })}
    >
      {children}
    </components.Menu>
  );
};

export default Menu;
