import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import Tooltip from "components/Tooltip/Tooltip";
import Flex from "components/Flex/Flex";
import Clickable from "components/Clickable/Clickable";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({ className, id, children, size, type, max, count, counterCustomTooltipComponent }) => {
  const counterTooltipComponent = useMemo(() => {
    if (!children || !children.length) {
      return null;
    }

    const avatarRenderer = (avatar, index) => {
      if (index < max) {
        return null;
      }

      return (
        <Clickable className={styles.tooltipAvatarItemClickableContainer} key={`tooltip-item-${index}`}>
          <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} className={styles.tooltipAvatarFlexItemContainer}>
            <Avatar
              {...avatar.props}
              tooltipComponent={undefined}
              size={Avatar.sizes.SMALL}
              type={type || avatar.props.type}
            />
            <div>{avatar.props?.tooltipComponent?.props?.content}</div>
          </Flex>
        </Clickable>
      );
    };

    return (
      <Flex
        className={cx(styles.scrollableContainer, styles.optionsContainer, styles.tooltipContainer, className)}
        role="treegrid"
        direction={Flex.directions.COLUMN}
      >
        {children.map(avatarRenderer)}
      </Flex>

      // <VirtualizedList
      //   className={cx(styles.optionsContainer, className)}
      //   items={children}
      //   itemRenderer={avatarRenderer}
      //   role="treegrid"
      //   scrollableClassName={styles.scrollableContainer}
      // />
    );
  }, [children, className, max, type]);

  if (!children) {
    return null;
  }

  if (!children.length) {
    children = [children];
  }

  const CounterTooltipContainer = ({ children }) => {
    if (!counterTooltipComponent && !counterCustomTooltipComponent) {
      return <>{children}</>;
    }

    if (counterCustomTooltipComponent) {
      return <Tooltip {...counterCustomTooltipComponent.props}>{children}</Tooltip>;
    }

    return (
      // TODO disable hide on timer in Tooltip
      <Tooltip content={counterTooltipComponent} hideDelay={10000000}>
        {children}
      </Tooltip>
    );
  };

  return (
    <div className={cx(styles.container, className)} id={id}>
      {children.map((avatar, index) => {
        if (index < max) {
          return (
            <Avatar
              {...avatar.props}
              size={size || avatar.props.size}
              type={type || avatar.props.type}
              key={`${id}-${index}`}
              className={cx(styles.avatarContainer, avatar.props.className)}
            />
          );
        }
      })}
      {(children.length > max || count) && (
        // TODO pass size to the counter
        <CounterTooltipContainer>
          <Counter
            color={Counter.colors.LIGHT}
            count={count || children.length - max}
            prefix="+"
            size={Counter.sizes.LARGE}
          />
        </CounterTooltipContainer>
      )}
    </div>
  );
};

AvatarGroup.propTypes = {
  /**
   * class name to be add to the wrapper
   */
  className: PropTypes.string,
  /**
   * id to be add to the wrapper
   */
  id: PropTypes.string,
  // children: PropTypes.arrayOf(Avatar)
  children: PropTypes.arrayOf(PropTypes.any),
  size: PropTypes.any,
  // TODO "Uncaught TypeError: Cannot read properties of undefined (reading 'types')" why??
  //  size: PropTypes.oneOf([Avatar.sizes.LARGE, Avatar.sizes.MEDIUM, Avatar.sizes.SMALL])
  //  type: PropTypes.oneOf([Avatar.types.TEXT, Avatar.types.ICON, Avatar.types.IMG]),
  type: PropTypes.any,
  max: PropTypes.number,
  count: PropTypes.number,
  counterCustomTooltipComponent: PropTypes.any
};
AvatarGroup.defaultProps = {
  className: "",
  id: undefined,
  children: undefined,
  size: undefined,
  type: undefined,
  max: 5,
  count: undefined,
  counterCustomTooltipComponent: undefined
};

export default AvatarGroup;
