import React, { type FC } from "react";
import { type VibeComponentProps, getTestId, ComponentDefaultTestId } from "@vibe/shared";
import { Text } from "@vibe/core";
import cx from "classnames";
import styles from "./TipseenTitle.module.scss";

export interface TipseenTitleProps extends VibeComponentProps {
  /**
   * The title text displayed in the Tipseen.
   */
  text?: string;
}

const TipseenTitle: FC<TipseenTitleProps> = ({ text, className, id, "data-testid": dataTestId }) => {
  return text ? (
    <Text
      type="text1"
      weight="bold"
      role="heading"
      color="inherit"
      aria-level={3}
      maxLines={2}
      className={cx(styles.title, className)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TIPSEEN_TITLE, id)}
    >
      {text}
    </Text>
  ) : null;
};

export default TipseenTitle;
