import React, { forwardRef } from "react";
import cx from "classnames";
import { AnimatePresence } from "framer-motion";
import { WizardSlideshowProps } from "./WizardSlideshow.types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./WizardSlideshow.module.scss";
import SlideTransition from "../SlideTransition/SlideTransition";

const WizardSlideshow = forwardRef(
  (
    { activeStep, direction, id, className, "data-testid": dataTestId, children }: WizardSlideshowProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        id={id}
        className={cx(styles.slideshow, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.WIZARD_SLIDESHOW, id)}
        ref={ref}
      >
        <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
          <SlideTransition key={activeStep} direction={direction}>
            {children[activeStep]}
          </SlideTransition>
        </AnimatePresence>
      </div>
    );
  }
);

export default WizardSlideshow;
