import React, { type CSSProperties, type RefObject, useCallback, useRef } from "react";
import { Flex } from "@vibe/layout";
import { Avatar, type AvatarProps, type AvatarType } from "@vibe/avatar";
import { ClickableWrapper } from "@vibe/clickable";
import avatarGroupCounterTooltipContentStyles from "./AvatarGroupCounterTooltipContent.module.scss";
import { useKeyEvent, useEventListener, keyCodes, type ElementContent } from "@vibe/shared";
import { AVATAR_GROUP_COUNTER_AVATAR_SIZE, AVATAR_GROUP_COUNTER_TOOLTIP_SHOW_DELAY } from "./AvatarGroupConstants";

function useListenFocusTriggers({
  ref,
  onFocusByKeyboard,
  onFocusByMouse
}: {
  ref: RefObject<HTMLElement>;
  onFocusByKeyboard?: (event: FocusEvent) => void;
  onFocusByMouse?: (event: FocusEvent) => void;
}) {
  const isElementMouseDown = useRef(false);

  const onMouseDown = useCallback(() => {
    isElementMouseDown.current = true;
  }, [isElementMouseDown]);

  const onFocus = useCallback(
    (e: FocusEvent) => {
      if (isElementMouseDown.current) {
        onFocusByMouse?.(e);
      } else {
        onFocusByKeyboard?.(e);
      }
    },
    [onFocusByKeyboard, onFocusByMouse]
  );
  const onMouseUp = useCallback(() => {
    isElementMouseDown.current = false;
  }, [isElementMouseDown]);

  useEventListener({ eventName: "mousedown", ref, callback: onMouseDown });
  useEventListener({ eventName: "focus", ref, callback: onFocus });
  useEventListener({ eventName: "mouseup", ref, callback: onMouseUp });
}

const TAB = [keyCodes.TAB];
const ESC = [keyCodes.ESCAPE];

export function useTooltipContentTabNavigation({
  counterContainerRef = undefined,
  tooltipContentContainerRef,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  isKeyboardTooltipVisible,
  setIsKeyboardTooltipVisible
}: {
  counterContainerRef: RefObject<HTMLDivElement>;
  tooltipContentContainerRef: RefObject<HTMLElement>;
  focusPrevPlaceholderRef: RefObject<HTMLDivElement>;
  focusNextPlaceholderRef: RefObject<HTMLDivElement>;
  isKeyboardTooltipVisible: boolean;
  setIsKeyboardTooltipVisible: (value: boolean) => void;
}) {
  const showKeyboardTooltip = useCallback(() => {
    if (!isKeyboardTooltipVisible) {
      // temp hack for display tooltip with delay after timeout because refactoring the tooltip with open mechanism is out of scope
      setTimeout(() => setIsKeyboardTooltipVisible(true), AVATAR_GROUP_COUNTER_TOOLTIP_SHOW_DELAY);
    }
  }, [isKeyboardTooltipVisible, setIsKeyboardTooltipVisible]);

  const hideKeyboardTooltip = useCallback(() => {
    if (isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(false);
  }, [isKeyboardTooltipVisible, setIsKeyboardTooltipVisible]);

  // Open tooltip manually when keyboard focusing on counter
  useListenFocusTriggers({
    ref: counterContainerRef,
    onFocusByKeyboard: showKeyboardTooltip
  });

  useEventListener({
    eventName: "blur",
    ref: tooltipContentContainerRef,
    callback: hideKeyboardTooltip
  });

  //Move focus to content by keyboard
  useKeyEvent({
    keys: TAB,
    ref: counterContainerRef,
    withoutAnyModifier: true,
    preventDefault: true,
    callback: useCallback(() => {
      if (isKeyboardTooltipVisible) tooltipContentContainerRef?.current && tooltipContentContainerRef.current.focus();
    }, [isKeyboardTooltipVisible, tooltipContentContainerRef])
  });

  // Close tooltip by keyboard
  useKeyEvent({
    keys: TAB,
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    callback: hideKeyboardTooltip
  });
  useKeyEvent({
    keys: TAB,
    ref: tooltipContentContainerRef,
    withoutAnyModifier: true,
    callback: useCallback(() => {
      // We are not preventing default behaviour here and that's why after pressing tab and after moving focus to here
      // the browser will move the focus to the next element in the focus order.
      focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
      if (isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(false);
    }, [focusNextPlaceholderRef, isKeyboardTooltipVisible, setIsKeyboardTooltipVisible])
  });
  useKeyEvent({
    keys: TAB,
    ref: tooltipContentContainerRef,
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: useCallback(() => {
      // We are not preventing default behaviour here and that's why after pressing tab and after moving focus to here
      // the browser will move the focus to the next element in the focus order.
      focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
      if (isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(false);
    }, [focusPrevPlaceholderRef, isKeyboardTooltipVisible, setIsKeyboardTooltipVisible])
  });
  useKeyEvent({
    keys: ESC,
    ref: tooltipContentContainerRef,
    callback: useCallback(() => {
      counterContainerRef?.current && counterContainerRef.current.focus();
      if (isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(false);
    }, [counterContainerRef, isKeyboardTooltipVisible, setIsKeyboardTooltipVisible])
  });
  useKeyEvent({
    keys: ESC,
    ref: counterContainerRef,
    callback: hideKeyboardTooltip
  });

  // Close tooltip when moving focus to next element
  useEventListener({
    eventName: "focus",
    ref: focusNextPlaceholderRef,
    callback: hideKeyboardTooltip
  });
}

export const avatarRenderer = (
  item: { value: AvatarProps & { tooltipContent: ElementContent } },
  index: number,
  style: CSSProperties,
  type: AvatarType,
  displayAsGrid: boolean
) => {
  const avatarProps = item.value;
  const overrideStyle: CSSProperties = { ...style, width: displayAsGrid ? undefined : "100%" };
  const labelId = `tooltip-item-${index}-label`;

  return (
    <ClickableWrapper
      key={index}
      isClickable={!!avatarProps?.onClick}
      clickableProps={{ onClick: event => avatarProps.onClick(event, avatarProps.id), tabIndex: -1 }}
    >
      <div style={overrideStyle}>
        <Flex direction="row" gap="xs" aria-labelledby={labelId}>
          <Avatar
            {...avatarProps}
            tooltipProps={undefined}
            aria-label={""}
            customSize={AVATAR_GROUP_COUNTER_AVATAR_SIZE}
            type={type || avatarProps?.type}
            tabIndex={-1}
            size="small"
            className={avatarGroupCounterTooltipContentStyles.tooltipAvatarItemAvatar}
          />
          {!displayAsGrid && (
            <div id={labelId} className={avatarGroupCounterTooltipContentStyles.tooltipAvatarItemTitle}>
              {avatarProps.tooltipContent}
            </div>
          )}
        </Flex>
      </div>
    </ClickableWrapper>
  );
};
