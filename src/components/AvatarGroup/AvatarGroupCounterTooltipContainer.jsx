import React, { useCallback, useMemo, useRef, useState } from "react";
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
  const keyboardTooltipTrigger = useMemo(
    () => ({
      show: [Dialog.hideShowTriggers.FOCUS],
      hide: [Dialog.hideShowTriggers.ESCAPE_KEY, Dialog.hideShowTriggers.TAB_KEY, Dialog.hideShowTriggers.CLICK_OUTSIDE]
    }),
    []
  );
  const mouseTooltipTrigger = useMemo(
    () => ({
      show: [Dialog.hideShowTriggers.MOUSE_ENTER],
      hide: [Dialog.hideShowTriggers.MOUSE_LEAVE]
    }),
    []
  );

  // Used to close tooltip
  const [isKeyboardTooltipVisible, setIsKeyboardTooltipVisible] = useState(false);

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
    setIsKeyboardTooltipVisible
  });

  // Tooltip props
  const onHide = useCallback(() => {
    setIsKeyboardTooltipVisible(false);
  }, []);
  const showTrigger = useMemo(
    () => [...keyboardTooltipTrigger.show, ...mouseTooltipTrigger.show],
    [keyboardTooltipTrigger.show, mouseTooltipTrigger.show]
  );
  const hideTrigger = isKeyboardTooltipVisible ? keyboardTooltipTrigger.hide : mouseTooltipTrigger.hide;

  if (!avatars?.length && !counterTooltipCustomProps?.content) {
    return children;
  }

  return (
    <Tooltip
      showOnDialogEnter
      hideDelay={200}
      showTrigger={showTrigger}
      hideTrigger={hideTrigger}
      onTooltipHide={onHide}
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
