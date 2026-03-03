import React from "react";
import cx from "classnames";
import { Text } from "@vibe/typography";
import { Flex } from "@vibe/layout";
import AttentionBoxButton from "../../components/AttentionBoxButton/AttentionBoxButton";
import AttentionBoxLink from "../../components/AttentionBoxLink/AttentionBoxLink";
import AttentionBoxCloseButton from "../../components/AttentionBoxCloseButton/AttentionBoxCloseButton";
import AttentionBoxLeadingIcon from "../../components/AttentionBoxLeadingIcon/AttentionBoxLeadingIcon";
import styles from "./AttentionBoxDefault.module.scss";
import type { AttentionBoxLayoutSharedProps, AttentionBoxProps } from "../../AttentionBox.types";

export type AttentionBoxDefaultProps = AttentionBoxLayoutSharedProps & Pick<AttentionBoxProps, "title">;

const AttentionBoxDefault = ({
  title,
  icon,
  iconType,
  onClose,
  closeButtonAriaLabel = "Close",
  action,
  link,
  content
}: AttentionBoxDefaultProps) => {
  const hasActions = action || link;

  return (
    <div
      className={cx(styles.container, {
        [styles.hasIcon]: !!icon,
        [styles.hasTitle]: !!title,
        [styles.hasActions]: hasActions,
        [styles.hasCloseButton]: !!onClose
      })}
    >
      {icon && <AttentionBoxLeadingIcon icon={icon} iconType={iconType} className={styles.icon} />}

      {title && (
        <Text type="text1" weight="medium" className={styles.title}>
          {title}
        </Text>
      )}

      {!!onClose && (
        <AttentionBoxCloseButton
          onClose={onClose}
          closeButtonAriaLabel={closeButtonAriaLabel}
          className={styles.closeButton}
        />
      )}

      <Text
        type="text2"
        className={styles.text}
        ellipsis={false}
        element={typeof content === "string" ? "p" : undefined}
      >
        {content}
      </Text>

      {hasActions && (
        <Flex gap="medium" className={styles.actions}>
          {link && <AttentionBoxLink {...link} inlineText={false} />}
          {action && <AttentionBoxButton {...action} />}
        </Flex>
      )}
    </div>
  );
};

export default AttentionBoxDefault;
