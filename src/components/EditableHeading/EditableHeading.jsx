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

const EditableHeading = ({
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
  tooltip,
  placeholder,
  displayPlaceholderInTextMode,
  type,
  tooltipPosition,
  ellipsisMaxLines,
  size,
  isValidValue,
  onChange,
  onKeyDown,
  onTabHandler,
  onArrowKeyDown,
  autoComplete,
  maxLength,
  shouldFocusOnMount,
  selectOnMount,
  ignoreBlurClass,
  autoSize,
  textareaSubmitOnEnter,
  inputAriaLabel
}) => {
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
    const suggestEditOnHover = suggestEditOnHover && !disabled;
    const valueOrPlaceholder = valueState || placeholder || "";
    return {
      value: displayPlaceholderInTextMode ? valueOrPlaceholder : valueState,
      type,
      suggestEditOnHover,
      tooltipPosition,
      ellipsisMaxLines,
      nonEllipsisTooltip: tooltip,
      size
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
    const textAreaType = ellipsisMaxLines > 1 ? TEXTAREA_TYPE : undefined;
    const inputType = inputType || textAreaType;
    return {
      value: valueState,
      className: `editable-heading-input element-type-${type} size-${size}`,
      isValidValue,
      onChange,
      onKeyDown,
      onClick,
      onTabHandler,
      onArrowKeyDown,
      autoComplete,
      maxLength,
      placeholder,
      shouldFocusOnMount,
      selectOnMount,
      inputType,
      ignoreBlurClass,
      autoSize,
      textareaSubmitOnEnter,
      onFinishEditing: onFinishEditingCallback,
      onCancelEditing: onCancelEditingCallback,
      onError: onInputErrorCallback,
      onSuccess: onInputSuccessCallback,
      ariaLabel: inputAriaLabel
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

EditableHeading.types = TYPES;
EditableHeading.sizes = SIZES;

EditableHeading.propTypes = {
  /**
   * Class name to be added to the header wrapper
   */
  className: PropTypes.string,
  /**
   * Id to be added to the header wrapper
   */
  id: PropTypes.string,
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
  autoSize: PropTypes.bool,
  inputAriaLabel: PropTypes.string,
  placeholder: PropTypes.string,
  errorClass: PropTypes.string,
  errorClassTimeout: PropTypes.number
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
  inputAriaLabel: undefined
};

EditableHeading.types = TYPES;
EditableHeading.sizes = SIZES;

export default EditableHeading;
