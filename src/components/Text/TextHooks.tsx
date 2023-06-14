import { TextSize, TextWeight } from "./TextConstants";
import { MutableRefObject, useEffect } from "react";
import styles from "./Text.module.scss";

export function useGlobalTextClass(size: TextSize, weight: TextWeight) {
  return `vibe-text${size == TextSize.MEDIUM ? 1 : 2}-${weight}`;
}

export function useEllipsisClass(ref: MutableRefObject<HTMLElement>, ellipsis: boolean, maxLines: number) {
  // Set css variable on component mount for supporting multiple line ellipsis
  useEffect(() => {
    ref.current.style.setProperty("--text-clamp-lines", maxLines.toString());
  });

  // If component contains ellipsis return the fit ellipsis class
  if (!ellipsis) return;
  return maxLines > 1 ? styles.multiLineEllipsis : styles.singleLineEllipsis;
}
