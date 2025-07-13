import React from "react";
import { IconButton } from "../../../../IconButton";
import { CloseSmall } from "@vibe/icons";
import styles from "./AttentionBoxCloseButton.module.scss";

export interface AttentionBoxCloseButtonProps {
  onClose?: (event: React.MouseEvent) => void;
  closeButtonAriaLabel?: string;
}

const AttentionBoxCloseButton = ({ onClose, closeButtonAriaLabel = "Close" }: AttentionBoxCloseButtonProps) => {
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
      className={styles.closeButton}
    />
  );
};

export default AttentionBoxCloseButton;
