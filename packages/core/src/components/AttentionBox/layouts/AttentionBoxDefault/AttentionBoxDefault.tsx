import React from "react";
import { Text } from "../../../Text";
import Flex from "../../../Flex/Flex";
import AttentionBoxButton from "../../components/AttentionBoxButton/AttentionBoxButton";
import AttentionBoxLink from "../../components/AttentionBoxLink/AttentionBoxLink";
import AttentionBoxCloseButton from "../../components/AttentionBoxCloseButton/AttentionBoxCloseButton";
import AttentionBoxLeadingIcon from "../../components/AttentionBoxLeadingIcon/AttentionBoxLeadingIcon";
import AttentionBoxContent from "../../components/AttentionBoxContent/AttentionBoxContent";
import styles from "./AttentionBoxDefault.module.scss";
import { AttentionBoxLayoutSharedProps, AttentionBoxProps } from "../../AttentionBox.types";

export type AttentionBoxDefaultProps = AttentionBoxLayoutSharedProps & Pick<AttentionBoxProps, "title">;

const AttentionBoxDefault = ({
  title,
  icon,
  iconType,
  onClose,
  closeButtonAriaLabel = "Close",
  action,
  link,
  content,
  isLinkInline
}: AttentionBoxDefaultProps) => {
  const shouldRenderActionsSection = action || (link && !isLinkInline);
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

      {shouldRenderActionsSection && (
        <Flex justify={action ? "end" : "start"} className={styles.actionSection}>
          {action ? <AttentionBoxButton {...action} /> : <AttentionBoxLink {...link} inlineText={false} />}
        </Flex>
      )}
    </Flex>
  );
};

export default AttentionBoxDefault;
