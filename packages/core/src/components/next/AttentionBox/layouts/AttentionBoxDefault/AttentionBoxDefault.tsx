import React from "react";
import { Text } from "../../../../Text";
import { Flex } from "../../../../Flex";
import AttentionBoxButton from "../../components/AttentionBoxButton/AttentionBoxButton";
import AttentionBoxLink from "../../components/AttentionBoxLink/AttentionBoxLink";
import AttentionBoxCloseButton from "../../components/AttentionBoxCloseButton/AttentionBoxCloseButton";
import AttentionBoxLeadingIcon from "../../components/AttentionBoxLeadingIcon/AttentionBoxLeadingIcon";
import AttentionBoxContent from "../../components/AttentionBoxContent/AttentionBoxContent";
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
  return (
    <Flex align="start" direction="column" gap="xs" className={styles.content}>
      <Flex className={styles.titleSection}>
        <Flex gap="xs" flex="1" className={styles.titleLeft}>
          <AttentionBoxLeadingIcon icon={icon} iconType={iconType} />
          {title && (
            <Text type="text1" weight="medium">
              {title}
            </Text>
          )}
        </Flex>
        <AttentionBoxCloseButton onClose={onClose} closeButtonAriaLabel={closeButtonAriaLabel} />
      </Flex>

      {content && (
        <div className={styles.textContainer}>
          <AttentionBoxContent multiline content={content} link={link} isLinkInline={isLinkInline} />
        </div>
      )}

      {action ? (
        <Flex justify="end" className={styles.actionSection}>
          <AttentionBoxButton {...action} />
        </Flex>
      ) : (
        link && !isLinkInline && <AttentionBoxLink {...link} inlineText={false} />
      )}
    </Flex>
  );
};

export default AttentionBoxDefault;
