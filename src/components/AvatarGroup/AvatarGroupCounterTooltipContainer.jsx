import React, { useMemo, useRef, useState } from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import Avatar from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import { useTooltipContentTabNavigation } from "./AvatarGroupCounterTooltipHelper";

const AvatarGroupCounterTooltipContainer = ({
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  counterContainerRef,
  children,
  avatars,
  type,
  className,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList
}) => {
  // Dummy state to rerender the component, when tooltip appear, so useTooltipContentTabNavigation will have an existing tooltipContentContainerRef
  const [, setShouldUpdate] = useState(false);
  // Used to close tooltip
  const [isTooltipVisible, setIsTooltipVisible] = useState(true);

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

  useTooltipContentTabNavigation({
    counterContainerRef,
    tooltipContentContainerRef,
    focusPrevPlaceholderRef,
    focusNextPlaceholderRef,
    setShouldUpdate,
    setIsTooltipVisible
  });

  if (!avatars?.length && !counterTooltipCustomProps?.content) {
    return children;
  }

  if (!isTooltipVisible) {
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
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  /**
   * Array of Avatar elements
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  focusPrevPlaceholderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  focusNextPlaceholderRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  counterContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  children: [],
  avatars: [],
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  focusPrevPlaceholderRef: undefined,
  focusNextPlaceholderRef: undefined,
  counterContainerRef: undefined
};

export default AvatarGroupCounterTooltipContainer;
