import React, { forwardRef, useEffect, useRef, useState } from "react";
import cx from "classnames";
import { AnimatePresence } from "framer-motion";
import { TransitionViewProps } from "./TransitionView.types";
import { getTestId } from "../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../tests/constants";
import styles from "./TransitionView.module.scss";
import SlideTransition from "../SlideTransition/SlideTransition";
import useMergeRef from "../../hooks/useMergeRef";

const TransitionView = forwardRef(
  (
    { activeStep, direction, height, id, className, "data-testid": dataTestId, children }: TransitionViewProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const componentRef = useRef<HTMLDivElement>(null);
    const mergedRef = useMergeRef(ref, componentRef);
    const slideTransitionRef = useRef<HTMLDivElement>(null);
    const [contentHeight, setContentHeight] = useState<number | "100%">(height);
    const slideTransitionHeight = height || contentHeight === "100%" || contentHeight > 0 ? "100%" : "auto";

    useEffect(() => {
      if (!slideTransitionRef.current) return;
      // if parent has definite height, stretch component to fill it, otherwise use content height
      setContentHeight(componentRef.current.clientHeight > 0 ? "100%" : slideTransitionRef.current.scrollHeight);
    }, [height, slideTransitionRef]);

    return (
      <div
        id={id}
        className={cx(styles.slideshow, className)}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TRANSITION_VIEW, id)}
        ref={mergedRef}
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
