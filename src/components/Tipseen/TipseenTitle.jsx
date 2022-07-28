import cx from "classnames";
import styles from "./TipseenTitle.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-title";
const TipseenTitle = ({ text, className }) => {
  return text ? (
    <span role="heading" aria-level="3" className={cx(styles.tipseenTitle, BASE_CSS_CLASS, className)}>
      {text}
    </span>
  ) : null;
};

export default TipseenTitle;
