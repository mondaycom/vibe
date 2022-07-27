import React, { useMemo } from "react";
import cx from "classnames";
import Steps from "../../components/Steps/Steps";
import Button from "../../components/Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import TipseenBasicContent from "./TipseenBasicContent";
import "./TipseenWizard.scss";

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
    <TipseenBasicContent title={title} className={cx(BASE_CSS_CLASS, className)}>
      <Steps
        className={bemHelper({ element: "wizard" })}
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
