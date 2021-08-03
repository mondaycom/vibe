import cx from "classnames";
import NOOP from "lodash/noop";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";
import { BEMClass } from "../../helpers/bem-helper";
import { useChangeStepFunction } from "./hooks/useChangeStepFunction";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const StepsDot = ({
  stepsCount,
  onChangeActiveStep,
  activeStepIndex,
  stepIndex,
  ariaCurrent,
  stepDescriptionFunc
}) => {
  const isActive = activeStepIndex === stepIndex;
  const onClick = useChangeStepFunction({
    stepsCount,
    newStepIndex: stepIndex,
    activeStepIndex,
    onClickCallback: onChangeActiveStep
  });
  const ariaLabel = useMemo(() => {
    return stepDescriptionFunc(stepIndex);
  }, [stepDescriptionFunc, stepIndex]);

  return (
    <button
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
  stepsCount: PropTypes.number.isRequired,
  onChangeActiveStep: PropTypes.func,
  activeStepIndex: PropTypes.number.isRequired,
  stepIndex: PropTypes.number.isRequired,
  ariaCurrent: PropTypes.oneOf(["page", "step", "location", "date", "time", false, true])
};
StepsDot.defaultProps = {
  onChangeActiveStep: NOOP,
  ariaCurrent: "step"
};
