import camelCase from "lodash/camelCase";
import { ELEMENT_TYPES, getTestId } from "../../utils/test-utils";
import cx from "classnames";
import { SIZES } from "../../constants/sizes";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import useEventListener from "../../hooks/useEventListener";
import useAfterFirstRender from "../../hooks/useAfterFirstRender";
import { NOOP } from "../../utils/function-utils";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { COUNTER_COLORS, COUNTER_TYPES, getActualSize } from "./CounterConstants";
import styles from "./Counter.module.scss";

const Counter = ({
  count,
  size,
  kind,
  color,
  className,
  // Backward compatibility for props naming
  wrapperClassName,
  maxDigits,
  ariaLabeledBy,
  ariaLabel,
  id,
  prefix,
  onMouseDown,
  noAnimation,
  "data-testid": dataTestId
}) => {
  // Variables
  const overrideClassName = backwardCompatibilityForProperties([className, wrapperClassName]);

  // State
  const [countChangeAnimationState, setCountChangeAnimationState] = useState(false);

  // Refs
  const ref = useRef(null);

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
      styles.counter,
      "monday-style-counter",
      styles[camelCase("size-" + getActualSize(size))],
      `monday-style-counter--size-${getActualSize(size)}`,
      styles[camelCase("kind-" + kind)],
      `monday-style-counter--kind-${kind}`,
      styles[camelCase("color-" + color)],
      `monday-style-counter--color-${color}`,
      {
        [styles.withAnimation]: countChangeAnimationState,
        ["monday-style-counter--with-animation"]: countChangeAnimationState
      }
    );
  }, [size, kind, color, countChangeAnimationState]);

  const countText = count?.toString().length > maxDigits ? `${10 ** maxDigits - 1}+` : count;
  const counter = (
    <span id={`counter-${id}`} data-testid={dataTestId || getTestId(ELEMENT_TYPES.COUNTER, id)}>
      {prefix + countText}
    </span>
  );

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
              classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive
              }}
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              key={countText}
            >
              <span id={`counter-${id}`} data-testid={dataTestId || getTestId(ELEMENT_TYPES.COUNTER, id)}>
                {prefix + countText}
              </span>
            </CSSTransition>
          </SwitchTransition>
        )}
      </div>
    </span>
  );
};

Counter.sizes = SIZES;
Counter.colors = COUNTER_COLORS;
Counter.kinds = COUNTER_TYPES;

Counter.propTypes = {
  /** id to pass to the element */
  id: PropTypes.string,
  className: PropTypes.string,
  count: PropTypes.number,
  /** element id to describe the counter accordingly */
  ariaLabeledBy: PropTypes.string,
  /** Counter Description */
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf([Counter.sizes.LARGE, Counter.sizes.SMALL]),
  color: PropTypes.oneOf([Counter.colors.PRIMARY, Counter.colors.DARK, Counter.colors.NEGATIVE, Counter.colors.LIGHT]),
  kind: PropTypes.oneOf([Counter.kinds.FILL, Counter.kinds.LINE]),
  /** maximum number of digits to display (see relevant story) */
  maxDigits: PropTypes.number,
  prefix: PropTypes.string,
  /**
   * Callback to be called when the counter is clicked.
   */
  onMouseDown: PropTypes.func,
  /**
   * Disables the component's animation.
   */
  noAnimation: PropTypes.bool
};
Counter.defaultProps = {
  id: "",
  className: undefined,
  count: 0,
  size: SIZES.LARGE,
  color: COUNTER_COLORS.PRIMARY,
  kind: COUNTER_TYPES.FILL,
  maxDigits: 3,
  ariaLabeledBy: "",
  ariaLabel: "",
  prefix: "",
  onMouseDown: NOOP,
  noAnimation: false
};

export default Counter;
