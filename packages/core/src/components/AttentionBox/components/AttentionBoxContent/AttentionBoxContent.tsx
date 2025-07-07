import React from "react";
import cx from "classnames";
import { Text } from "../../../Text";
import AttentionBoxLink, { AttentionBoxLinkProps } from "../AttentionBoxLink/AttentionBoxLink";
import styles from "./AttentionBoxContent.module.scss";

export interface AttentionBoxContentProps {
  content: React.ReactNode;
  link?: AttentionBoxLinkProps;
  isLinkInline?: boolean;
  multiline?: boolean;
  compact?: boolean;
}

const AttentionBoxContent = ({
  content,
  link,
  isLinkInline = false,
  multiline = false,
  compact
}: AttentionBoxContentProps) => {
  if (!content) {
    return null;
  }

  if (link && isLinkInline) {
    return (
      <>
        <Text
          type="text2"
          color="inherit"
          className={cx({ [styles.multilineText]: multiline })}
          ellipsis={!multiline}
          element="span"
        >
          {content}
        </Text>
        <span className={cx({ [styles.spacing]: !compact || multiline })}>
          <AttentionBoxLink {...link} inlineText />
        </span>
      </>
    );
  }

  return (
    <Text type="text2" color="inherit" className={cx({ [styles.multilineText]: multiline })}>
      {content}
    </Text>
  );
};

export default AttentionBoxContent;
