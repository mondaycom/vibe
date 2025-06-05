import React from "react";
import styles from "./ResourceButton.module.scss";

export default function ResourceButton({ text, icon, href }: { text: string; icon: React.ReactNode; href: string }) {
  return (
    <a className={styles.resourceButton} href={href} target="_blank" rel="noopener noreferrer">
      {icon}
      <span className={styles.text}>{text}</span>
    </a>
  );
}
