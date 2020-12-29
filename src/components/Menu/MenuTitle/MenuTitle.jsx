import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { CAPTION_POSITIONS } from "./MenuTitleConstants";
import "./MenuTitle.scss";

const MenuTitle = ({ classname, caption, captionPosition }) => {
  const renderCaptionIfNeeded = () => {
    if (caption) {
      return (
        <div className={`monday-style-menu-title__caption monday-style-menu-title__caption--${captionPosition}`}>
          {caption}
        </div>
      );
    }
  };

  const renderDivider = () => {
    return <div className="monday-style-menu-title__divider" />;
  };

  const renderContent = () => {
    switch (captionPosition) {
      case CAPTION_POSITIONS.TOP: {
        return (
          <>
            {renderCaptionIfNeeded()}
            {renderDivider()}
          </>
        );
      }
      case CAPTION_POSITIONS.CENTER: {
        return renderCaptionIfNeeded();
      }
      case CAPTION_POSITIONS.BOTTOM: {
        return (
          <>
            {renderDivider()}
            {renderCaptionIfNeeded()}
          </>
        );
      }
    }
  };
  return <div className={cx("monday-style-menu-title", classname)}>{renderContent()}</div>;
};

MenuTitle.positions = CAPTION_POSITIONS;

MenuTitle.defaultProps = {
  classname: "",
  caption: "",
  captionPosition: CAPTION_POSITIONS.BOTTOM
};

MenuTitle.propTypes = {
  classname: PropTypes.string,
  caption: PropTypes.string,
  captionPosition: PropTypes.oneOf([CAPTION_POSITIONS.BOTTOM, CAPTION_POSITIONS.TOP, CAPTION_POSITIONS.CENTER])
};

export default MenuTitle;
