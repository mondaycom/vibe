import cx from "classnames";
import PropTypes from "prop-types";
import TipseenTitle from "./TipseenTitle";
import styles from "./TipseenBasicContent.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-basic-content";

const TipseenBasicContent = ({ title, children, className }) => {
  return (
    <div className={cx(styles.tipseenBasicContent, BASE_CSS_CLASS, className)}>
      <TipseenTitle text={title} />
      {children}
    </div>
  );
};

TipseenBasicContent.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
};

TipseenBasicContent.defaultProps = {
  title: undefined,
  children: null
};

export default TipseenBasicContent;
