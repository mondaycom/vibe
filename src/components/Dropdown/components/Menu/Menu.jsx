/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import cx from "classnames";
import { components } from "react-select";
import "./menu.scss";

const Menu = props => {
  const { isOpen, children, Renderer } = props;
  return (
    <components.Menu
      {...props}
      className={cx("menu", {
        "dropdown-wrapper__menu--open": isOpen
      })}
    >
      {Renderer && Renderer(props)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
