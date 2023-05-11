import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import cx from "classnames";
import Heading, { HeadingProps } from "../Heading/Heading";
import Clickable from "../Clickable/Clickable";
import EditableInput, { EditableInputProps } from "../EditableInput/EditableInput";
import usePrevious from "../../hooks/usePrevious";
import { InputType } from "../EditableInput/EditableInputConstants";
import "./EditableHeading.scss";
import { HeadingSizes, HeadingTypes } from "../Heading/HeadingConstants";
import { Sizes } from "../../constants";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";

export interface EditableHeadingProps extends EditableInputProps, HeadingProps {
  displayPlaceholderInTextMode?: boolean;
  inputAriaLabel?: string;
  errorClass?: string;
  headingClassName?: string;
  inputClassName?: string;
  dataTestId?: string;
  "data-testid"?: string;
  editing?: boolean;
  disabled?: boolean;
  errorClassTimeout?: number;
  style?: React.CSSProperties;
  onStartEditing?: (event: React.KeyboardEvent) => void;
  tooltip?: string;
  insetFocus?: boolean;
  contentRenderer?: React.FC;
}

const EditableHeading: React.FC<EditableHeadingProps> & {
  sizes?: Sizes;
  types?: typeof HeadingTypes;
} = props => {
  const {
    id = "",
    className,
    inputClassName = "",
    dataTestId = "",
    "data-testid": dataTestIdOverride = "",
    value,
    editing,
    disabled,
    onFinishEditing,
    onCancelEditing,
    onIgnoreBlurEvent,
    errorClassTimeout = 2000,
    style,
    customColor,
    onStartEditing,
    contentRenderer,
    tooltip,
    autoSize = true,
    highlightTerm = null,
    insetFocus = false,
    size = HeadingSizes.LARGE,
    displayPlaceholderInTextMode = true,
    suggestEditOnHover = true,
    type = Heading.types.h1
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
    (event: React.KeyboardEvent) => {
      if (disabled || isEditing) return;
      setIsEditing(true);
      onStartEditing && onStartEditing(event);
    },
    [isEditing, disabled, setIsEditing, onStartEditing]
  );

  const onFinishEditingCallback = useCallback(
    (newValue: string, event: React.KeyboardEvent | React.FocusEvent) => {
      setIsEditing(false);
      setValueState(newValue);
      onFinishEditing?.(newValue, event);
    },
    [onFinishEditing, setIsEditing, setValueState]
  );

  const onCancelEditingCallback = useCallback(
    (event: React.KeyboardEvent) => {
      setIsEditing(false);
      onCancelEditing?.(event);
    },
    [onCancelEditing, setIsEditing]
  );

  const onIgnoreBlurEventCallback = useCallback(
    (value: string) => {
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
    let timer: ReturnType<typeof setTimeout>;
    if (isError) {
      timer = setTimeout(clearErrorState, errorClassTimeout);
    }
    return () => timer && clearTimeout(timer);
  }, [isError, setIsError, clearErrorState, errorClassTimeout]);

  const renderContentComponent = () => {
    const valueOrPlaceholder = valueState || props.placeholder || "";
    const contentProps = {
      value: displayPlaceholderInTextMode ? valueOrPlaceholder : valueState,
      type,
      customColor,
      suggestEditOnHover: suggestEditOnHover && !disabled,
      tooltipPosition: props.tooltipPosition,
      ellipsisMaxLines: props.ellipsisMaxLines,
      nonEllipsisTooltip: props.tooltip,
      size: size as Sizes,
      className: props.headingClassName,
      highlightTerm
    };

    if (contentRenderer) {
      return contentRenderer(contentProps);
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Heading {...contentProps} />;
  };

  const getInputProps = () => {
    const textAreaType = props.ellipsisMaxLines > 1 ? InputType.TEXT_AREA : undefined;
    const inputType = props.inputType || textAreaType;
    return {
      value: valueState,
      className: cx(`editable-heading-input`, `element-type-${type}`, `size-${size}`, inputClassName),
      isValidValue: props.isValidValue,
      onChange: props.onChange,
      onKeyDown: props.onKeyDown,
      onKeyPress: props.onKeyPress,
      onClick: props.onClick,
      customColor,
      onTabHandler: props.onTabHandler,
      onArrowKeyDown: props.onArrowKeyDown,
      autoComplete: props.autoComplete,
      maxLength: props.maxLength,
      placeholder: props.placeholder,
      shouldFocusOnMount: props.shouldFocusOnMount,
      selectOnMount: props.selectOnMount,
      onBlur: props.onBlur,
      onFocus: props.onFocus,
      inputType,
      ignoreBlurClass: props.ignoreBlurClass,
      autoSize,
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
      data-testid={dataTestId || dataTestIdOverride || getTestId(ComponentDefaultTestId.EDITABLE_HEADING, id)}
    >
      <Clickable role={shouldEdit ? "button" : "input"} onClick={onClick} disabled={disabled}>
        {shouldEdit ? renderInputComponent() : renderContentComponent()}
      </Clickable>
    </div>
  );
};

Object.assign(EditableHeading, {
  types: HeadingTypes,
  sizes: HeadingSizes
});

export default EditableHeading;
