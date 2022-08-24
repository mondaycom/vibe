import React, { useCallback } from "react";
import useKeyEvent from "../../hooks/useKeyEvent";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import avatarGroupCounterTooltipContentStyles from "./AvatarGroupCounterTooltipContent.module.scss";
import useEventListener from "../../hooks/useEventListener";

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
  // For Counter
  useEventListener({
    eventName: "focus",
    ref: counterContainerRef,
    callback: useCallback(
      e => {
        setIsKeyboardTooltipVisible(true);
      },
      [setIsKeyboardTooltipVisible]
    )
  });

  useEventListener({
    eventName: "focus",
    ref: focusNextPlaceholderRef,
    callback: useCallback(
      e => {
        console.log("%%%");
        setIsKeyboardTooltipVisible(false);
      },
      [setIsKeyboardTooltipVisible]
    )
  });

  useEventListener({
    eventName: "blur",
    ref: tooltipContentContainerRef,
    ignoreDocumentFallback: true,
    callback: useCallback(
      e => {
        console.log("%%%$", document.activeElement);
        if (document.activeElement !== counterContainerRef?.current) {
          setIsKeyboardTooltipVisible(false);
        }
      },
      [setIsKeyboardTooltipVisible, counterContainerRef]
    )
  });

  // For Counter
  useKeyEvent({
    keys: KEYS,
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    ignoreDocumentFallback: true,
    callback: useCallback(
      e => {
        if (e.target === counterContainerRef.current) {
          setIsKeyboardTooltipVisible(false);
        }
      },
      [counterContainerRef, setIsKeyboardTooltipVisible]
    )
  });

  // For Tooltip content
  useKeyEvent({
    keys: KEYS,
    ref: counterContainerRef,
    ignoreDocumentFallback: true,
    withoutAnyModifier: true,
    callback: useCallback(
      e => {
        e.preventDefault();
        if (isKeyboardTooltipVisible) tooltipContentContainerRef?.current && tooltipContentContainerRef.current.focus();
      },
      [isKeyboardTooltipVisible, tooltipContentContainerRef]
    )
  });

  // For Tooltip content
  useKeyEvent({
    keys: KEYS,
    ref: tooltipContentContainerRef,
    ignoreDocumentFallback: true,
    withoutAnyModifier: true,
    callback: useCallback(() => {
      // We are not preventing default behivour here and that's why after moving focus to here we
      // the browser will move the focus to the next element in the focus order.
      focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
      if (isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(false);
    }, [focusNextPlaceholderRef, isKeyboardTooltipVisible, setIsKeyboardTooltipVisible])
  });

  useKeyEvent({
    keys: KEYS,
    ref: tooltipContentContainerRef,
    ignoreDocumentFallback: true,
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: useCallback(() => {
      // We are not preventing default behivour here and that's why after moving focus to here we
      // the browser will move the focus to the next element in the focus order.
      focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
      if (isKeyboardTooltipVisible) setIsKeyboardTooltipVisible(false);
    }, [focusPrevPlaceholderRef, isKeyboardTooltipVisible, setIsKeyboardTooltipVisible])
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
