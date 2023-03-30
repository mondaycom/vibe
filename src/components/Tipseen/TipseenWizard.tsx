import React, { FC, useMemo } from "react";
import cx from "classnames";
import Steps, { StepsProps } from "../Steps/Steps";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-wizard";
const bemHelper = BEMClass(BASE_CSS_CLASS);

interface TipseenWizardProps extends StepsProps {
  title?: string;
  /**
   * Classname for overriding TipseenTitle styles
   */
  titleClassName?: string;
}

const TipseenWizard: FC<TipseenWizardProps> = ({ title, titleClassName, className, ...stepsProps }) => {
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
  return (
    <TipseenBasicContent
      title={title}
      className={cx(styles.tipseenWizard, BASE_CSS_CLASS, className)}
      titleClassName={titleClassName}
    >
      <Steps
        className={cx(styles.tipseenWizardWizard, bemHelper({ element: "wizard" }))}
        isOnPrimary
        isContentOnTop
        areButtonsIconsHidden
        backButtonProps={backButtonProps}
        nextButtonProps={nextButtonProps}
        {...overrideStepsProps}
      />
    </TipseenBasicContent>
  );
};
export default TipseenWizard;
