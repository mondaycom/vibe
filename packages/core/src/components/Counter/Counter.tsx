import { camelCase } from "es-toolkit";
import { getStyle, NOOP } from "@vibe/shared";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEventListener from "../../hooks/useEventListener";
import useAfterFirstRender from "../../hooks/useAfterFirstRender";

import { type CounterColor, type CounterSize, type CounterType } from "./Counter.types";
import { type VibeComponentProps } from "../../types";
import styles from "./Counter.module.scss";
import { ComponentVibeId } from "../../tests/constants";

// SCSS uses --motion-productive-long (150ms) for transform and --motion-productive-short (70ms)
// for opacity. We wait for the longest leg (150ms) before swapping in the new value.
const COUNTER_SWAP_TRANSITION_MS = 150;

export interface CounterProps extends VibeComponentProps {
  /**
   * The ID of the element describing the counter.
   */
  "aria-labelledby"?: string;
  /**
   * Class name applied to the counter element.
   */
  counterClassName?: string;
  /**
   * The numeric value displayed in the counter.
   */
  count?: number;
  /**
   * The label of the counter for accessibility.
   */
  "aria-label"?: string;
  /**
   * The size of the counter.
   */
  size?: CounterSize;
  /**
   * The visual style of the counter.
   */
  kind?: CounterType;
  /**
   * The color of the counter.
   */
  color?: CounterColor;
  /**
   * The maximum number of digits displayed before truncation.
   */
  maxDigits?: number;
  /**
   * Text prepended to the counter value.
   */
  prefix?: string;
  /**
   * Callback fired when the counter is clicked.
   */
  onMouseDown?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /**
   * If true, disables counter animations.
   */
  noAnimation?: boolean;
}

const Counter = ({
  className,
  counterClassName,
  count = 0,
  size = "large",
  kind = "fill",
  color = "primary",
  maxDigits = 3,
  "aria-labelledby": ariaLabelledBy = "",
  "aria-label": ariaLabel = "",
  id = "",
  prefix = "",
  onMouseDown = NOOP,
  noAnimation = false,
  "data-testid": dataTestId
}: CounterProps) => {
  const [countChangeAnimationState, setCountChangeAnimationState] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const nodeRef = useRef<HTMLSpanElement>(null);

  const setCountChangedAnimationActive = useCallback(() => {
    setCountChangeAnimationState(true);
  }, [setCountChangeAnimationState]);

  const setCountChangedAnimationNotActive = useCallback(() => {
    setCountChangeAnimationState(false);
  }, [setCountChangeAnimationState]);

  useEventListener({
    eventName: "animationend",
    callback: setCountChangedAnimationNotActive,
    ref
  });

  const isAfterFirstRender = useAfterFirstRender();

  useEffect(() => {
    if (isAfterFirstRender.current) {
      setCountChangedAnimationActive();
    }
  }, [count, isAfterFirstRender, setCountChangedAnimationActive]);

  useEffect(() => {
    if (maxDigits <= 0) {
      console.error("Max digits must be a positive number");
    }
  }, [maxDigits]);

  const classNames = useMemo(() => {
    return cx(
      styles.counter,
      getStyle(styles, camelCase("size-" + size)),
      getStyle(styles, camelCase("kind-" + kind)),
      getStyle(styles, camelCase("color-" + color)),
      {
        [styles.withAnimation]: countChangeAnimationState
      },
      counterClassName
    );
  }, [size, kind, color, countChangeAnimationState, counterClassName]);

  const counterId = "counter" + (id ? `-${id}` : "");
  const countText = count?.toString().length > maxDigits ? `${10 ** maxDigits - 1}+` : String(count);

  // CSS-driven swap transition (replaces react-transition-group's <SwitchTransition mode="out-in">).
  // When countText changes, the displayed value exits, then the new value enters — mirroring the
  // out-in semantics used by react-transition-group. Direction reflects the count change so an
  // increase animates upward (new from bottom) and a decrease animates downward (new from top).
  const [displayedText, setDisplayedText] = useState(countText);
  const [swapStage, setSwapStage] = useState<"idle" | "exiting" | "entering">("idle");
  const [direction, setDirection] = useState<"up" | "down">("up");
  const prevCountRef = useRef(count);

  useEffect(() => {
    if (noAnimation) {
      setDisplayedText(countText);
      setSwapStage("idle");
      prevCountRef.current = count;
      return;
    }
    if (countText !== displayedText && swapStage !== "exiting") {
      setDirection(count < prevCountRef.current ? "down" : "up");
      prevCountRef.current = count;
      setSwapStage("exiting");
    }
  }, [count, countText, displayedText, noAnimation, swapStage]);

  useEffect(() => {
    if (swapStage !== "exiting") return undefined;
    const exitTimer = setTimeout(() => {
      setDisplayedText(countText);
      setSwapStage("entering");
    }, COUNTER_SWAP_TRANSITION_MS);
    return () => clearTimeout(exitTimer);
  }, [swapStage, countText]);

  useEffect(() => {
    if (swapStage !== "entering") return undefined;
    const enterTimer = setTimeout(() => setSwapStage("idle"), COUNTER_SWAP_TRANSITION_MS);
    return () => clearTimeout(enterTimer);
  }, [swapStage]);

  const animatedSpanClass =
    cx({
      [styles.fadeEnterUp]: swapStage === "entering" && direction === "up",
      [styles.fadeEnterDown]: swapStage === "entering" && direction === "down",
      [styles.fadeExitUp]: swapStage === "exiting" && direction === "up",
      [styles.fadeExitDown]: swapStage === "exiting" && direction === "down"
    }) || undefined;

  const counter = (
    <span id={counterId} data-testid={dataTestId || getTestId(ComponentDefaultTestId.COUNTER, id)}>
      {prefix + countText}
    </span>
  );

  return (
    <span
      className={className}
      aria-label={`${ariaLabel} ${countText}`}
      aria-labelledby={ariaLabelledBy}
      onMouseDown={onMouseDown}
      data-vibe={ComponentVibeId.COUNTER}
    >
      <div className={classNames} aria-label={countText} ref={ref}>
        {noAnimation ? (
          counter
        ) : (
          <span
            ref={nodeRef}
            id={counterId}
            data-testid={dataTestId || getTestId(ComponentDefaultTestId.COUNTER, id)}
            className={animatedSpanClass}
          >
            {prefix + displayedText}
          </span>
        )}
      </div>
    </span>
  );
};

export default Counter;
