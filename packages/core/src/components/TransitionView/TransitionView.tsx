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
    const [slideHeight, setSlideHeight] = useState<number>(height);

    useEffect(() => {
      if (!slideTransitionRef.current) return;
      setSlideHeight(slideTransitionRef.current.scrollHeight);
    }, [height, slideTransitionRef]);

    return (
      <div
        id={id}
        className={cx(styles.slideshow, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TRANSITION_VIEW, id)}
        ref={ref}
        style={{ height: height ?? slideHeight }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <SlideTransition
            key={activeStep}
            direction={direction}
            // it must be "auto" on initial load to consider scrollable content in slideHeight calculation
            style={{ height: height || slideHeight > 0 ? "100%" : "auto" }}
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
