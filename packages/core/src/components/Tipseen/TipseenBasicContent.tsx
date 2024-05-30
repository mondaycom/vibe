import React from "react";
import cx from "classnames";
import TipseenTitle from "./TipseenTitle";
import { VibeComponentProps } from "../../types";
import { ElementContent } from "../../types/ElementContent";
import { ComponentDefaultTestId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import styles from "./TipseenBasicContent.module.scss";

export interface TipseenBasicContentProps extends VibeComponentProps {
  title?: string;
  titleClassName?: string;
  children?: ElementContent | ElementContent[];
}

const TipseenBasicContent: React.FC<TipseenBasicContentProps> = ({
  title,
  children = null,
  titleClassName,
  className,
  id,
  "data-testid": dataTestId
}) => {
  return (
    <div
      className={cx(styles.tipseenBasicContent, className)}
      id={id}
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.TIPSEEN_CONTENT, id)}
    >
      <TipseenTitle text={title} className={titleClassName} />
      {children}
    </div>
  );
};

export default TipseenBasicContent;
