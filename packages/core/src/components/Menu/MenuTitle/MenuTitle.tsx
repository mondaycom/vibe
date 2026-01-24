import React from "react";
import cx from "classnames";
import { camelCase } from "es-toolkit";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import { Text } from "@vibe/typography";
import { MenuTitleCaptionPosition as MenuTitleCaptionPositionEnum } from "./MenuTitleConstants";
import { type MenuTitleCaptionPosition } from "./MenuTitle.type";
import { type VibeComponentProps, withStaticPropsWithoutForwardRef } from "../../../types";
import styles from "./MenuTitle.module.scss";

export interface MenuTitleProps extends VibeComponentProps {
  /**
   * The caption text displayed alongside the title.
   */
  caption?: string | React.ReactNode;
  /**
   * The position of the caption relative to the title.
   */
  captionPosition?: MenuTitleCaptionPosition;
}

const MenuTitle = ({
  className,
  caption = "",
  captionPosition = "bottom",
  id,
  "data-testid": dataTestId
}: MenuTitleProps) => {
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

interface MenuTitleStaticProps {
  positions: typeof MenuTitleCaptionPositionEnum;
  captionPositions: typeof MenuTitleCaptionPositionEnum;
}

export default withStaticPropsWithoutForwardRef<MenuTitleProps, MenuTitleStaticProps>(MenuTitle, {
  positions: MenuTitleCaptionPositionEnum,
  captionPositions: MenuTitleCaptionPositionEnum
});
