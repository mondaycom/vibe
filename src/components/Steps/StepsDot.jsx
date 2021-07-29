import cx from "classnames";
import { useButton } from "@react-aria/button";
import { STEPS_CSS_BASE_CLASS } from "./StepsConstants";
import { BEMClass } from "../../helpers/bem-helper";
import { useChangeStepFunction } from "./hooks/useChangeStepFunction";

const CSS_BASE_CLASS = `${STEPS_CSS_BASE_CLASS}-header`;
const bemHelper = BEMClass(CSS_BASE_CLASS);

export const StepsDot = ({ stepsCount, onChangeActiveStep, activeStepIndex, stepIndex }) => {
  const onClick = useChangeStepFunction({
    stepsCount,
    newStepIndex: stepIndex,
    activeStepIndex,
    onClickCallback: onChangeActiveStep
  });

  const { buttonProps } = useButton({
    onPress: onClick,
    elementType: "div"
  });
  debugger;

  return (
    <div
      className={cx(bemHelper({ element: "dot" }), {
        [bemHelper({ element: "dot", state: "is-active" })]: activeStepIndex === stepIndex
      })}
      {...buttonProps}
    />
  );
};
