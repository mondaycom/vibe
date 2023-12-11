import cx from "classnames";
import React, { forwardRef, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import autosize from "autosize";
import useStyle from "../../hooks/useStyle";
import useMergeRef from "../../hooks/useMergeRef";
import {
  isArrowDownEvent,
  isArrowLeftEvent,
  isArrowRightEvent,
  isArrowUpEvent,
  isEnterEvent,
  isEscapeEvent,
  isTabEvent
} from "../../utils/dom-event-utils";
import VibeComponent from "../../types/VibeComponent";
import { VibeComponentProps, withStaticProps } from "../../types";
import { InputType } from "./EditableInputConstants";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import styles from "./EditableInput.module.scss";

export interface EditableInputProps extends VibeComponentProps {
  value?: string;
  placeholder?: string;
  inputType?: InputType;
  autoSize?: boolean;
  autoComplete?: boolean;
  disabled?: boolean;
  maxLength?: number;
  shouldFocusOnMount?: boolean;
  textareaSubmitOnEnter?: boolean;
  ariaLabel?: string;
  customColor?: string;
  tabIndex?: number;
  isValidValue?: (value: string) => boolean;
  onFinishEditing?: (value: string, event: React.KeyboardEvent | React.FocusEvent) => void;
  onArrowKeyDown?: (value: string, event: React.KeyboardEvent) => void;
  onClick?: (event: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onKeyPress?: () => void;
  selectOnMount?: () => void;
  ignoreBlurClass?: string;
  onIgnoreBlurEvent?: (value: string) => void;
  onFocus?: (event: React.FocusEvent) => void;
  onBlur?: (event: React.FocusEvent) => void;
  onCancelEditing?: (event: React.KeyboardEvent) => void;
  onChange?: (value: string) => void;
  onError?: () => void;
  onSuccess?: () => void;
  onKeyDown?: (event: React.KeyboardEvent, value: string) => void;
  onTabHandler?: (value: string, event: React.KeyboardEvent) => void;
}

const EditableInput: VibeComponent<EditableInputProps> & {
  inputTypes?: typeof InputType;
} = forwardRef(
  (
    {
      className,
      inputType = InputType.INPUT,
      autoSize = false,
      id,
      tabIndex,
      autoComplete = true,
      disabled = false,
      maxLength,
      placeholder = "",
      onClick,
      onKeyPress,
      shouldFocusOnMount = true,
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
      textareaSubmitOnEnter = false,
      onArrowKeyDown,
      ariaLabel,
      "data-testid": dataTestId
    },
    ref
  ) => {
    // State
    const [valueState, setValueState] = useState(value || "");

    // Refs
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    // Callbacks
    const autosizeIfNeeded = useCallback(() => {
      if (componentRef.current && autoSize && inputType === InputType.TEXT_AREA) {
        autosize(componentRef.current);
      }
    }, [componentRef, autoSize, inputType]);

    const focus = useCallback(() => {
      if (componentRef.current) {
        requestAnimationFrame(() => {
          componentRef.current?.focus();
        });
      }
    }, [componentRef]);

    const onFocusCallback = useCallback(
      (event: React.FocusEvent) => {
        if (onFocus) {
          onFocus(event);
        }
      },
      [onFocus]
    );

    const onBlurCallback = useCallback(
      (event: React.FocusEvent) => {
        const shouldIgnoreBlur = (el: EventTarget & Element, ignoreClass: string) => {
          return el && ignoreClass && el.classList.contains(ignoreClass);
        };

        const { relatedTarget } = event;
        if (shouldIgnoreBlur(relatedTarget, ignoreBlurClass)) {
          onIgnoreBlurEvent(valueState);
          return;
        }

        const enrichedEvent = event;
        // @ts-ignore TS2339: Property 'origin' does not exist on type 'FocusEvent'
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
      (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      (event: React.KeyboardEvent) => {
        if (onKeyDown) {
          return onKeyDown(event, valueState);
        }

        if (onTabHandler && isTabEvent(event) && inputType !== InputType.TEXT_AREA) {
          event.preventDefault();
          return onTabHandler(valueState, event);
        }

        if (onFinishEditing && isEnterEvent(event) && (inputType !== InputType.TEXT_AREA || textareaSubmitOnEnter)) {
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

    const rows = inputType === InputType.TEXT_AREA && autoSize ? 1 : undefined;
    const InputTypeComponent = inputType;
    return (
      <InputTypeComponent
        ref={mergedRef}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.EDITABLE_INPUT, id)}
        style={style}
        className={cx(styles.editableInputWrapper, className, {
          [styles.noResize]: autoSize
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
        disabled={disabled}
      />
    );
  }
);

export default withStaticProps(EditableInput, {
  inputTypes: InputType
});
