import React from "react";
import PropTypes from "prop-types";
import VirtualizedList from "../VirtualizedList/VirtualizedList";
import styles from "./AvatarGroupCounterTooltipContentVirtualizedList.module.scss";

const AvatarGroupCounterTooltipContentVirtualizedList = ({
  avatarItems,
  avatarRenderer,
  tooltipContainerAriaLabel,
  tooltipContentContainerRef
}) => {
  const maxOptionsWithoutScroll = 10;
  const optionLineHeight = 34;
  // TODO temp solution
  const optionLineWidth = avatarItems.some(item => item.value.tooltipContent) ? 175 : 40;
  const virtualizedItems = avatarItems.map(item => ({ ...item, height: optionLineHeight }));

  let virtualizedListStyle;
  if (maxOptionsWithoutScroll) {
    // Adding 0.5 to show next option to indicate scroll is available
    const minCount = Math.min(avatarItems.length, maxOptionsWithoutScroll + 0.5);
    virtualizedListStyle = { height: optionLineHeight * minCount, minWidth: optionLineWidth };
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <div
      className={styles.virtualizedTooltipContainer}
      aria-label={tooltipContainerAriaLabel}
      ref={tooltipContentContainerRef}
      tabIndex={-1}
    >
      <div className={styles.virtualizedListContainer}>
        <VirtualizedList
          items={virtualizedItems}
          itemRenderer={(item, index, style) => avatarRenderer(item, index, { ...style, width: "100%" })}
          role="treegrid"
          scrollableClassName={styles.scrollableContainer}
          getItemId={(item, index) => index}
          style={virtualizedListStyle}
        />
      </div>
    </div>
  );
};

AvatarGroupCounterTooltipContentVirtualizedList.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.element),
  avatarRenderer: PropTypes.func,
  tooltipContainerAriaLabel: PropTypes.string,
  tooltipContentContainerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })])
};
AvatarGroupCounterTooltipContentVirtualizedList.defaultProps = {
  avatars: [],
  avatarRenderer: undefined,
  tooltipContainerAriaLabel: undefined,
  tooltipContentContainerRef: undefined
};

export default AvatarGroupCounterTooltipContentVirtualizedList;
