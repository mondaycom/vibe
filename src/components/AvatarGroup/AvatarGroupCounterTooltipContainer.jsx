import React, { useMemo } from "react";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";

const AvatarGroupCounterTooltipContainer = ({
  children,
  avatars,
  max,
  type,
  className,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList,
  counterTooltipTheme
}) => {
  const counterTooltipContentComponent = useMemo(() => {
    return AvatarGroupCounterTooltipContent({
      children: avatars,
      max,
      type,
      className,
      isVirtualizedList: counterTooltipIsVirtualizedList
    });
  }, [avatars, className, max, counterTooltipIsVirtualizedList, type]);

  if (!counterTooltipContentComponent && !counterTooltipCustomProps) {
    return children;
  }

  if (counterTooltipCustomProps) {
    return (
      <Tooltip
        showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
        hideTrigger={[Dialog.hideShowTriggers.TAB_KEY, Dialog.hideShowTriggers.MOUSE_LEAVE]}
        showOnDialogEnter
        hideDelay={200}
        theme={counterTooltipTheme}
        {...counterTooltipCustomProps}
      >
        {children}
      </Tooltip>
    );
  }

  return (
    <Tooltip
      content={counterTooltipContentComponent}
      showOnDialogEnter
      hideDelay={200}
      theme={counterTooltipTheme}
      showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
      hideTrigger={[Dialog.hideShowTriggers.TAB_KEY, Dialog.hideShowTriggers.MOUSE_LEAVE]}
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
  counterTooltipCustomProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterTooltipIsVirtualizedList: PropTypes.bool,
  counterTooltipTheme: PropTypes.oneOf(Object.values(Tooltip.themes))
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  max: undefined,
  children: [],
  avatars: [],
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false,
  counterTooltipTheme: undefined
};

export default AvatarGroupCounterTooltipContainer;
