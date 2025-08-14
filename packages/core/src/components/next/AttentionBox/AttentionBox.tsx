import React, { forwardRef } from "react";
import cx from "classnames";
import type { AttentionBoxProps, AttentionBoxRole } from "./AttentionBox.types";
import AttentionBoxDefault from "./layouts/AttentionBoxDefault/AttentionBoxDefault";
import AttentionBoxCompact from "./layouts/AttentionBoxCompact/AttentionBoxCompact";
import { resolveAttentionBoxIcon } from "./utils/iconUtils";
import { ComponentDefaultTestId } from "../../../tests/constants";
import { getTestId } from "../../../tests/test-ids-utils";
import styles from "./AttentionBox.module.scss";

const AttentionBox = forwardRef(
  (
    {
      compact = false,
      multiline = false,
      title,
      animate = true,
      icon,
      iconType = "svg",
      hideIcon = false,
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
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const role: AttentionBoxRole = type === "negative" ? "alert" : "status";
    const displayIcon = resolveAttentionBoxIcon(icon, hideIcon, type);
    const content = children || text;

    const baseClasses = cx(
      styles.attention,
      styles[type],
      {
        [styles.animate]: animate
      },
      className
    );

    const sharedProps = {
      onClose,
      closeButtonAriaLabel,
      action,
      link,
      // overridden props
      icon: displayIcon,
      iconType,
      // custom props
      content
    };

    return (
      <aside
        ref={ref}
        className={baseClasses}
        role={role}
        id={id}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.ATTENTION_BOX, id)}
      >
        {compact ? (
          <AttentionBoxCompact multiline={multiline} {...sharedProps} />
        ) : (
          <AttentionBoxDefault title={title} {...sharedProps} />
        )}
      </aside>
    );
  }
);

export default AttentionBox;
