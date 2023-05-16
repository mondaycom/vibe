import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import cx from "classnames";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import VibeComponentProps from "../../types/VibeComponentProps";
import useEventListener from "../../hooks/useEventListener";
import useAfterFirstRender from "../../hooks/useAfterFirstRender";
import { NOOP } from "../../utils/function-utils";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { CounterColor, CounterSize, CounterType, getActualSize } from "./CounterConstants";
import "./Counter.scss";

export interface CounterProps extends VibeComponentProps {
  /** id to pass to the element */
  id?: string;
  /** element id to describe the counter accordingly */
  ariaLabeledBy?: string;
  /** Use className instead
   * @deprecated
   */
  wrapperClassName?: string;
  /** Custom class names to pass to the component wrapper */
  className?: string;
  /** Custom class names to pass to the component */
  counterClassName?: string;
  /** The numeric value of the counter */
  count?: number;
  /** Counter description */
  ariaLabel?: string;
  /** The size of the counter */
  size?: CounterSize;
  kind?: CounterType;
  /** The color of the counter */
  color?: CounterColor;
  /** maximum number of digits to display (see relevant story) */
  maxDigits?: number;
  /** Text prepended to counter value */
  prefix?: string;
  /** Callback to be called when the counter is clicked. */
  onMouseDown?: (event: React.MouseEvent<HTMLSpanElement>) => void;
  /** Disables the component's animation */
  noAnimation?: boolean;
}

const Counter: React.FC<CounterProps> & {
  sizes?: typeof CounterSize;
  colors?: typeof CounterColor;
  kinds?: typeof CounterType;
} = ({
  className,
  // Backward compatibility for props naming
  wrapperClassName,
  counterClassName,
  count = 0,
  size = Counter.sizes.LARGE,
  kind = Counter.kinds.FILL,
  color = Counter.colors.PRIMARY,
  maxDigits = 3,
  ariaLabeledBy = "",
  ariaLabel = "",
  id = "",
  prefix = "",
  onMouseDown = NOOP,
  noAnimation = false
}) => {
  // Variables
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName], undefined) as string;

  // State
  const [countChangeAnimationState, setCountChangeAnimationState] = useState(false);

  // Refs
  const ref = useRef<HTMLDivElement>(null);

  // Callbacks
  const setCountChangedAnimationActive = useCallback(() => {
    setCountChangeAnimationState(true);
  }, [setCountChangeAnimationState]);

  const setCountChangedAnimationNotActive = useCallback(() => {
    setCountChangeAnimationState(false);
  }, [setCountChangeAnimationState]);

  // Listeners
  useEventListener({
    eventName: "animationend",
    callback: setCountChangedAnimationNotActive,
    ref
  });

  // Custom hooks
  const isAfterFirstRender = useAfterFirstRender();

  // Effects
  useEffect(() => {
    if (!isAfterFirstRender.current) {
      setCountChangedAnimationActive();
    }
  }, [count, isAfterFirstRender, setCountChangedAnimationActive]);

  useEffect(() => {
    if (maxDigits <= 0) {
      console.error("Max digits must be a positive number");
    }
  }, [maxDigits]);

  // Memos
  const classNames = useMemo(() => {
    return cx(
      "monday-style-counter",
      `monday-style-counter--size-${getActualSize(size)}`,
      `monday-style-counter--kind-${kind}`,
      `monday-style-counter--color-${color}`,
      {
        "monday-style-counter--with-animation": countChangeAnimationState
      },
      counterClassName
    );
  }, [size, kind, color, countChangeAnimationState, counterClassName]);

  const countText = count?.toString().length > maxDigits ? `${10 ** maxDigits - 1}+` : String(count);
  const counter = <span id={`counter-${id}`}>{prefix + countText}</span>;

  return (
    <span
      className={overrideClassName}
      aria-label={`${ariaLabel} ${countText}`}
      aria-labelledby={ariaLabeledBy}
      onMouseDown={onMouseDown}
    >
      <div className={classNames} aria-label={countText} ref={ref}>
        {noAnimation ? (
          counter
        ) : (
          <SwitchTransition mode="out-in">
            <CSSTransition
              key={countText}
              classNames="monday-style-counter--fade"
              // @ts-expect-error @definitelyTyped typings expecting a single parameter for some reason when the function passed here is called with two parameters
              // See https://github.com/reactjs/react-transition-group/blob/c89f807067b32eea6f68fd6c622190d88ced82e2/src/Transition.js#L522-L534
              addEndListener={(node: HTMLElement, done: () => void) => {
                node.addEventListener("transitionend", done, false);
              }}
            >
              <span id={`counter-${id}`}>{prefix + countText}</span>
            </CSSTransition>
          </SwitchTransition>
        )}
      </div>
    </span>
  );
};

Object.assign(Counter, {
  sizes: CounterSize,
  colors: CounterColor,
  kinds: CounterType
});

export default Counter;
