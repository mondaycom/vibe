import camelCase from "lodash/camelCase";
import { ELEMENT_TYPES, getTestId } from "../../../utils/test-utils";
import cx from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { CAPTION_POSITIONS } from "./MenuTitleConstants";
import styles from "./MenuTitle.module.scss";

const MenuTitle = ({
  className,
  // Backward compatibility for props naming
  classname,
  caption,
  captionPosition,
  id,
  "data-testid": dataTestId
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, classname]);
  const renderCaptionIfNeeded = () => {
    if (caption) {
      return (
        <label
          className={cx(
            styles.caption,
            "monday-style-menu-title__caption",
            styles[camelCase("caption--" + captionPosition)],
            `monday-style-menu-title__caption--${captionPosition}`
          )}
          id={id}
          data-testid={dataTestId || getTestId(ELEMENT_TYPES.MENU_TITLE, id)}
        >
          {caption}
        </label>
      );
    }
  };
  return (
    <div
      className={cx(styles.title, "monday-style-menu-title", overrideClassName)}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.MENU_TITLE, id)}
    >
      {renderCaptionIfNeeded()}
    </div>
  );
};

MenuTitle.positions = CAPTION_POSITIONS;
MenuTitle.captionPositions = CAPTION_POSITIONS;
MenuTitle.isMenuChild = true;

MenuTitle.defaultProps = {
  className: undefined,
  caption: "",
  id: undefined,
  captionPosition: MenuTitle.positions.BOTTOM
};

MenuTitle.propTypes = {
  className: PropTypes.string,
  caption: PropTypes.string,
  id: PropTypes.string,
  captionPosition: PropTypes.oneOf([MenuTitle.positions.BOTTOM, MenuTitle.positions.TOP, MenuTitle.positions.CENTER])
};

export default MenuTitle;
