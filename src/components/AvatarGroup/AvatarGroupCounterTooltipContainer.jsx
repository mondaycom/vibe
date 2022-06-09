import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import AvatarGroupCounterTooltip from "../AvatarGroup/AvatarGroupCounterTooltip";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";

const AvatarGroupCounterTooltipContainer = ({
  children,
  avatars,
  max,
  type,
  className,
  counterTooltipProps,
  counterTooltipIsVirtualizedList,
  counterTooltipTheme
}) => {
  const counterTooltipComponent = useMemo(() => {
    return AvatarGroupCounterTooltip({
      children: avatars,
      max,
      type,
      className,
      isVirtualizedList: counterTooltipIsVirtualizedList
    });
  }, [avatars, className, max, counterTooltipIsVirtualizedList, type]);

  if (!counterTooltipComponent && !counterTooltipProps) {
    return <>{children}</>;
  }

  if (counterTooltipProps) {
    return (
      <Tooltip
        showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
        hideTrigger={[Dialog.hideShowTriggers.BLUR, Dialog.hideShowTriggers.MOUSE_LEAVE]}
        showOnDialogEnter
        hideDelay={200}
        theme={counterTooltipTheme}
        {...counterTooltipProps}
      >
        {children}
      </Tooltip>
    );
  }

  return (
    <Tooltip
      content={counterTooltipComponent}
      showOnDialogEnter
      hideDelay={200}
      theme={counterTooltipTheme}
      showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
      hideTrigger={[Dialog.hideShowTriggers.BLUR, Dialog.hideShowTriggers.MOUSE_LEAVE]}
    >
      {children}
    </Tooltip>
  );
};

AvatarGroupCounterTooltipContainer.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  max: PropTypes.number,
  /**
   * Counter element
   */
  children: PropTypes.element,
  /**
   * Array of Avatar elements
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  counterTooltipProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  counterTooltipTheme: PropTypes.oneOf(Object.values(Tooltip.themes))
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  max: undefined,
  children: [],
  avatars: [],
  counterTooltipProps: undefined,
  counterTooltipIsVirtualizedList: false,
  counterTooltipTheme: undefined
};

export default AvatarGroupCounterTooltipContainer;
