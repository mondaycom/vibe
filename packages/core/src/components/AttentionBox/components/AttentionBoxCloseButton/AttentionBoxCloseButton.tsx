import React from "react";
import cx from "classnames";
import { IconButton } from "../../../IconButton";
import { CloseSmall } from "@vibe/icons";
import styles from "./AttentionBoxCloseButton.module.scss";

export interface AttentionBoxCloseButtonProps {
  onClose?: (event: React.MouseEvent) => void;
  closeButtonAriaLabel?: string;
  compact?: boolean;
  multiline?: boolean;
}

const AttentionBoxCloseButton = ({
  onClose,
  closeButtonAriaLabel = "Close",
  compact = false,
  multiline = false
}: AttentionBoxCloseButtonProps) => {
  if (!onClose) {
    return null;
  }

  return (
    <IconButton
      icon={CloseSmall}
      size="xs"
      kind="tertiary"
      onClick={onClose}
      ariaLabel={closeButtonAriaLabel}
      hideTooltip
      className={cx(styles.closeButton, { [styles.compactMultiline]: compact && multiline })}
    />
  );
};

export default AttentionBoxCloseButton;
