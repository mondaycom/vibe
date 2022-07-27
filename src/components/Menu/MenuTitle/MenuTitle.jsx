import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { CAPTION_POSITIONS } from "./MenuTitleConstants";
import "./MenuTitle.scss";

const MenuTitle = ({
  className,
  // Backward compatibility for props naming
  classname,
  caption,
  captionPosition,
  id
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
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
  return <div className={cx("monday-style-menu-title", overrideClassName)}>{renderCaptionIfNeeded()}</div>;
};

MenuTitle.positions = CAPTION_POSITIONS;
MenuTitle.captionPositions = CAPTION_POSITIONS;
MenuTitle.isMenuChild = true;

MenuTitle.defaultProps = {
  className: undefined,
  caption: "",
  id: "",
  captionPosition: MenuTitle.positions.BOTTOM
};

MenuTitle.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  id: PropTypes.string,
  captionPosition: PropTypes.oneOf([MenuTitle.positions.BOTTOM, MenuTitle.positions.TOP, MenuTitle.positions.CENTER])
};

export default MenuTitle;
