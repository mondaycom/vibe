import React, { CSSProperties, RefObject, useCallback } from "react";
import useKeyEvent from "../../hooks/useKeyEvent";
import Flex from "../Flex/Flex";
import Avatar, { AvatarProps } from "../Avatar/Avatar";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import avatarGroupCounterTooltipContentStyles from "./AvatarGroupCounterTooltipContent.module.scss";
import useEventListener from "../../hooks/useEventListener";
import useListenFocusTriggers from "../../hooks/useListenFocusTriggers";
import { AvatarType } from "../Avatar/AvatarConstants";
import { ElementContent } from "src/types/ElementContent";
import { AVATAR_GROUP_COUNTER_AVATAR_SIZE, AVATAR_GROUP_COUNTER_TOOLTIP_SHOW_DELAY } from "./AvatarGroupConstants";
import { keyCodes } from "../../constants";

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
      clickableProps={{ onClick: event => avatarProps.onClick(event, avatarProps.id), tabIndex: "-1" }}
    >
      <div style={overrideStyle}>
        <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} ariaLabelledby={labelId}>
          <Avatar
            {...avatarProps}
            tooltipProps={undefined}
            ariaLabel={""}
            customSize={AVATAR_GROUP_COUNTER_AVATAR_SIZE}
            type={type || avatarProps?.type}
            tabIndex={-1}
            size={Avatar.sizes.SMALL}
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
