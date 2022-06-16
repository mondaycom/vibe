import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Tooltip from "../Tooltip/Tooltip";
import Avatar from "../Avatar/Avatar";
import AvatarGroupCounterTooltipContainer from "./AvatarGroupCounterTooltipContainer";
import Counter from "../Counter/Counter";
import styles from "./AvatarGroupCounter.module.scss";

const AvatarGroupCounter = ({ counterTooltipAvatars, counterProps, counterTooltipCustomProps, size, type }) => {
  const {
    color: counterColor = Counter.colors.LIGHT,
    count: counterValue = counterTooltipAvatars.length,
    prefix: counterPrefix = "+",
    maxDigits: counterMaxDigits = 3
  } = counterProps || {};

  const counterSizeStyle = styles[size?.toString()];
  const counterColorStyle = styles[counterColor];

  if (!counterTooltipAvatars.length && !counterValue) {
    return null;
  }

  return (
    <AvatarGroupCounterTooltipContainer
      avatars={counterTooltipAvatars}
      counterTooltipCustomProps={counterTooltipCustomProps}
      type={type}
    >
      {/* eslint-disable jsx-a11y/no-noninteractive-tabindex */}
      <div tabIndex={0} className={cx(styles.counterContainer, counterSizeStyle, counterColorStyle)}>
        {/* eslint-enable jsx-a11y/no-noninteractive-tabindex */}
        <Counter
          color={counterColor}
          count={counterValue}
          prefix={counterPrefix}
          maxDigits={counterMaxDigits}
          ariaLabel="Tab for more items"
        />
      </div>
    </AvatarGroupCounterTooltipContainer>
  );
};

AvatarGroupCounter.propTypes = {
  /**
   * Array of Avatar elements
   */
  counterTooltipAvatars: PropTypes.arrayOf(PropTypes.element),
  /**
   * Counter.propTypes: props for counter
   */
  counterProps: PropTypes.shape(Counter.propTypes),
  counterTooltipCustomProps: PropTypes.shape(Tooltip.propTypes),
  size: PropTypes.oneOf(Object.values(Avatar.sizes)),
  type: PropTypes.oneOf(Object.values(Avatar.types))
};
AvatarGroupCounter.defaultProps = {
  counterTooltipAvatars: [],
  counterProps: undefined,
  counterTooltipCustomProps: undefined,
  size: Avatar.sizes.MEDIUM,
  type: undefined
};

export default AvatarGroupCounter;
