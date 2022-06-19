import React, { useMemo, useRef } from "react";
import PropTypes from "prop-types";
import { useKeyEvent } from "hooks";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import Avatar from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";

const AvatarGroupCounterTooltipContainer = ({
  avatarGroupContainerRef,
  counterId,
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  children,
  avatars,
  type,
  className,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList
}) => {
  const tooltipContentContainerRef = useRef(null);
  const tooltipContent = useMemo(
    () =>
      counterTooltipCustomProps?.content || (
        <AvatarGroupCounterTooltipContent
          avatars={avatars}
          type={type}
          className={className}
          isVirtualizedList={counterTooltipIsVirtualizedList}
          tooltipContentContainerRef={tooltipContentContainerRef}
        />
      ),
    [avatars, className, counterTooltipCustomProps?.content, counterTooltipIsVirtualizedList, type]
  );

  useKeyEvent({
    keys: ["Tab"],
    withoutModifier: true,
    // ref: avatarGroupContainerRef,
    callback: e => {
      console.log("TAB");
      const target = e.target;
      if (target.id === counterId) {
        e.preventDefault();
        console.log("TAB (1) counter-container-id, focusing (2) tooltip-content-container-id");
        const tooltipContentContainerElement = document.getElementById("tooltip-content-container-id");
        tooltipContentContainerElement && tooltipContentContainerElement.focus();
      }
      if (target === tooltipContentContainerRef.current) {
        console.log("TAB (2) tooltip-content-container-id, focusing (3) avatar-group-focus-next-placeholder");
        focusNextPlaceholderRef?.current && focusNextPlaceholderRef.current.focus();
      }
    }
  });

  useKeyEvent({
    keys: ["Tab"],
    modifier: useKeyEvent.modifiers.SHIFT,
    // ref: avatarGroupContainerRef,
    callback: e => {
      const target = e.target;
      console.log("SHIFT+TAB");
      if (target.id === counterId) {
        console.log("SHIFT+TAB (1) counter-container-id, focusing (0) avatar-group-focus-prev-placeholder");
        focusPrevPlaceholderRef?.current && focusPrevPlaceholderRef.current.focus();
      }
      if (target === tooltipContentContainerRef.current) {
        e.preventDefault();
        console.log("SHIFT+TAB (2) tooltip-content-container-id, focusing (1) counter-container-id");
        const counterContainer = document.getElementById(counterId);
        counterContainer && counterContainer.focus();
      }
    }
  });

  if (!avatars?.length && !counterTooltipCustomProps?.content) {
    return children;
  }

  return (
    <Tooltip
      showOnDialogEnter
      hideDelay={200}
      showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
      hideTrigger={[Dialog.hideShowTriggers.ESCAPE_KEY, Dialog.hideShowTriggers.MOUSE_LEAVE]}
      {...(counterTooltipCustomProps || {})}
      content={tooltipContent}
    >
      {children}
    </Tooltip>
  );
};

AvatarGroupCounterTooltipContainer.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  /**
   * Counter element
   */
  children: PropTypes.element,
  /**
   * Array of Avatar elements
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  focusPrevPlaceholderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  focusNextPlaceholderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  counterId: PropTypes.string
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  children: [],
  avatars: [],
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  focusPrevPlaceholderRef: false,
  focusNextPlaceholderRef: false,
  counterId: undefined
};

export default AvatarGroupCounterTooltipContainer;
