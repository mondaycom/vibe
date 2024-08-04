import React, { ReactElement, RefObject, useCallback, useMemo, useRef, useState } from "react";
import Tooltip, { TooltipProps } from "../Tooltip/Tooltip";
import { AvatarProps } from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import { useTooltipContentTabNavigation } from "./AvatarGroupCounterTooltipHelper";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarType } from "../Avatar/Avatar.types";
import { AVATAR_GROUP_COUNTER_TOOLTIP_SHOW_DELAY } from "./AvatarGroupConstants";

export interface AvatarGroupCounterTooltipContainerProps extends VibeComponentProps {
  className?: string;
  type?: AvatarType;
  /**
   * Counter element & focus placeholders
   */
  children?: ReactElement[];
  /**
   * Array of Avatar elements
   */
  avatars?: ReactElement<AvatarProps>[];
  counterTooltipCustomProps?: TooltipProps;
  counterTooltipIsVirtualizedList?: boolean;
  focusPrevPlaceholderRef?: RefObject<HTMLDivElement>;
  focusNextPlaceholderRef?: RefObject<HTMLDivElement>;
  counterContainerRef?: RefObject<HTMLDivElement>;
}

const AvatarGroupCounterTooltipContainer: React.FC<AvatarGroupCounterTooltipContainerProps> = ({
  focusPrevPlaceholderRef,
  focusNextPlaceholderRef,
  counterContainerRef,
  children = [],
  avatars = [],
  type,
  className,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList = false
}) => {
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
    setIsKeyboardTooltipVisible,
    isKeyboardTooltipVisible
  });

  // Tooltip props
  const onHide = useCallback(() => {
    setIsKeyboardTooltipVisible(false);
  }, []);

  if (!avatars?.length && !counterTooltipCustomProps?.content) {
    return <>{children}</>;
  }
  return (
    <Tooltip
      open={isKeyboardTooltipVisible}
      hideDelay={AVATAR_GROUP_COUNTER_TOOLTIP_SHOW_DELAY}
      showTrigger="mouseenter"
      hideTrigger="mouseleave"
      onTooltipHide={onHide}
      {...(counterTooltipCustomProps || {})}
      content={tooltipContent}
    >
      {children}
    </Tooltip>
  );
};

export default AvatarGroupCounterTooltipContainer;
