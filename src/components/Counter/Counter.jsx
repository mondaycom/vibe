// Libraries import
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { SwitchTransition, CSSTransition } from "react-transition-group";

// Constants import
import { COUNTER_COLORS, getActualSize, COUNTER_TYPES } from "./CounterConstants";
import { SIZES } from "../../constants/sizes";

// Hooks import
import useEventListener from "../../hooks/useEventListener";
import useAfterFirstRender from "../../hooks/useAfterFirstRender";

import "./Counter.scss";
import { NOOP } from "../../utils/function-utils";

const Counter = ({
  count,
  size,
  kind,
  color,
  wrapperClassName,
  maxDigits,
  ariaLabeledBy,
  ariaLabel,
  id,
  prefix,
  onMouseDown,
  noAnimation
}) => {
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
      "monday-style-counter",
      `monday-style-counter--size-${getActualSize(size)}`,
      `monday-style-counter--kind-${kind}`,
      `monday-style-counter--color-${color}`,
      {
        "monday-style-counter--with-animation": countChangeAnimationState
      }
    );
  }, [size, kind, color, countChangeAnimationState]);

  const countText = count?.toString().length > maxDigits ? `${10 ** maxDigits - 1}+` : count;
  const counter = <span id={`counter-${id}`}>{prefix + countText}</span>;

  return (
    <span
      className={wrapperClassName}
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
              classNames="monday-style-counter--fade"
              addEndListener={(node, done) => {
                node.addEventListener("transitionend", done, false);
              }}
              key={countText}
            >
              <span id={`counter-${id}`}>{prefix + countText}</span>
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
  wrapperClassName: PropTypes.string,
  count: PropTypes.number,
  /** element id to describe the counter accordingly */
  ariaLabeledBy: PropTypes.string,
  /** Counter Description */
  ariaLabel: PropTypes.string,
  size: PropTypes.oneOf([Counter.sizes.LARGE, Counter.sizes.SMALL]),
  color: PropTypes.oneOf([Counter.colors.PRIMARY, Counter.colors.DARK, Counter.colors.NEGATIVE]),
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
  wrapperClassName: "",
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
