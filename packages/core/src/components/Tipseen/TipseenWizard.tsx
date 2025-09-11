import React, { type FC, useContext, useMemo } from "react";
import cx from "classnames";
import Steps, { type StepsProps } from "../Steps/Steps";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";
import { TipseenContext } from "./Tipseen";
import { TipseenColor } from "./TipseenConstants";
import { type ButtonSize, type ButtonType } from "../Button";

const FINISH_TEXT = "Got it";

export interface TipseenWizardProps extends StepsProps {
  /**
   * The title text displayed in the Tipseen Wizard.
   */
  title?: string;
  /**
   * Class name applied to the Tipseen title.
   */
  titleClassName?: string;
  /**
   * Callback fired when the wizard is completed.
   */
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
      size: "small" as ButtonSize
    }),
    []
  );
  const backButtonProps = useMemo(
    () => ({
      size: "small" as ButtonSize
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
