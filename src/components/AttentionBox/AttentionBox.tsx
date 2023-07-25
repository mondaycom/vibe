import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import cx from "classnames";
import React, { useMemo } from "react";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import CloseSmall from "../Icon/Icons/components/CloseSmall";
import AlertIcon from "../Icon/Icons/components/Alert";
import { IconType } from "../Icon/IconConstants";
import { backwardCompatibilityForProperties } from "../../helpers/backwardCompatibilityForProperties";
import { AttentionBoxType } from "./AttentionBoxConstants";
import { SubIcon, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import styles from "./AttentionBox.module.scss";

interface AttentionBoxProps extends VibeComponentProps {
  className?: string;
  // Backward compatibility for props naming
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
}

const AttentionBox: React.FC<AttentionBoxProps> & {
  types?: typeof AttentionBoxType;
  iconTypes?: typeof IconType;
} = ({
  className,
  // Backward compatibility for props naming
  componentClassName,
  // TODO Vibe 2.0 Remove when releasing version 2 as BREAKING CHANGES
  withIconWithoutHeader = false,
  type = AttentionBox.types.PRIMARY,
  icon = AlertIcon,
  iconType = Icon.type.SVG,
  title,
  text,
  children,
  withoutIcon = false,
  onClose,
  compact = false,
  id,
  "data-testid": dataTestId
}) => {
  const iconLabel = useMemo(() => {
    if (type === AttentionBoxType.DANGER) {
      return "alert";
    }

    if (type === AttentionBoxType.SUCCESS) {
      return "success";
    }

    return "attention";
  }, [type]);

  const overrideClassName = backwardCompatibilityForProperties([className, componentClassName]);
  const classNameWithType = camelCase(`type-${type}`);

  return (
    <aside
      className={cx(styles.attentionBox, getStyle(styles, classNameWithType), overrideClassName)}
      role="alert"
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ATTENTION_BOX, id)}
    >
      {title && (
        <Flex justify={Flex.justify.START} align={Flex.align.CENTER} className={styles.titleContainer}>
          {!withoutIcon && (
            <Icon
              iconType={iconType}
              ariaHidden
              clickable={false}
              icon={icon}
              className={cx(
                styles.titleContainerIcon,
                getStyle(styles, camelCase(classNameWithType + "__title-container__icon"))
              )}
              ignoreFocusStyle
              iconSize="24"
              iconLabel={iconLabel}
            />
          )}
          <Text element="h5" weight="bold" className={styles.title}>
            {title}
          </Text>
        </Flex>
      )}
      <Text
        element={compact ? "div" : "p"}
        size="small"
        paragraph={!compact}
        className={cx(styles.text, getStyle(styles, camelCase(classNameWithType + "__text")), {
          [styles.compact]: compact,
          [styles.dismissible]: !!onClose,
          [styles.paragraph]: !compact
        })}
      >
        {!title && compact && !withoutIcon && withIconWithoutHeader && (
          <Icon
            iconType={iconType}
            iconSize={18}
            ariaHidden
            clickable={false}
            icon={icon}
            className={cx(
              styles.titleContainerIcon,
              getStyle(styles, camelCase(classNameWithType + "__title-container__icon"))
            )}
            ignoreFocusStyle
            iconLabel={iconLabel}
          />
        )}
        {text || children}
      </Text>
      {onClose && (
        <IconButton
          size={IconButton?.sizes?.SMALL}
          color={IconButton.colors.ON_PRIMARY_COLOR}
          className={styles.closeIcon}
          wrapperClassName={cx(styles.closeIconWrapper, {
            [styles.closeIconCompact]: compact
          })}
          ariaLabel="Close"
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
