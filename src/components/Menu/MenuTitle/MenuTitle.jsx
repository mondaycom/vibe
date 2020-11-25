import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CAPTION_POSITIONS } from "./MenuTitleConstants";
import "./MenuTitle.scss";

const MenuTitle = ({ classname, caption, captionPosition }) => {
  const renderTopCaptionIfNeeded = () => {
    if (caption && captionPosition === CAPTION_POSITIONS.TOP) {
      return (
        <div className="monday-style-menu-title__caption monday-style-menu-title__caption--top">
          {caption}
        </div>
      );
    }
  };

  const renderBottomCaptionIfNeeded = () => {
    if (caption && captionPosition === CAPTION_POSITIONS.BOTTOM) {
      return (
        <div className="monday-style-menu-title__caption monday-style-menu-title__caption--bottom">
          {caption}
        </div>
      );
    }
  };

  const renderDivider = () => {
    if (caption && captionPosition === CAPTION_POSITIONS.CENTER) {
      return (
        <div className="monday-style-menu-title__caption monday-style-menu-title__caption--center">
          {caption}
        </div>
      );
    }

    return <div className="monday-style-menu-title__divider"></div>;
  };

  return (
    <div className={cx("monday-style-menu-title", classname)}>
      {renderTopCaptionIfNeeded()}
      {renderDivider()}
      {renderBottomCaptionIfNeeded()}
    </div>
  );
};

MenuTitle.defaultProps = {
  classname: "",
  caption: "",
  captionPosition: CAPTION_POSITIONS.BOTTOM,
};

MenuTitle.propTypes = {
  classname: PropTypes.string,
  caption: PropTypes.string,
  captionPosition: PropTypes.oneOf([
    CAPTION_POSITIONS.BOTTOM,
    CAPTION_POSITIONS.TOP,
    CAPTION_POSITIONS.CENTER,
  ]),
};

export default MenuTitle;
