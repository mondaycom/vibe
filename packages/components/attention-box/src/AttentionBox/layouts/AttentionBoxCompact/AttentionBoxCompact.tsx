import React from "react";
import { Flex } from "@vibe/layout";
import { Text } from "@vibe/typography";
import AttentionBoxButton from "../../components/AttentionBoxButton/AttentionBoxButton";
import AttentionBoxLink from "../../components/AttentionBoxLink/AttentionBoxLink";
import AttentionBoxCloseButton from "../../components/AttentionBoxCloseButton/AttentionBoxCloseButton";
import AttentionBoxLeadingIcon from "../../components/AttentionBoxLeadingIcon/AttentionBoxLeadingIcon";
import styles from "./AttentionBoxCompact.module.scss";
import type { AttentionBoxLayoutSharedProps } from "../../AttentionBox.types";

export type AttentionBoxCompactProps = AttentionBoxLayoutSharedProps;

const AttentionBoxCompact = ({
  icon,
  iconType,
  onClose,
  closeButtonAriaLabel = "Close",
  action,
  link,
  content
}: AttentionBoxCompactProps) => {
  const hasActions = !!(action || link);

  return (
    <Flex align="center" className={styles.container}>
      <Flex gap="xs" flex="1" className={styles.mainContentGroup}>
        {icon && <AttentionBoxLeadingIcon icon={icon} iconType={iconType} className={styles.leadingIcon} />}
        <Text type="text2" element={typeof content === "string" ? "p" : undefined} ellipsis>
          {content}
        </Text>
      </Flex>
      {(hasActions || !!onClose) && (
        <Flex className={styles.actionsGroup}>
          {link && <AttentionBoxLink {...link} inlineText={false} />}
          {action && <AttentionBoxButton {...action} />}
          {!!onClose && <AttentionBoxCloseButton onClose={onClose} closeButtonAriaLabel={closeButtonAriaLabel} />}
        </Flex>
      )}
    </Flex>
  );
};

export default AttentionBoxCompact;
