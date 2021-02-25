import React, { useRef, useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Heading from "../Heading/Heading";
import EditableInput, { TEXTAREA_TYPE } from "../EditableInput/EditableInput";
import { TYPES } from "../Heading/HeadingConstants";

import "./EditableHeading.scss";

const EditableHeading = props => {
  const {
    className,
    value,
    editing,
    disabled,
    onFinishEditing,
    onCancelEditing,
    errorClassTimeout,
    style,
    onStartEditing,
    contentRenderer
  } = props;

  // State
  const [isEditing, setIsEditing] = useState(editing && !disabled);
  const [isError, setIsError] = useState(false);
  const [valueState, setValueState] = useState(value || "");

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

  // Effects
  useEffect(() => {
    setIsEditing(editing);
  }, [editing, setIsEditing]);

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
      nonEllipsisTooltip: props.tooltip
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
      className: `editable-heading-input heading-element-type-${props.type}`,
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
      onSuccess: onInputSuccessCallback
    };
  };

  const renderInputComponent = () => {
    const inputProps = getInputProps();
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <EditableInput {...inputProps} />;
  };

  return (
    <div ref={ref} style={style} className={cx("editable-heading--wrapper", className)} onClick={onClick}>
      {isEditing ? renderInputComponent() : renderContentComponent()}
    </div>
  );
};

EditableHeading.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(TYPES)),
  errorClass: PropTypes.string,
  errorClassTimeout: PropTypes.number,
  displayPlaceholderInTextMode: PropTypes.bool,
  suggestEditOnHover: PropTypes.bool,
  autoSize: PropTypes.bool
};
EditableHeading.defaultProps = {
  className: "",
  type: TYPES.H1,
  errorClass: "error",
  errorClassTimeout: 2000,
  displayPlaceholderInTextMode: true,
  suggestEditOnHover: true,
  autoSize: true
};

EditableHeading.types = TYPES;

export default EditableHeading;
