import React from "react";
import Tooltip from "../Tooltip/Tooltip";
import Dialog from "../Dialog/Dialog";
import AvatarGroupCounterTooltipContent from "./AvatarGroupCounterTooltipContent";
import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";

const AvatarGroupCounterTooltipContainer = ({
  children,
  avatars,
  type,
  className,
  counterTooltipCustomProps,
  counterTooltipIsVirtualizedList
}) => {
  const counterTooltipContentExists = !!avatars?.length;
  const counterTooltipContentComponent = (
    <AvatarGroupCounterTooltipContent
      avatars={avatars}
      type={type}
      className={className}
      isVirtualizedList={counterTooltipIsVirtualizedList}
    />
  );

  if (!counterTooltipContentExists && !counterTooltipCustomProps) {
    return children;
  }

  if (counterTooltipCustomProps) {
    return (
      <Tooltip
        showTrigger={[Dialog.hideShowTriggers.FOCUS, Dialog.hideShowTriggers.MOUSE_ENTER]}
        hideTrigger={[Dialog.hideShowTriggers.TAB_KEY, Dialog.hideShowTriggers.MOUSE_LEAVE]}
        showOnDialogEnter
        hideDelay={200}
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
  /**
   * Counter element
   */
  children: PropTypes.element,
  /**
   * Array of Avatar elements
   */
  avatars: PropTypes.arrayOf(PropTypes.element),
  counterTooltipCustomProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterTooltipIsVirtualizedList: PropTypes.bool
};
AvatarGroupCounterTooltipContainer.defaultProps = {
  className: undefined,
  type: undefined,
  children: [],
  avatars: [],
  counterTooltipCustomProps: undefined,
  counterTooltipIsVirtualizedList: false
};

export default AvatarGroupCounterTooltipContainer;
