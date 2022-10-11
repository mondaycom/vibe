import React, { ReactElement, Ref, useCallback, useMemo, useRef, useState } from "react";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import { AvatarProps } from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import { TOOLTIP_SHOW_DELAY, useTooltipContentTabNavigation } from "./AvatarGroupCounterTooltipHelper";
import VibeComponentProps from "../../types/VibeComponentProps";
import { AvatarTypes } from "../Avatar/AvatarConstants";
import { CounterProps } from "../Counter/Counter";

interface AvatarGroupCounterTooltipContainerProps extends VibeComponentProps {
  className?: string;
  type?: AvatarTypes;
  /**
   * Counter element
   */
  children?: ReactElement<CounterProps> | ReactElement<CounterProps>[];
  // children?: any;
  /**
   * Array of Avatar elements
   */
  avatars?: ReactElement<AvatarProps>[];
  // TODO ts-migration replace with TooltipProps when Tooltip is converted to TS
  counterTooltipCustomProps?: any;
  counterTooltipIsVirtualizedList?: boolean;
  focusPrevPlaceholderRef?: Ref<HTMLDivElement>;
  focusNextPlaceholderRef?: Ref<HTMLDivElement>;
  counterContainerRef?: Ref<HTMLDivElement>;
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
  const showTrigger = useMemo(() => [Dialog.hideShowTriggers.MOUSE_ENTER], []);
  const hideTrigger = useMemo(() => [Dialog.hideShowTriggers.MOUSE_LEAVE], []);

  if (!avatars?.length && !counterTooltipCustomProps?.content) {
    return children as ReactElement<CounterProps>;
  }
  return (
    <Tooltip
      // for disable close tooltip when hovering content
      showOnDialogEnter
      open={isKeyboardTooltipVisible}
      hideDelay={TOOLTIP_SHOW_DELAY}
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

export default AvatarGroupCounterTooltipContainer;
