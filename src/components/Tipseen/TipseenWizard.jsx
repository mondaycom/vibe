import React, { useMemo } from "react";
import cx from "classnames";
import Steps from "../../components/Steps/Steps";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import TipseenBasicContent from "./TipseenBasicContent";
import styles from "./TipseenWizard.module.scss";

const BASE_CSS_CLASS = "monday-style-tipseen-wizard";
const bemHelper = BEMClass(BASE_CSS_CLASS);

const TipseenWizard = ({ title, className, ...stepsProps }) => {
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
        {...stepsProps}
      />
    </TipseenBasicContent>
  );
};
export default TipseenWizard;
