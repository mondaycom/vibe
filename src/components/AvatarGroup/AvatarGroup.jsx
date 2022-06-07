import React, { useMemo } from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import Avatar from "../Avatar/Avatar";
import Counter from "../Counter/Counter";
import Tooltip from "components/Tooltip/Tooltip";
import Flex from "components/Flex/Flex";
import Clickable from "components/Clickable/Clickable";
import styles from "./AvatarGroup.module.scss";

const AvatarGroup = ({
  className,
  id,
  children,
  size,
  type,
  max,
  count,
  counterTooltipProps,
  counterMaxDigits,
  counterPrefix
}) => {
  const counterTooltipComponent = useMemo(() => {
    if (!children || !children.length) {
      return null;
    }

    const avatarRenderer = (avatar, index) => {
      if (index < max) {
        return;
      }

      const ClickableContainer = ({ children }) => {
        if (!avatar.props.onClick) {
          return <>{children}</>;
        }

        return <Clickable onClick={avatar.props.onClick}>{children}</Clickable>;
      };

      return (
        <ClickableContainer key={`tooltip-item-${index}`}>
          <div className={styles.tooltipAvatarItemClickableContainer}>
            <Flex direction={Flex.directions.ROW} gap={Flex.gaps.XS} className={styles.tooltipAvatarFlexItemContainer}>
              <Avatar
                {...avatar.props}
                tooltipProps={undefined}
                size={Avatar.sizes.SMALL}
                type={type || avatar.props.type}
                ariaLabel={
                  typeof avatar.props?.tooltipProps?.content === "string"
                    ? avatar.props.tooltipProps.content
                    : undefined
                }
              />
              <div>{avatar.props?.tooltipProps?.content}</div>
            </Flex>
          </div>
        </ClickableContainer>
      );
    };

    const renderedAvatars = children.map(avatarRenderer).filter(a => !!a);

    if (!renderedAvatars.length) {
      return null;
    }

    return (
      <Flex
        className={cx(styles.scrollableContainer, styles.optionsContainer, styles.tooltipContainer, className)}
        role="treegrid"
        direction={Flex.directions.COLUMN}
      >
        {renderedAvatars}
      </Flex>

      // TODO VirtualizedList?
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
    if (!counterTooltipComponent && !counterTooltipProps) {
      return <>{children}</>;
    }

    if (counterTooltipProps) {
      return <Tooltip {...counterTooltipProps}>{children}</Tooltip>;
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
              withoutBorder
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
            prefix={counterPrefix}
            maxDigits={counterMaxDigits}
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
  // counterTooltipProps: PropTypes.shape(Tooltip.propTypes),
  counterTooltipProps: PropTypes.shape({ ...Tooltip.propTypes }),
  counterMaxDigits: PropTypes.number,
  counterPrefix: PropTypes.string
};
AvatarGroup.defaultProps = {
  className: "",
  id: undefined,
  children: undefined,
  size: undefined,
  type: undefined,
  max: 5,
  count: undefined,
  counterTooltipProps: undefined,
  counterMaxDigits: 3,
  counterPrefix: "+"
};

export default AvatarGroup;
