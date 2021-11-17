import React from "react";
import cx from "classnames";
import { components } from "react-select";
import "./menu.scss";

const Menu = props => {
  const { children, Renderer } = props;
  return (
    <components.Menu {...props} className={cx("menu", "dropdown-menu-wrapper")}>
      {Renderer && Renderer(props)}
      {!Renderer && children}
    </components.Menu>
  );
};

export default Menu;
