import cx from "classnames";
import React, { useMemo } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import AlertIcon from "../Icon/Icons/components/Alert";
import InfoIcon from "../Icon/Icons/components/Info";
import { IconType } from "../Icon/IconConstants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { AttentionBoxType } from "./AttentionBoxConstants";
import { SubIcon, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import styles from "./AttentionBox.module.scss";

export interface AttentionBoxProps extends VibeComponentProps {
  className?: string;
  /**
   * @deprecated - use className instead
   */
  componentClassName?: string;
  // Will remove when releasing version 2 as BREAKING CHANGES
  withIconWithoutHeader?: boolean;
  /** we support 5 types of attention boxes */
  type?: AttentionBoxType;
  /** Icon classname for icon font or SVG Icon Component for SVG Type */
  icon?: SubIcon;
  iconType?: IconType.SVG | IconType.ICON_FONT;
  title?: string;
  text?: string;
  children?: ElementContent;
  withoutIcon?: boolean;
  onClose?: (event: React.MouseEvent) => void;
  compact?: boolean;
  closeButtonAriaLabel?: string;
}

const AttentionBox: React.FC<AttentionBoxProps> & {
  types?: typeof AttentionBoxType;
  iconTypes?: typeof IconType;
} = ({
  className,
  // Backward compatibility for props naming
  componentClassName,
  // TODO Remove in next major as breaking change
  withIconWithoutHeader = false,
  type = AttentionBox.types.PRIMARY,
  icon,
  iconType = Icon.type.SVG,
  title,
  text,
  children,
  // TODO Remove in next major as breaking change
  withoutIcon = false,
  onClose,
  compact = false,
  id,
  "data-testid": dataTestId,
  closeButtonAriaLabel = "Close"
}) => {
  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);

  const defaultIcon = useMemo(() => {
    return type === AttentionBox.types.PRIMARY ? InfoIcon : AlertIcon;
  }, [type]);

  const overrideIcon = icon === undefined ? defaultIcon : icon;

  return (
    <aside
      className={cx(styles.attentionBox, getStyle(styles, camelCase(`type-${type}`)), overrideClassName)}
      role="alert"
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ATTENTION_BOX, id)}
    >
      {title && (
        <Flex
          justify={Flex.justify.START}
          align={Flex.align.CENTER}
          className={styles.titleContainer}
          gap={Flex.gaps.XS}
        >
          {!withoutIcon && (
            <Icon
              className={styles.icon}
              iconType={iconType}
              ariaHidden
              clickable={false}
              icon={overrideIcon}
              ignoreFocusStyle
              iconSize="20"
            />
          )}
          <Text type={Text.types.TEXT1} element="h5" weight={Text.weights.MEDIUM} className={styles.title}>
            {title}
          </Text>
        </Flex>
      )}
      <Flex justify={Flex.justify.START} align={Flex.align.CENTER} gap={Flex.gaps.XS}>
        {!title && compact && !withoutIcon && withIconWithoutHeader && (
          <Icon iconType={iconType} iconSize={18} ariaHidden clickable={false} icon={overrideIcon} ignoreFocusStyle />
        )}
        <Text
          type={Text.types.TEXT2}
          element={compact ? undefined : "p"}
          className={cx(styles.text, {
            [styles.compact]: compact,
            [styles.dismissible]: !!onClose,
            [styles.paragraph]: !compact
          })}
        >
          {text || children}
        </Text>
      </Flex>
      {onClose && (
        <IconButton
          size={IconButton?.sizes?.SMALL}
          color={IconButton.colors.ON_PRIMARY_COLOR}
          className={styles.closeIcon}
          wrapperClassName={cx(styles.closeIconWrapper, {
            [styles.closeIconCompact]: compact
          })}
          ariaLabel={closeButtonAriaLabel}
          hideTooltip
          icon={CloseSmall}
          onClick={onClose}
        />
      )}
    </aside>
  );
};

export default withStaticProps(AttentionBox, {
  types: AttentionBoxType,
  iconTypes: IconType
});
