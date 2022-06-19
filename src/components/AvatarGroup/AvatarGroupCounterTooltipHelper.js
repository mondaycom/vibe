import React from "react";
import { useKeyEvent } from "hooks";
import Clickable from "../Clickable/Clickable";
import Flex from "../Flex/Flex";
import Avatar from "../Avatar/Avatar";
import avatarGroupCounterTooltipContentStyles from "components/AvatarGroup/AvatarGroupCounterTooltipContent.module.scss";

export function useTooltipContentTabNavigation({
  counterContainerRef = undefined,
  tooltipContentContainerRef,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef
}) {
  // For Counter
  useKeyEvent({
    keys: ["Tab"],
    withoutAnyModifier: true,
    ref: counterContainerRef,
    callback: e => {
      // console.log("TAB avatarGroup");
      if (e.target === counterContainerRef.current) {
        e.preventDefault();
        // console.log("TAB avatarGroup (1) counterContainerRef, focusing (2) tooltipContentContainerRef");
        tooltipContentContainerRef.current && tooltipContentContainerRef.current.focus();
      }
    }
  });

  // For Counter
  useKeyEvent({
    keys: ["Tab"],
    modifier: useKeyEvent.modifiers.SHIFT,
    ref: counterContainerRef,
    callback: e => {
      // console.log("SHIFT+TAB avatarGroup");
      if (e.target === counterContainerRef.current) {
        // console.log("SHIFT+TAB avatarGroup (1) counterContainerRef, focusing (0) focusPrevPlaceholderRef");
        focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
      }
    }
  });

  // For Tooltip content
  useKeyEvent({
    keys: ["Tab"],
    // TODO optimize: no ref - so listening for all document events
    // ref: tooltipContentContainerRef // - doesn't work because there is no value at the moment of hook creation
    withoutAnyModifier: true,
    callback: e => {
      // console.log("TAB tooltipContentContainerRef", tooltipContentContainerRef);
      if (e.target === tooltipContentContainerRef.current) {
        // console.log("TAB tooltipContent (2) tooltipContentContainerRef, focusing (3) focusNextPlaceholderRef");
        focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
      }
    }
  });

  // For Tooltip content
  useKeyEvent({
    keys: ["Tab"],
    // TODO optimize: no ref - so listening for all document events
    // ref: tooltipContentContainerRef // - doesn't work because there is no value at the moment of hook creation
    modifier: useKeyEvent.modifiers.SHIFT,
    callback: e => {
      // console.log("SHIFT+TAB tooltipContentContainerRef", tooltipContentContainerRef);
      if (e.target === tooltipContentContainerRef.current) {
        e.preventDefault();
        // console.log("SHIFT+TAB tooltipContent (2) tooltipContentContainerRef, focusing (1) counterContainerRef");
        counterContainerRef.current && counterContainerRef.current.focus();
      }
    }
  });
}

export const avatarRenderer = (item, index, style = {}, type, displayAsGrid) => {
  const avatarProps = item.value;
  const overrideStyle = { ...style, width: displayAsGrid ? undefined : "100%" };

  const ClickableWrapper = ({ children }) => {
    if (!avatarProps.onClick) {
      return children;
    }

    return (
      <Clickable onClick={avatarProps.onClick} tabIndex="-1">
        {children}
      </Clickable>
    );
  };

  const labelId = `tooltip-item-${index}-label`;

  return (
    <ClickableWrapper key={index}>
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
