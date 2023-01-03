import camelCase from "lodash/camelCase";
import cx from "classnames";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import React, { FC } from "react";
import { MenuTitleCaptionPosition } from "./MenuTitleConstants";
import { VibeComponentProps } from "../../../types";
import styles from "./MenuTitle.module.scss";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";

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
            getStyle(styles, camelCase("caption--" + captionPosition)),
            `monday-style-menu-title__caption--${captionPosition}`
          )}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_TITLE, id)}
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
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_TITLE, id)}
    >
      {renderCaptionIfNeeded()}
    </div>
  );
};

Object.assign(MenuTitle, {
  positions: MenuTitleCaptionPosition,
  captionPositions: MenuTitleCaptionPosition,
  isMenuChild: true
});

export default MenuTitle;
