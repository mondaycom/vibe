import cx from "classnames";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import { BEMClass } from "../../helpers/bem-helper";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const StepsDot = ({ isActive, onClick, ariaCurrent, ariaLabel }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? ariaCurrent : false}
      className={cx(bemHelper({ element: "dot" }), {
        [bemHelper({ element: "dot", state: "is-active" })]: isActive
      })}
      onClick={onClick}
    />
  );
};

StepsDot.propTypes = {
  onClick: PropTypes.func,
  ariaCurrent: PropTypes.oneOf(["page", "step", "location", "date", "time", false, true])
};
StepsDot.defaultProps = {
  onClick: NOOP,
  ariaCurrent: "step"
};
