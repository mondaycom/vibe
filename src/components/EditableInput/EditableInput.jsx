import React, { useRef, forwardRef, useLayoutEffect, useCallback, useState, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import autosize from "autosize";
import useStyle from "../../hooks/useStyle";
import useMergeRefs from "../../hooks/useMergeRefs";
import {
  isEnterEvent,
  isEscapeEvent,
  isTabEvent,
  isArrowUpEvent,
  isArrowDownEvent,
  isArrowLeftEvent,
  isArrowRightEvent
} from "../../utils/dom-event-utils";
import "./EditableInput.scss";

export const TEXTAREA_TYPE = "textarea";

const isTextArea = inputType => {
  return TEXTAREA_TYPE === inputType;
};

const EditableInput = forwardRef(
  (
    {
      className,
      inputType,
      autoSize,
      id,
      tabIndex,
      autoComplete,
      maxLength,
      placeholder,
      onClick,
      onKeyPress,
      shouldFocusOnMount,
      selectOnMount,
      value,
      customColor,
      ignoreBlurClass,
      onFinishEditing,
      onIgnoreBlurEvent,
      onFocus,
      onBlur,
      isValidValue,
      onChange,
      onError,
      onSuccess,
      onKeyDown,
      onTabHandler,
      onCancelEditing,
      textareaSubmitOnEnter,
      onArrowKeyDown,
      ariaLabel,
      brandFont
    },
    ref
  ) => {
    // State
    const [valueState, setValueState] = useState(value || "");

    // Refs
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    // Callbacks
    const autosizeIfNeeded = useCallback(() => {
      if (componentRef.current && autoSize && isTextArea(inputType)) {
        autosize(componentRef.current);
      }
    }, [componentRef, autoSize, inputType]);

    const focus = useCallback(() => {
      if (componentRef.current) {
        requestAnimationFrame(() => {
          componentRef.current.focus();
        });
      }
    }, [componentRef]);

    const onFocusCallback = useCallback(
      event => {
        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus]
    );

    const onBlurCallback = useCallback(
      event => {
        const shouldIgnoreBlur = (el, ignoreClass) => {
          return el && ignoreBlurClass && el.classList.contains(ignoreClass);
        };

        const { relatedTarget } = event;
        if (shouldIgnoreBlur(relatedTarget, ignoreBlurClass)) {
          onIgnoreBlurEvent(valueState);
          return;
        }

        const enrichedEvent = event;
        enrichedEvent.origin = "blur";

        if (onFinishEditing) {
          onFinishEditing(valueState, enrichedEvent);
        }

        if (onBlur) {
          onBlur(enrichedEvent);
        }
      },
      [ignoreBlurClass, valueState, onFinishEditing, onBlur, onIgnoreBlurEvent]
    );

    const onChangeCallback = useCallback(
      event => {
        const { value: newValue } = event.target;
        if (!isValidValue || isValidValue(newValue)) {
          setValueState(newValue);
          onChange && onChange(newValue);
          onSuccess && onSuccess();
        } else {
          onError && onError();
        }
      },
      [isValidValue, onChange, onError, onSuccess]
    );

    const select = useCallback(() => {
      if (componentRef.current) {
        componentRef.current.select();
      }
    }, [componentRef]);

    const moveCaretAtEnd = useCallback(() => {
      if (componentRef.current) {
        componentRef.current.value = "";
        componentRef.current.value = valueState;
      }
    }, [componentRef, valueState]);

    const onKeyDownCallback = useCallback(
      event => {
        if (onKeyDown) {
          return onKeyDown(event, valueState);
        }

        if (onTabHandler && isTabEvent(event) && !isTextArea(inputType)) {
          event.preventDefault();
          return onTabHandler(valueState, event);
        }

        if (onFinishEditing && isEnterEvent(event) && (!isTextArea(inputType) || textareaSubmitOnEnter)) {
          onFinishEditing(valueState, event);
        }

        if (onCancelEditing && isEscapeEvent(event)) {
          onCancelEditing(event);
        }

        if (
          onArrowKeyDown &&
          (isArrowUpEvent(event) || isArrowDownEvent(event) || isArrowLeftEvent(event) || isArrowRightEvent(event))
        ) {
          onArrowKeyDown(valueState, event);
        }
      },
      [
        onKeyDown,
        inputType,
        valueState,
        onTabHandler,
        textareaSubmitOnEnter,
        onFinishEditing,
        onCancelEditing,
        onArrowKeyDown
      ]
    );
    // Callbacks END

    // Effects
    useLayoutEffect(() => {
      if (shouldFocusOnMount) focus();
      autosizeIfNeeded();
      selectOnMount ? select() : moveCaretAtEnd();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
      setValueState(value);
    }, [value]);

    const style = useStyle(undefined, { color: customColor });

    const rows = isTextArea(inputType) && autoSize ? "1" : undefined;
    const InputType = inputType;
    return (
      <InputType
        ref={mergedRef}
        id={id}
        style={style}
        className={cx("editable-input--wrapper", className, {
          "no-resize": autoSize,
          "brand-font": brandFont
        })}
        onChange={onChangeCallback}
        onKeyDown={onKeyDownCallback}
        onBlur={onBlurCallback}
        onFocus={onFocusCallback}
        onClick={onClick}
        onKeyPress={onKeyPress}
        value={valueState}
        placeholder={placeholder}
        dir="auto"
        tabIndex={tabIndex}
        autoComplete={autoComplete ? "on" : "off"}
        rows={rows}
        maxLength={maxLength}
        aria-label={ariaLabel}
      />
    );
  }
);

EditableInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  inputType: PropTypes.oneOf(["input", "textarea"]),
  autoSize: PropTypes.bool,
  autoComplete: PropTypes.bool,
  maxLength: PropTypes.number,
  shouldFocusOnMount: PropTypes.bool,
  isValidValue: PropTypes.func,
  onFinishEditing: PropTypes.func,
  onArrowKeyDown: PropTypes.func,
  onCancelEditing: PropTypes.func,
  textareaSubmitOnEnter: PropTypes.bool,
  ariaLabel: PropTypes.string,
  customColor: PropTypes.string,
  brandFont: PropTypes.bool
};
EditableInput.defaultProps = {
  className: "",
  placeholder: "",
  inputType: "input",
  autoSize: false,
  autoComplete: true,
  maxLength: undefined,
  shouldFocusOnMount: true,
  isValidValue: undefined,
  onFinishEditing: undefined,
  onArrowKeyDown: undefined,
  onCancelEditing: undefined,
  textareaSubmitOnEnter: false,
  ariaLabel: undefined,
  customColor: undefined,
  brandFont: false
};

export default EditableInput;
