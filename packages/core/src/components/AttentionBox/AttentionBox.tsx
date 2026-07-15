import React, { forwardRef, memo } from "react";
import cx from "classnames";
import type { AttentionBoxProps, AttentionBoxRole } from "./AttentionBox.types";
import AttentionBoxDefault from "./layouts/AttentionBoxDefault/AttentionBoxDefault";
import AttentionBoxCompact from "./layouts/AttentionBoxCompact/AttentionBoxCompact";
import { resolveAttentionBoxIcon } from "./utils/iconUtils";
import { ComponentDefaultTestId, ComponentVibeId } from "../../tests/constants";
import { getTestId } from "../../tests/test-ids-utils";
import styles from "./AttentionBox.module.scss";

// TODO(perf): callers may pass inline `action`/`link` objects which defeat memoization.
// Memoization helps when parents pass stable props; fixing call sites is out of scope.
const AttentionBoxComponent = forwardRef(
  (
    {
      compact = false,
      title,
      animate = true,
      icon,
      iconType = "svg",
      type = "primary",
      children,
      text,
      action,
      link,
      id,
      onClose,
      closeButtonAriaLabel,
      className,
      "data-testid": dataTestId
    }: AttentionBoxProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    const role: AttentionBoxRole = type === "negative" ? "alert" : "status";
    const displayIcon = resolveAttentionBoxIcon(icon, type);
    const content = children || text;

    const baseClasses = cx(
      styles.attention,
      styles[type],
      {
        [styles.animate]: animate
      },
      className
    );

    const layoutSharedProps = {
      onClose,
      closeButtonAriaLabel,
      action,
      link,
      icon: displayIcon,
      iconType,
      content
    };

    return (
      <div
        ref={ref}
        className={baseClasses}
        role={role}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.ATTENTION_BOX, id)}
        data-vibe={ComponentVibeId.ATTENTION_BOX}
      >
        {compact ? (
          <AttentionBoxCompact {...layoutSharedProps} />
        ) : (
          <AttentionBoxDefault title={title} {...layoutSharedProps} />
        )}
      </div>
    );
  }
);

AttentionBoxComponent.displayName = "AttentionBox";

const AttentionBox = memo(AttentionBoxComponent);
AttentionBox.displayName = "AttentionBox";

export default AttentionBox;
