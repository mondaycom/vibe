import cx from "classnames";
import React, { FC } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import Text from "../../Text/Text";
import { MenuTitleCaptionPosition } from "./MenuTitleConstants";
import { VibeComponentProps, withStaticProps } from "../../../types";
import styles from "./MenuTitle.module.scss";

export interface MenuTitleProps extends VibeComponentProps {
  caption?: string;
  captionPosition?: MenuTitleCaptionPosition;
}

const MenuTitle: FC<MenuTitleProps> & {
  positions?: typeof MenuTitleCaptionPosition;
  captionPositions?: typeof MenuTitleCaptionPosition;
  isMenuChild?: boolean;
} = ({ className, caption = "", captionPosition = MenuTitle.positions.BOTTOM, id, "data-testid": dataTestId }) => {
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
  positions: MenuTitleCaptionPosition,
  captionPositions: MenuTitleCaptionPosition
});
