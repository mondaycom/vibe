// Libraries import
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState
} from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { SwitchTransition, CSSTransition } from "react-transition-group";

// Constants import
import {
  COUNTER_COLORS,
  COUNTER_SIZES,
  COUNTER_TYPES
} from "./CounterConstants";

// Hooks import
import useEventListener from "../../hooks/useEventListener";
import useAfterFirstRender from "../../hooks/useAfterFirstRender";

import "./Counter.scss";

const Counter = ({ count, size, kind, color, wrapperClassName, maxDigits }) => {
  // State
  const [countChangeAnimationState, setCountChangeAnimationState] = useState(
    false
  );

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
      `monday-style-counter--size-${size}`,
      `monday-style-counter--kind-${kind}`,
      `monday-style-counter--color-${color}`,
      {
        "monday-style-counter--with-animation": countChangeAnimationState
      }
    );
  }, [size, kind, color, countChangeAnimationState]);

  const countText =
    count?.toString().length > maxDigits ? `${10 ** maxDigits - 1}+` : count;

  return (
    <span className={wrapperClassName}>
      <div className={classNames} aria-label={countText} ref={ref}>
        <SwitchTransition mode="out-in">
          <CSSTransition
            classNames="monday-style-counter--fade"
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            key={countText}
          >
            <span>{countText}</span>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </span>
  );
};

Counter.propTypes = {
  wrapperClassName: PropTypes.string,
  count: PropTypes.number,
  size: PropTypes.oneOf([COUNTER_SIZES.LARGE, COUNTER_SIZES.SMALL]),
  color: PropTypes.oneOf([
    COUNTER_COLORS.PRIMARY,
    COUNTER_COLORS.DARK,
    COUNTER_COLORS.NEGATIVE
  ]),
  kind: PropTypes.oneOf([COUNTER_TYPES.FILL, COUNTER_TYPES.LINE]),
  maxDigits: PropTypes.number
};
Counter.defaultProps = {
  wrapperClassName: "",
  count: 0,
  size: COUNTER_SIZES.LARGE,
  color: COUNTER_COLORS.PRIMARY,
  kind: COUNTER_TYPES.FILL,
  maxDigits: 3
};

Counter.sizes = COUNTER_SIZES;
Counter.colors = COUNTER_COLORS;
Counter.kinds = COUNTER_TYPES;

export default Counter;
