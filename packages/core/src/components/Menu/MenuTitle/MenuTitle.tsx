import cx from "classnames";
import React, { FC } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import Text from "../../Text/Text";
import { MenuTitleCaptionPosition as MenuTitleCaptionPositionEnum } from "./MenuTitleConstants";
import { MenuTitleCaptionPosition } from "./MenuTitle.type";
import { VibeComponentProps, withStaticProps } from "../../../types";
import styles from "./MenuTitle.module.scss";

export interface MenuTitleProps extends VibeComponentProps {
  /**
   * The caption text displayed alongside the title.
   */
  caption?: string;
  /**
   * The position of the caption relative to the title.
   */
  captionPosition?: MenuTitleCaptionPosition;
}

const MenuTitle: FC<MenuTitleProps> & {
  positions?: typeof MenuTitleCaptionPositionEnum;
  captionPositions?: typeof MenuTitleCaptionPositionEnum;
  isMenuChild?: boolean;
} = ({ className, caption = "", captionPosition = "bottom", id, "data-testid": dataTestId }: MenuTitleProps) => {
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
      type="text2"
      className={cx(styles.title, className)}
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
  positions: MenuTitleCaptionPositionEnum,
  captionPositions: MenuTitleCaptionPositionEnum
});
