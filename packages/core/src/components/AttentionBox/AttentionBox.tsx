import cx from "classnames";
import React, { useMemo } from "react";
import { camelCase } from "lodash-es";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import { ComponentDefaultTestId, getTestId } from "../../tests/test-ids-utils";
import Icon from "../Icon/Icon";
import IconButton from "../IconButton/IconButton";
import { CloseSmall, Alert as AlertIcon, Info as InfoIcon } from "@vibe/icons";
import { IconType as IconTypeEnum } from "../Icon/IconConstants";
import { AttentionBoxType as AttentionBoxTypeEnum } from "./AttentionBoxConstants";
import { AttentionBoxType } from "./AttentionBox.types";
import { SubIcon, VibeComponentProps, withStaticProps, ElementContent } from "../../types";
import Text from "../Text/Text";
import Flex from "../Flex/Flex";
import styles from "./AttentionBox.module.scss";

export interface AttentionBoxProps extends VibeComponentProps {
  // TODO: [breaking] remove prop
  /**
   * If true, displays an icon even when no header is provided.
   */
  withIconWithoutHeader?: boolean;
  /**
   * The type of the AttentionBox.
   */
  type?: AttentionBoxType;
  /**
   * The icon displayed next to the title or text.
   */
  icon?: SubIcon;
  /**
   * The type of the icon.
   */
  iconType?: "svg" | "font";
  /**
   * The title of the component.
   */
  title?: string;
  /**
   * The text content displayed inside.
   */
  text?: string;
  /**
   * The content of the component.
   */
  children?: ElementContent;
  // TODO: [breaking] remove prop
  /**
   * If true, the icon is not displayed.
   */
  withoutIcon?: boolean;
  /**
   * Callback fired when the close button is clicked.
   */
  onClose?: (event: React.MouseEvent) => void;
  /**
   * If true, renders in compact mode.
   */
  compact?: boolean;
  /**
   * The label of the close button.
   */
  closeButtonAriaLabel?: string;
  /**
   * If true, an entry animation is applied when the component appears.
   */
  entryAnimation?: boolean;
}

const AttentionBox: React.FC<AttentionBoxProps> & {
  types?: typeof AttentionBoxTypeEnum;
  iconTypes?: typeof IconTypeEnum;
} = ({
  className,
  withIconWithoutHeader = false,
  type = "primary",
  icon,
  iconType = "svg",
  title,
  text,
  children,
  withoutIcon = false,
  onClose,
  compact = false,
  id,
  "data-testid": dataTestId,
  closeButtonAriaLabel = "Close",
  entryAnimation = false
}: AttentionBoxProps) => {
  const defaultIcon = useMemo(() => {
    return type === "primary" ? InfoIcon : AlertIcon;
  }, [type]);

  const overrideIcon = icon === undefined ? defaultIcon : icon;

  return (
    <aside
      className={cx(styles.attentionBox, getStyle(styles, camelCase(`type-${type}`)), className, {
        [styles.entryAnimation]: entryAnimation
      })}
      role="alert"
      data-testid={dataTestId || getTestId(ComponentDefaultTestId.ATTENTION_BOX, id)}
    >
      {title && (
        <Flex justify="start" align="center" className={styles.titleContainer} gap="xs">
          {!withoutIcon && (
            <Icon
              className={styles.icon}
              iconType={iconType}
              ariaHidden
              icon={overrideIcon}
              ignoreFocusStyle
              iconSize="20"
            />
          )}
          <Text type="text1" element="h5" weight="medium" className={styles.title}>
            {title}
          </Text>
        </Flex>
      )}
      <Flex justify="start" align="center" gap="xs">
        {!title && compact && !withoutIcon && withIconWithoutHeader && (
          <Icon iconType={iconType} iconSize={18} ariaHidden icon={overrideIcon} ignoreFocusStyle />
        )}
        <Text
          type="text2"
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
          size="small"
          color="on-primary-color"
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
  types: AttentionBoxTypeEnum,
  iconTypes: IconTypeEnum
});
