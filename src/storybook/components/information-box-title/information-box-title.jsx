import PropTypes from "prop-types";
import cx from "classnames";
import { BEMClass } from "../../../helpers/bem-helper";
import "./information-box-title.scss";

const BASE_CSS_CLASS = "monday-storybook-information-box-title";
const bemHelper = BEMClass(BASE_CSS_CLASS);

export const InformationBoxTitle = ({ children, href }) => {
  const title = (
    <h4 className={cx(bemHelper({ element: "content" }), { [bemHelper({ element: "content", state: "link" })]: href })}>
      {children}
    </h4>
  );
  return href ? (
    <a className={cx({ [bemHelper({ element: "link" })]: href })} href={href}>
      {title}
    </a>
  ) : (
    title
  );
};

InformationBoxTitle.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

InformationBoxTitle.defaultProps = {
  component: ""
};

export default InformationBoxTitle;
