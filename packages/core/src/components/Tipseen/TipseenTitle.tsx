import React, { FC } from "react";
import { VibeComponentProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import Text from "../Text/Text";
import cx from "classnames";
import styles from "./TipseenTitle.module.scss";

export interface TipseenTitleProps extends VibeComponentProps {
  text?: string;
}

const TipseenTitle: FC<TipseenTitleProps> = ({ text, className, id, "data-testid": dataTestId }) => {
  return text ? (
    <Text
      type={Text.types.TEXT1}
      weight={Text.weights.BOLD}
      role="heading"
      color={Text.colors.INHERIT}
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
