import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CAPTION_POSITIONS } from "./MenuTitleConstants";
import "./MenuTitle.scss";

const MenuTitle = ({ classname, caption, captionPosition, id }) => {
  const renderCaptionIfNeeded = () => {
    if (caption) {
      return (
        <label
          className={`monday-style-menu-title__caption monday-style-menu-title__caption--${captionPosition}`}
          id={id}
        >
          {caption}
        </label>
      );
    }
  };
  return <div className={cx("monday-style-menu-title", classname)}>{renderCaptionIfNeeded()}</div>;
};

MenuTitle.positions = CAPTION_POSITIONS;
MenuTitle.isMenuChild = true;

MenuTitle.defaultProps = {
  classname: "",
  caption: "",
  id: "",
  captionPosition: MenuTitle.positions.BOTTOM
};

MenuTitle.propTypes = {
  classname: PropTypes.string,
  caption: PropTypes.string,
  id: PropTypes.string,
  captionPosition: PropTypes.oneOf([MenuTitle.positions.BOTTOM, MenuTitle.positions.TOP, MenuTitle.positions.CENTER])
};

export default MenuTitle;
