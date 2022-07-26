import PropTypes from "prop-types";
import { BEMClass } from "../../../helpers/bem-helper";
import "./information-box-title.scss";

const BASE_CSS_CLASS = "monday-storybook-information-box-title";
const bemHelper = BEMClass(BASE_CSS_CLASS);

export const InformationBoxTitle = ({ children }) => {
  return <h4 className={bemHelper({ component: "component" })}>{children}</h4>;
};

InformationBoxTitle.propTypes = {
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
};

InformationBoxTitle.defaultProps = {
  component: ""
};
