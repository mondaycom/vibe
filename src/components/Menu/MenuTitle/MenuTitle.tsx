import cx from "classnames";
import React, { FC } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import Text from "../../Text/Text";
import { backwardCompatibilityForProperties } from "../../../helpers/backwardCompatibilityForProperties";
import { MenuTitleCaptionPosition } from "./MenuTitleConstants";
import { VibeComponentProps, withStaticProps } from "../../../types";
import styles from "./MenuTitle.module.scss";

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
          className={cx(styles.titleCaption, getStyle(styles, camelCase("title__caption--" + captionPosition)))}
          id={id}
          data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_TITLE_CAPTION, id)}
        >
          {caption}
        </label>
      );
    }
  };
  return (
    <Text
      color="secondary"
      size="small"
      className={cx(overrideClassName)}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_TITLE, id)}
    >
      {renderCaptionIfNeeded()}
    </Text>
  );
};

Object.assign(MenuTitle, {
  isMenuChild: true
});

export default withStaticProps(MenuTitle, {
  positions: MenuTitleCaptionPosition,
  captionPositions: MenuTitleCaptionPosition
});
