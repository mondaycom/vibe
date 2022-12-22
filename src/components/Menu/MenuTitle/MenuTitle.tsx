import React, { FC } from "react";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { MenuTitleCaptionPosition } from "./MenuTitleConstants";
import { VibeComponentProps } from "../../../types";
import "./MenuTitle.scss";

interface MenuTitleProps extends VibeComponentProps {
  /** Backward compatibility for props naming **/
  classname?: string;
  caption?: string;
  captionPosition?: MenuTitleCaptionPosition;
}

const MenuTitle: FC<MenuTitleProps> & {
  positions?: typeof MenuTitleCaptionPosition;
  captionPositions?: typeof MenuTitleCaptionPosition;
  isMenuChild?: boolean;
} = ({
  className,
  // Backward compatibility for props naming
  classname,
  caption = "",
  captionPosition = MenuTitle.positions.BOTTOM,
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

Object.assign(MenuTitle, {
  positions: MenuTitleCaptionPosition,
  captionPositions: MenuTitleCaptionPosition,
  isMenuChild: true
});

export default MenuTitle;
