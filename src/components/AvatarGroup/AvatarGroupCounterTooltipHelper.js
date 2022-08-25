import React, { useCallback } from "react";
import useKeyEvent from "../../hooks/useKeyEvent";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import avatarGroupCounterTooltipContentStyles from "./AvatarGroupCounterTooltipContent.module.scss";
import useEventListener from "../../hooks/useEventListener";
import { useListenFocusTriggers } from "../../hooks/useListenFocusTriggers";

const KEYS = ["Tab"];
const ESC = ["Escape"];

export function useTooltipContentTabNavigation({
  counterContainerRef = undefined,
  tooltipContentContainerRef,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  isKeyboardTooltipVisible,
  setIsKeyboardTooltipVisible
}) {
  const showKeyboardTooltip = useCallback(() => {
    if (!isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(true);
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
    ignoreDocumentFallback: true,
    callback: hideKeyboardTooltip
  });

  //Move focus to content by keyboard
  useKeyEvent({
    keys: KEYS,
    ref: counterContainerRef,
    withoutAnyModifier: true,
    callback: useCallback(
      e => {
        e.preventDefault();
        if (isKeyboardTooltipVisible) tooltipContentContainerRef?.current && tooltipContentContainerRef.current.focus();
      },
      [isKeyboardTooltipVisible, tooltipContentContainerRef]
    )
  });

  // Close tooltip by keyboard
  useKeyEvent({
    keys: KEYS,
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    callback: hideKeyboardTooltip
  });
  useKeyEvent({
    keys: KEYS,
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
    keys: KEYS,
    ref: tooltipContentContainerRef,
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: useCallback(() => {
      // We are not preventing default behaviour here and that's why after moving focus to here we
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

export const avatarRenderer = (item, index, style = {}, type, displayAsGrid) => {
  const avatarProps = item.value;
  const overrideStyle = { ...style, width: displayAsGrid ? undefined : "100%" };
  const labelId = `tooltip-item-${index}-label`;

  return (
    <ClickableWrapper
      key={index}
      isClickable={!!avatarProps?.onClick}
      clickableProps={{ onClick: avatarProps.onClick, tabIndex: "-1" }}
    >
      <div style={overrideStyle}>
        <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} ariaLabelledby={labelId}>
          <Avatar
            {...avatarProps}
            tooltipProps={undefined}
            ariaLabel={""}
            size={Avatar.sizes.SMALL}
            type={type || avatarProps?.type}
            tabIndex="-1"
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
