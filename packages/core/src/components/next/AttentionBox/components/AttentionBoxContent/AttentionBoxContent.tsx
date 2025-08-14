import React from "react";
import cx from "classnames";
import { Text } from "../../../../Text";
import styles from "./AttentionBoxContent.module.scss";

export interface AttentionBoxContentProps {
  content: React.ReactNode;
  multiline?: boolean;
}

const AttentionBoxContent = ({ content, multiline = false, className }: AttentionBoxContentProps) => {
  if (!content) {
    return null;
  }

  return (
      <Text
        type="text2"
        className={cx(styles.text, { [styles.multilineText]: multiline })}
        ellipsis={!multiline}
        element="p"
      >
        {content}
      </Text>
  );
};

export default AttentionBoxContent;
