import React from "react";
import cx from "classnames";
import { IconButton } from "../../../../IconButton";
import { CloseSmall } from "@vibe/icons";
import styles from "./AttentionBoxCloseButton.module.scss";

export interface AttentionBoxCloseButtonProps {
  onClose?: (event: React.MouseEvent) => void;
  closeButtonAriaLabel?: string;
  className?: string;
}

const AttentionBoxCloseButton = ({
  onClose,
  closeButtonAriaLabel = "Close",
  className
}: AttentionBoxCloseButtonProps) => {
  return (
    <IconButton
      icon={CloseSmall}
      size="xs"
      kind="tertiary"
      onClick={onClose}
      ariaLabel={closeButtonAriaLabel}
      hideTooltip
      className={cx(styles.closeButton, className)}
    />
  );
};

export default AttentionBoxCloseButton;
