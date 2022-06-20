import React, { useMemo } from "react";
import PropTypes from "prop-types";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import Avatar from "../Avatar/Avatar";
import styles from "./AvatarGroupCounterTooltipContentVirtualizedList.module.scss";

const AvatarGroupCounterTooltipContentVirtualizedList = ({
  avatarItems,
  avatarRenderer,
  type,
  tooltipContainerAriaLabel,
  tooltipContentContainerRef
}) => {
  const maxOptionsWithoutScroll = 10;
  const optionLineHeight = 34;
  const optionLineWidth = 150;
  const virtualizedItems = useMemo(
    () => avatarItems.map(item => ({ ...item, height: optionLineHeight })),
    [avatarItems]
  );

  let virtualizedListStyle;
  if (maxOptionsWithoutScroll) {
    // Adding 0.5 to show next option to indicate scroll is available
    const minCount = Math.min(avatarItems.length, maxOptionsWithoutScroll + 0.5);
    virtualizedListStyle = { height: optionLineHeight * minCount, minWidth: optionLineWidth };
  }

  return (
    <div
      className={styles.virtualizedTooltipContainer}
      aria-label={tooltipContainerAriaLabel}
      ref={tooltipContentContainerRef}
      tabIndex={-1}
    >
      <VirtualizedList
        items={virtualizedItems}
        itemRenderer={(item, index, style) => avatarRenderer(item, index, style, type, false)}
        role="treegrid"
        scrollableClassName={styles.scrollableContainer}
        getItemId={(item, index) => index}
        style={virtualizedListStyle}
      />
    </div>
  );
};

AvatarGroupCounterTooltipContentVirtualizedList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.element),
  avatarRenderer: PropTypes.func,
  tooltipContainerAriaLabel: PropTypes.string,
  tooltipContentContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG])
};
AvatarGroupCounterTooltipContentVirtualizedList.defaultProps = {
  avatars: [],
  avatarRenderer: undefined,
  tooltipContainerAriaLabel: undefined,
  tooltipContentContainerRef: undefined,
  type: undefined
};

export default AvatarGroupCounterTooltipContentVirtualizedList;
