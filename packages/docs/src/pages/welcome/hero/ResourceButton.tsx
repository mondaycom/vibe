import React from "react";
import styles from "./ResourceButton.module.scss";
import { Tooltip } from "@vibe/core";

export default function ResourceButton({
  text,
  icon,
  href,
  tooltipContent
}: {
  text: string;
  icon: React.ReactNode;
  href: string;
  tooltipContent: string;
}) {
  return (
    <Tooltip content={tooltipContent}>
      <a className={styles.resourceButton} href={href} target="_blank" rel="noopener noreferrer">
        {icon}
        <span className={styles.text}>{text}</span>
      </a>
    </Tooltip>
  );
}
