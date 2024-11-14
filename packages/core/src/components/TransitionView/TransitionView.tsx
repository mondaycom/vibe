import React, { forwardRef, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { AnimatePresence } from "framer-motion";
import { TransitionViewProps } from "./TransitionView.types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TransitionView.module.scss";
import SlideTransition from "../SlideTransition/SlideTransition";

const TransitionView = forwardRef(
  (
    { activeStep, direction, height, id, className, "data-testid": dataTestId, children }: TransitionViewProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const slideTransitionRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number>(height);
    const slideTransitionHeight = height || contentHeight > 0 ? "100%" : "auto";

    useEffect(() => {
      if (!slideTransitionRef.current) return;
      setContentHeight(slideTransitionRef.current.scrollHeight);
    }, [height, slideTransitionRef]);

    return (
      <div
        id={id}
        className={cx(styles.slideshow, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TRANSITION_VIEW, id)}
        ref={ref}
        style={{ height: height ?? contentHeight }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <SlideTransition
            key={activeStep}
            direction={direction}
            // it must be "auto" on initial load to consider scrollable content in contentHeight calculation
            style={{ height: slideTransitionHeight }}
            ref={slideTransitionRef}
          >
            {children[activeStep]}
          </SlideTransition>
        </AnimatePresence>
      </div>
    );
  }
);

export default TransitionView;
