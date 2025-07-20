import React from "react";
import cx from "classnames";
import { camelCase } from "lodash-es";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../../tests/test-ids-utils";
import Text from "../../Text/Text";
import { MenuTitleCaptionPosition as MenuTitleCaptionPositionEnum } from "./MenuTitleConstants";
import { MenuTitleCaptionPosition } from "./MenuTitle.type";
import { VibeComponentProps, withStaticPropsWithoutForwardRef } from "../../../types";
import styles from "./MenuTitle.module.scss";
import { Info } from "@vibe/icons";
import Tooltip from "../../Tooltip/Tooltip";

export interface MenuTitleProps extends VibeComponentProps {
  /**
   * The caption text displayed alongside the title.
   */
  caption?: string | React.ReactNode;
  /**
   * The position of the caption relative to the title.
   */
  captionPosition?: MenuTitleCaptionPosition;
  /**
   * The content of the info tooltip.
   */
  infoTooltipContent?: string;
}

const MenuTitle = ({
  className,
  caption = "",
  captionPosition = "bottom",
  infoTooltipContent = "",
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
          {captionPosition === "center" && infoTooltipContent && (
            <Tooltip content={infoTooltipContent}>
              <Info className={styles.infoIcon} />
            </Tooltip>
          )}
        </label>
      );
    }
  };
  return (
    <div className={cx(styles.titleContainer, className)}>
      <Text
        color="secondary"
        type="text2"
        className={styles.title}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.MENU_TITLE, id)}
      >
        {renderCaptionIfNeeded()}
      </Text>
      {infoTooltipContent && captionPosition !== "center" && (
        <Tooltip content={infoTooltipContent}>
          <Info className={styles.infoIcon} />
        </Tooltip>
      )}
    </div>
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
