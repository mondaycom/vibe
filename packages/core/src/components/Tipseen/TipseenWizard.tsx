import React, { FC, useMemo } from "react";
import cx from "classnames";
import Steps, { StepsProps } from "../Steps/Steps";
import Button from "../../components/Button/Button";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";

const FINISH_TEXT = "Got it";

interface TipseenWizardProps extends StepsProps {
  title?: string;
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  onFinish?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const TipseenWizard: FC<TipseenWizardProps> = ({ id, title, onFinish, titleClassName, className, ...stepsProps }) => {
  const overrideStepsProps = stepsProps as StepsProps;
  const nextButtonProps = useMemo(
    () => ({
      kind: Button.kinds.PRIMARY,
      size: Button.sizes.SMALL
    }),
    []
  );
  const backButtonProps = useMemo(
    () => ({
      size: Button.sizes.SMALL
    }),
    []
  );
  const finishButtonProps = useMemo(
    () => ({
      kind: Button.kinds.PRIMARY,
      size: Button.sizes.SMALL,
      children: FINISH_TEXT
    }),
    []
  );
  return (
    <TipseenBasicContent
      title={title}
      className={cx(styles.tipseenWizard, className)}
      titleClassName={titleClassName}
      id={id || "wizard"}
    >
      <Steps
        className={cx(styles.tipseenWizardWizard)}
        isOnPrimary
        isContentOnTop
        areButtonsIconsHidden
        backButtonProps={backButtonProps}
        nextButtonProps={nextButtonProps}
        finishButtonProps={finishButtonProps}
        onFinish={onFinish}
        {...overrideStepsProps}
      />
    </TipseenBasicContent>
  );
};
export default TipseenWizard;
