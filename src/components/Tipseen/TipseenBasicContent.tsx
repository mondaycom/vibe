import cx from "classnames";
import TipseenTitle from "./TipseenTitle";
import { VibeComponentProps } from "../../types";
import { FC } from "react";
import { ElementContent } from "../../types/ElementContent";
import styles from "./TipseenBasicContent.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-basic-content";

interface TipseenBasicContentProps extends VibeComponentProps {
  title?: string;
  children?: ElementContent | ElementContent[];
}

const TipseenBasicContent: FC<TipseenBasicContentProps> = ({ title, children = null, className }) => {
  return (
    <div className={cx(styles.tipseenBasicContent, BASE_CSS_CLASS, className)}>
      <TipseenTitle text={title} />
      {children}
    </div>
  );
};

export default TipseenBasicContent;
