import React, { useMemo } from "react";
import cx from "classnames";
import Steps from "../Steps/Steps";
import Button from "../Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import "./TipseenWizard.scss";
import TipseenBasicContent from "./TipseenBasicContent";

const BASE_CSS_CLASS = "monday-style-tipseen-wizard";
const bemHelper = BEMClass(BASE_CSS_CLASS);

export const TipseenWizard = ({ title, className, ...stepsProps }) => {
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
