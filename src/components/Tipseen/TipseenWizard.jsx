import React, { useMemo } from "react";
import cx from "classnames";
import Steps from "../Steps/Steps";
import Button from "../Button/Button";
import { BEMClass } from "../../helpers/bem-helper";
import TipseenTitle from "./TipseenTitle";

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
    <div className={cx(BASE_CSS_CLASS, className)}>
      <TipseenTitle text={title} />
      <Steps
        className={bemHelper({ element: "wizard" })}
        isOnPrimary
        isContentOnTop
        areButtonsIconsHidden
        backButtonProps={backButtonProps}
        nextButtonProps={nextButtonProps}
        {...stepsProps}
      />
    </div>
  );
};
