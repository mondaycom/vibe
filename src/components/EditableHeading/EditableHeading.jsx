/* eslint-disable react/destructuring-assignment */
import React, { useRef, useState, useCallback, useEffect, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Heading from "../Heading/Heading";
import Clickable from "../Clickable/Clickable";
import EditableInput, { TEXTAREA_TYPE } from "../EditableInput/EditableInput";
import { TYPES } from "../Heading/HeadingConstants";
import { SIZES } from "../../constants/sizes";
import usePrevious from "../../hooks/usePrevious";
import "./EditableHeading.scss";

const EditableHeading = props => {
  const {
    id,
    className,
    inputClassName,
    dataTestId,
    value,
    editing,
    disabled,
    onFinishEditing,
    onCancelEditing,
    onIgnoreBlurEvent,
    errorClassTimeout,
    style,
    brandFont,
    customColor,
    onStartEditing,
    contentRenderer,
    tooltip,
    highlightTerm,
    insetFocus
  } = props;

  // State
  const [isEditing, setIsEditing] = useState(editing && !disabled);
  const [isError, setIsError] = useState(false);
  const [valueState, setValueState] = useState(value || "");
  const prevValue = usePrevious(value);

  // Refs
  const ref = useRef(null);

  // Callbacks
  const onClick = useCallback(
    event => {
      if (disabled || isEditing) return;
      setIsEditing(true);
      onStartEditing && onStartEditing(event);
    },
    [isEditing, disabled, setIsEditing, onStartEditing]
  );

  const onFinishEditingCallback = useCallback(
    (newValue, event) => {
      setIsEditing(false);
      setValueState(newValue);
      onFinishEditing?.(newValue, event);
    },
    [onFinishEditing, setIsEditing, setValueState]
  );

  const onCancelEditingCallback = useCallback(
    event => {
      setIsEditing(false);
      onCancelEditing?.(event);
    },
    [onCancelEditing, setIsEditing]
  );

  const onIgnoreBlurEventCallback = useCallback(
    value => {
      onIgnoreBlurEvent?.(value);
    },
    [onIgnoreBlurEvent]
  );

  const clearErrorState = useCallback(() => {
    setIsError(false);
  }, [setIsError]);

  const onInputErrorCallback = useCallback(() => {
    setIsError(true);
  }, [setIsError]);

  const onInputSuccessCallback = useCallback(() => {
    clearErrorState();
  }, [clearErrorState]);

  // Effects
  useEffect(() => {
    // Update value if changed from props
    if (!editing && value !== prevValue && value !== valueState) {
      setValueState(value);
    }
  }, [editing, value, prevValue, valueState, setValueState]);

  useEffect(() => {
    // update isEditing state if "editing" prop changed
    setIsEditing(editing);
  }, [editing]);

  useLayoutEffect(() => {
    if (!editing && !valueState && value) {
      // When user entered empty value - rollback to value from props
      setValueState(value);
    }
  }, [editing, value, prevValue, valueState, setValueState]);

  useEffect(() => {
    let timer;
    if (isError) {
      timer = setTimeout(clearErrorState, errorClassTimeout);
    }
    return () => timer && clearTimeout(timer);
  }, [isError, setIsError, clearErrorState, errorClassTimeout]);

  // Render
  const getContentProps = () => {
    const suggestEditOnHover = props.suggestEditOnHover && !disabled;
    const valueOrPlaceholder = valueState || props.placeholder || "";
    return {
      value: props.displayPlaceholderInTextMode ? valueOrPlaceholder : valueState,
      type: props.type,
      customColor,
      suggestEditOnHover,
      tooltipPosition: props.tooltipPosition,
      ellipsisMaxLines: props.ellipsisMaxLines,
      nonEllipsisTooltip: props.tooltip,
      size: props.size,
      highlightTerm,
      brandFont
    };
  };
  const renderContentComponent = () => {
    const contentProps = getContentProps();
    if (contentRenderer) {
      return contentRenderer(contentProps);
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Heading {...contentProps} />;
  };

  const getInputProps = () => {
    const textAreaType = props.ellipsisMaxLines > 1 ? TEXTAREA_TYPE : undefined;
    const inputType = props.inputType || textAreaType;
    return {
      value: valueState,
      className: cx(`editable-heading-input`, `element-type-${props.type}`, `size-${props.size}`, inputClassName),
      isValidValue: props.isValidValue,
      onChange: props.onChange,
      onKeyDown: props.onKeyDown,
      onClick: props.onClick,
      customColor,
      onTabHandler: props.onTabHandler,
      onArrowKeyDown: props.onArrowKeyDown,
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      placeholder: props.placeholder,
      shouldFocusOnMount: props.shouldFocusOnMount,
      selectOnMount: props.selectOnMount,
      inputType,
      brandFont,
      ignoreBlurClass: props.ignoreBlurClass,
      autoSize: props.autoSize,
      textareaSubmitOnEnter: props.textareaSubmitOnEnter,
      onFinishEditing: onFinishEditingCallback,
      onCancelEditing: onCancelEditingCallback,
      onIgnoreBlurEvent: onIgnoreBlurEventCallback,
      onError: onInputErrorCallback,
      onSuccess: onInputSuccessCallback,
      ariaLabel: props.inputAriaLabel
    };
  };

  const renderInputComponent = () => {
    const inputProps = getInputProps();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <EditableInput {...inputProps} />;
  };

  const shouldEdit = !disabled && isEditing;

  return (
    <div
      ref={ref}
      style={style}
      className={cx("editable-heading--wrapper", className, {
        "inset-focus": insetFocus
      })}
      aria-label={`${value} ${tooltip || ""}`}
      id={id}
      data-testid={dataTestId}
    >
      <Clickable role={shouldEdit ? "button" : "input"} onClick={onClick} disabled={disabled}>
        {shouldEdit ? renderInputComponent() : renderContentComponent()}
      </Clickable>
    </div>
  );
};

EditableHeading.types = TYPES;
EditableHeading.sizes = SIZES;

EditableHeading.propTypes = {
  /**
   * Class name to be added to the header wrapper
   */
  className: PropTypes.string,
  /**
   * Class name to be added to the input element
   */
  inputClassName: PropTypes.string,
  /**
   * data-testid name to be added to the header wrapper
   */
  dataTestId: PropTypes.string,
  /**
   * Style to be added to the header wrapper
   */
  style: PropTypes.string,
  /**
   * Id to be added to the header wrapper
   */
  id: PropTypes.string,
  /**
   * Max Length to be added to the header wrapper
   */
  maxLength: PropTypes.number,
  /**
   * Header type
   */
  type: PropTypes.oneOf([
    EditableHeading.types.h1,
    EditableHeading.types.h2,
    EditableHeading.types.h3,
    EditableHeading.types.h4,
    EditableHeading.types.h5,
    EditableHeading.types.h6
  ]),
  size: PropTypes.oneOf([EditableHeading.sizes.SMALL, EditableHeading.sizes.MEDIUM, EditableHeading.sizes.LARGE]),
  displayPlaceholderInTextMode: PropTypes.bool,
  suggestEditOnHover: PropTypes.bool,
  /** Custom font flag, use to enable new font family on H1 headers */
  brandFont: PropTypes.bool,
  autoSize: PropTypes.bool,
  inputAriaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  errorClass: PropTypes.string,
  errorClassTimeout: PropTypes.number,
  highlightTerm: PropTypes.string,
  customColor: PropTypes.string,
  ignoreBlurClass: PropTypes.string,
  /** Callback when editing is finished (with final value) */
  onFinishEditing: PropTypes.func,
  /** Callback when editing is canceled (i.e. ESC) */
  onCancelEditing: PropTypes.func,
  /** Callback (with current value) when clicked on element that matches ignoreBlurClass */
  onIgnoreBlurEvent: PropTypes.func,
  insetFocus: PropTypes.bool
};
EditableHeading.defaultProps = {
  className: "",
  id: "",
  placeholder: undefined,
  type: TYPES.H1,
  errorClass: "error",
  errorClassTimeout: 2000,
  displayPlaceholderInTextMode: true,
  suggestEditOnHover: true,
  autoSize: true,
  size: SIZES.LARGE,
  inputAriaLabel: undefined,
  highlightTerm: null,
  customColor: undefined,
  ignoreBlurClass: undefined,
  onFinishEditing: undefined,
  onCancelEditing: undefined,
  onIgnoreBlurEvent: undefined,
  style: undefined,
  dataTestId: "",
  inputClassName: "",
  insetFocus: false,
  brandFont: false,
  maxLength: undefined
};

EditableHeading.types = TYPES;
EditableHeading.sizes = SIZES;

export default EditableHeading;
