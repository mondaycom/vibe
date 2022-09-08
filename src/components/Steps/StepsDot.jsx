import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import styles from "./StepsDot.module.scss";

export const StepsDot = ({ isActive, onClick, ariaCurrent, ariaLabel, id, "data-testid": dataTestId }) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-current={isActive ? ariaCurrent : false}
      className={cx(styles.headerDot, "monday-style-steps-header_dot", {
        [styles.headerDotIsActive]: isActive,
        ["monday-style-steps-header_dot--is-active"]: isActive
      })}
      onClick={onClick}
      id={id}
      data-testid={dataTestId || getTestId(ELEMENT_TYPES.STEPS_DOT, id)}
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
