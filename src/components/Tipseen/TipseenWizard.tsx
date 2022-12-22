import React, { FC, useMemo } from "react";
import cx from "classnames";
import Steps, { StepsProps } from "../Steps/Steps";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";
import { VibeComponentProps } from "../../types";

const BASE_CSS_CLASS = "monday-style-tipseen-wizard";
const bemHelper = BEMClass(BASE_CSS_CLASS);

interface TipseenWizardProps extends VibeComponentProps {
  title?: string;
}

const TipseenWizard: FC<TipseenWizardProps> = ({ title, className, ...stepsProps }) => {
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
    <TipseenBasicContent title={title} className={cx(styles.tipseenWizard, BASE_CSS_CLASS, className)}>
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
