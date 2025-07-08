import React, { useMemo } from "react";
import Flex from "../../../Flex/Flex";
import AttentionBoxButton from "../../components/AttentionBoxButton/AttentionBoxButton";
import AttentionBoxLink from "../../components/AttentionBoxLink/AttentionBoxLink";
import AttentionBoxCloseButton from "../../components/AttentionBoxCloseButton/AttentionBoxCloseButton";
import AttentionBoxLeadingIcon from "../../components/AttentionBoxLeadingIcon/AttentionBoxLeadingIcon";
import AttentionBoxContent from "../../components/AttentionBoxContent/AttentionBoxContent";
import styles from "./AttentionBoxCompact.module.scss";
import { AttentionBoxLayoutSharedProps, AttentionBoxProps } from "../../AttentionBox.types";

export type AttentionBoxCompactProps = AttentionBoxLayoutSharedProps & Pick<AttentionBoxProps, "multiline">;

const AttentionBoxCompact = ({
  multiline = false,
  icon,
  iconType,
  onClose,
  closeButtonAriaLabel = "Close",
  action,
  link,
  content,
  isLinkInline
}: AttentionBoxCompactProps) => {
  const contentElement = useMemo(
    () => (
      <AttentionBoxContent
        content={content}
        link={isLinkInline ? link : undefined}
        isLinkInline={isLinkInline}
        multiline={multiline}
        compact
      />
    ),
    [content, isLinkInline, link, multiline]
  );

  return (
    <Flex gap="large" className={styles.container}>
      <Flex gap="xs" flex="1" className={styles.mainContentGroup}>
        <AttentionBoxLeadingIcon icon={icon} iconType={iconType} compact multiline={multiline} />
        {multiline ? <div>{contentElement}</div> : contentElement}
      </Flex>
      {action && <AttentionBoxButton {...action} />}
      {link && !isLinkInline && <AttentionBoxLink {...link} inlineText={false} />}
      <AttentionBoxCloseButton onClose={onClose} closeButtonAriaLabel={closeButtonAriaLabel} />
    </Flex>
  );
};

export default AttentionBoxCompact;
