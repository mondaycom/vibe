import React, { FC, useContext, useMemo } from "react";
import cx from "classnames";
import Steps, { StepsProps } from "../Steps/Steps";
import Button from "../../components/Button/Button";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";
import { TipseenContext } from "./Tipseen";
import { TipseenColor } from "./TipseenConstants";
import { StepsColor } from "../Steps/StepsConstants";

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
    return color === TipseenColor.INVERTED ? StepsColor.ON_INVERTED_BACKGROUND : StepsColor.ON_PRIMARY_COLOR;
  }, [color]);

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
