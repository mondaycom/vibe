import React, { FC, useContext, useMemo } from "react";
import cx from "classnames";
import Steps, { StepsProps } from "../Steps/Steps";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";
import { TipseenContext } from "./Tipseen";
import { TipseenColor } from "./TipseenConstants";
import { ButtonSize, ButtonType } from "../Button";

const FINISH_TEXT = "Got it";

export interface TipseenWizardProps extends StepsProps {
  title?: string;
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
  onFinish?: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const TipseenWizard: FC<TipseenWizardProps> = ({ id, title, onFinish, titleClassName, className, ...stepsProps }) => {
  const overrideStepsProps = stepsProps as StepsProps;
  const color = useContext(TipseenContext);
  const buttonColor = useMemo(() => {
    return color === TipseenColor.INVERTED ? "on-inverted-background" : "on-primary-color";
  }, [color]);

  const nextButtonProps = useMemo(
    () => ({
      kind: "primary" as ButtonType,
      size: "small" as ButtonSize,
      children: ""
    }),
    []
  );
  const backButtonProps = useMemo(
    () => ({
      size: "small" as ButtonSize,
      children: ""
    }),
    []
  );
  const finishButtonProps = useMemo(
    () => ({
      kind: "primary" as ButtonType,
      size: "small" as ButtonSize,
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
        color={buttonColor}
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
