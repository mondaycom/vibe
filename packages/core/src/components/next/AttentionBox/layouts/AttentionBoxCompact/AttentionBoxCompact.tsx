import React, { useMemo } from "react";
import Flex from "../../../../Flex/Flex";
import AttentionBoxButton from "../../components/AttentionBoxButton/AttentionBoxButton";
import AttentionBoxLink from "../../components/AttentionBoxLink/AttentionBoxLink";
import AttentionBoxCloseButton from "../../components/AttentionBoxCloseButton/AttentionBoxCloseButton";
import AttentionBoxLeadingIcon from "../../components/AttentionBoxLeadingIcon/AttentionBoxLeadingIcon";
import AttentionBoxContent from "../../components/AttentionBoxContent/AttentionBoxContent";
import styles from "./AttentionBoxCompact.module.scss";
import type { AttentionBoxLayoutSharedProps } from "../../AttentionBox.types";

export type AttentionBoxCompactProps = AttentionBoxLayoutSharedProps & Pick<AttentionBoxProps, "multiline">;

const AttentionBoxCompact = ({
  multiline = false,
  icon,
  iconType,
  onClose,
  closeButtonAriaLabel = "Close",
  action,
  link,
  content
}: AttentionBoxCompactProps) => {
  const hasIcon = !!icon;
  const hasActions = !!(action || link);

  return (
    <Flex align={multiline ? "start" : "center"} gap="large" className={styles.container}>
      <Flex gap="xs" flex="1" className={styles.mainContentGroup}>
        <AttentionBoxLeadingIcon icon={icon} iconType={iconType} className={styles.leadingIcon} />
        {multiline ? <div>{contentElement}</div> : contentElement}
      </Flex>
      {action && <AttentionBoxButton {...action} />}
        </>
      )}
      <AttentionBoxCloseButton onClose={onClose} closeButtonAriaLabel={closeButtonAriaLabel} />
    </Flex>
  );
};

export default AttentionBoxCompact;
