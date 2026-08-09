import React, { forwardRef } from "react";
import cx from "classnames";
import { type TransitionViewProps } from "./TransitionView.types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TransitionView.module.scss";
import SlideTransition from "../SlideTransition/SlideTransition";

const TransitionView = forwardRef(
  (
    { activeStep, direction, id, className, "data-testid": dataTestId, children }: TransitionViewProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        id={id}
        className={cx(styles.slideshow, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TRANSITION_VIEW, id)}
        ref={ref}
      >
        <SlideTransition key={activeStep} direction={direction}>
          {children[activeStep]}
        </SlideTransition>
      </div>
    );
  }
);

export default TransitionView;
