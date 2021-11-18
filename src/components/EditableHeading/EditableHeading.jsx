import React, { useRef, useState, useCallback, useEffect, useMemo, useLayoutEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { useButton } from "@react-aria/button";
import Heading from "../Heading/Heading";
import EditableInput, { TEXTAREA_TYPE } from "../EditableInput/EditableInput";
import { TYPES } from "../Heading/HeadingConstants";
import { SIZES } from "../../constants/sizes";
import usePrevious from "../../hooks/usePrevious";
import "./EditableHeading.scss";

const EditableHeading = props => {
  const {
    id,
    className,
    value,
    editing,
    disabled,
    onFinishEditing,
    onCancelEditing,
    errorClassTimeout,
    style,
    onStartEditing,
    contentRenderer,
    tooltip
  } = props;

  // State
  const [isEditing, setIsEditing] = useState(editing && !disabled);
  const [isError, setIsError] = useState(false);
  const [valueState, setValueState] = useState(value || "");
  const prevValue = usePrevious(value);

  // Refs
  const ref = useRef(null);

  // Callbacks
  const onClick = useCallback(() => {
    if (disabled || isEditing) return;
    setIsEditing(true);
    onStartEditing && onStartEditing();
  }, [isEditing, disabled, setIsEditing, onStartEditing]);

  const onFinishEditingCallback = useCallback(
    (newValue, event) => {
      setIsEditing(false);
      setValueState(newValue);
      onFinishEditing && onFinishEditing(newValue, event);
    },
    [onFinishEditing, setIsEditing, setValueState]
  );

  const onCancelEditingCallback = useCallback(
    event => {
      setIsEditing(false);
      onCancelEditing && onCancelEditing(event);
    },
    [onCancelEditing, setIsEditing]
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

  const { buttonProps } = useButton({
    onPress: onClick,
    elementType: "div"
  });

  // Effects
  useEffect(() => {
    // Update value if changed from props
    if (!editing && value !== prevValue && value !== valueState) {
      setValueState(value);
    }
  }, [editing, value, prevValue, valueState, setValueState]);

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
      suggestEditOnHover,
      tooltipPosition: props.tooltipPosition,
      ellipsisMaxLines: props.ellipsisMaxLines,
      nonEllipsisTooltip: props.tooltip,
      size: props.size
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
      className: `editable-heading-input element-type-${props.type} size-${props.size}`,
      isValidValue: props.isValidValue,
      onChange: props.onChange,
      onKeyDown: props.onKeyDown,
      onClick: props.onClick,
      onTabHandler: props.onTabHandler,
      onArrowKeyDown: props.onArrowKeyDown,
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      placeholder: props.placeholder,
      shouldFocusOnMount: props.shouldFocusOnMount,
      selectOnMount: props.selectOnMount,
      inputType,
      ignoreBlurClass: props.ignoreBlurClass,
      autoSize: props.autoSize,
      textareaSubmitOnEnter: props.textareaSubmitOnEnter,
      onFinishEditing: onFinishEditingCallback,
      onCancelEditing: onCancelEditingCallback,
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

  const clickProps = useMemo(() => {
    return isEditing ? { onClick, role: "button", tabIndex: "0" } : buttonProps;
  }, [isEditing, buttonProps, onClick]);

  return (
    <div
      ref={ref}
      style={style}
      className={cx("editable-heading--wrapper", className)}
      {...clickProps}
      aria-label={`${value} ${tooltip || ""}`}
      id={id}
    >
      {isEditing ? renderInputComponent() : renderContentComponent()}
    </div>
  );
};

EditableHeading.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  errorClass: PropTypes.string,
  errorClassTimeout: PropTypes.number,
  displayPlaceholderInTextMode: PropTypes.bool,
  suggestEditOnHover: PropTypes.bool,
  autoSize: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(SIZES)),
  inputAriaLabel: PropTypes.string
};
EditableHeading.defaultProps = {
  className: "",
  id: "",
  type: TYPES.H1,
  errorClass: "error",
  errorClassTimeout: 2000,
  displayPlaceholderInTextMode: true,
  suggestEditOnHover: true,
  autoSize: true,
  size: SIZES.LARGE,
  inputAriaLabel: undefined
};

EditableHeading.types = TYPES;
EditableHeading.sizes = SIZES;

export default EditableHeading;
