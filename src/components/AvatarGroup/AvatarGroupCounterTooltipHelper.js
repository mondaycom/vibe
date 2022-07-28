import React, { useCallback } from "react";
import { useKeyEvent } from "../../hooks";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import ClickableWrapper from "../Clickable/ClickableWrapper";
import avatarGroupCounterTooltipContentStyles from "./AvatarGroupCounterTooltipContent.module.scss";

const KEYS = ["Tab"];

export function useTooltipContentTabNavigation({
  counterContainerRef = undefined,
  tooltipContentContainerRef,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  setShouldUpdate,
  setIsTooltipVisible
}) {
  const hideTooltip = useCallback(() => {
    // Tricky way to close the tooltip
    setTimeout(() => {
      setIsTooltipVisible(false);
      setIsTooltipVisible(true);
    });
  }, [setIsTooltipVisible]);

  // For Counter
  useKeyEvent({
    keys: KEYS,
    withoutAnyModifier: true,
    ref: counterContainerRef,
    callback: useCallback(
      e => {
        if (e.target === counterContainerRef.current) {
          e.preventDefault();
          tooltipContentContainerRef?.current && tooltipContentContainerRef.current.focus();
          setShouldUpdate(prev => !prev);
        }
      },
      [counterContainerRef.current, setShouldUpdate, tooltipContentContainerRef]
    )
  });

  // For Counter
  useKeyEvent({
    keys: KEYS,
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    callback: useCallback(
      e => {
        if (e.target === counterContainerRef.current) {
          focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
          hideTooltip();
        }
      },
      [counterContainerRef.current, focusPrevPlaceholderRef, hideTooltip]
    )
  });

  // For Tooltip content
  useKeyEvent({
    keys: KEYS,
    ref: tooltipContentContainerRef,
    withoutAnyModifier: true,
    callback: useCallback(
      e => {
        if (e.target === tooltipContentContainerRef.current) {
          focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
          hideTooltip();
        }
      },
      [focusNextPlaceholderRef, hideTooltip, tooltipContentContainerRef.current]
    )
  });

  // For Tooltip content
  useKeyEvent({
    keys: KEYS,
    ref: tooltipContentContainerRef,
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: useCallback(
      e => {
        if (e.target === tooltipContentContainerRef.current) {
          e.preventDefault();
          counterContainerRef?.current && counterContainerRef.current.focus();
        }
      },
      [counterContainerRef, tooltipContentContainerRef.current]
    )
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
