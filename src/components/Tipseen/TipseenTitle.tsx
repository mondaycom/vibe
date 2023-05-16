import React, { FC } from "react";
import cx from "classnames";
import { VibeComponentProps } from "../../types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TipseenTitle.module.scss";

interface TipseenTitleProps extends VibeComponentProps {
  text?: string;
}

const TipseenTitle: FC<TipseenTitleProps> = ({ text, className, id, "data-testid": dataTestId }) => {
  return text ? (
    <span
      role="heading"
      aria-level={3}
      className={cx(styles.tipseenTitle, className)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TIPSEEN_TITLE, id)}
    >
      {text}
    </span>
  ) : null;
};

export default TipseenTitle;
