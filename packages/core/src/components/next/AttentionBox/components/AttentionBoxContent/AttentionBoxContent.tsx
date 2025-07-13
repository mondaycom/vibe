import React from "react";
import cx from "classnames";
import { Text } from "../../../../Text";
import AttentionBoxLink, { AttentionBoxLinkProps } from "../AttentionBoxLink/AttentionBoxLink";
import styles from "./AttentionBoxContent.module.scss";

export interface AttentionBoxContentProps {
  content: React.ReactNode;
  link?: AttentionBoxLinkProps;
  isLinkInline?: boolean;
  multiline?: boolean;
}

const AttentionBoxContent = ({ content, link, isLinkInline = false, multiline = false }: AttentionBoxContentProps) => {
  if (!content) {
    return null;
  }

  return (
    <>
      <Text
        type="text2"
        className={cx(styles.text, { [styles.multilineText]: multiline })}
        ellipsis={!multiline}
        element="p"
      >
        {content}
      </Text>
      {link && isLinkInline && (
        <>
          {" "}
          <AttentionBoxLink {...link} inlineText />
        </>
      )}
    </>
  );
};

export default AttentionBoxContent;
