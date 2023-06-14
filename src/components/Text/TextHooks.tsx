import { TextSize, TextWeight } from "./TextConstants";
import styles from "./Text.module.scss";
import Tooltip from "../Tooltip/Tooltip";
import { Fragment } from "react";
import { DialogPosition } from "../../constants";
import { ElementContent } from "../../types";

export function useGlobalTextClass(size: TextSize, weight: TextWeight) {
  return `vibe-text${size == TextSize.MEDIUM ? 1 : 2}-${weight}`;
}

export function useEllipsisClass(ref: (node: HTMLElement) => void, ellipsis: boolean, maxLines: number) {
  let ellipsisClass;
  const overrideRef = (node: HTMLElement) => {
    node?.style.setProperty("--text-clamp-lines", maxLines.toString());
    ref(node);
  };

  // If component contains ellipsis return the fit ellipsis class
  if (ellipsis) {
    ellipsisClass = maxLines > 1 ? styles.multiLineEllipsis : styles.singleLineEllipsis;
  }

  return { ref: overrideRef, class: ellipsisClass };
}

export function useTooltipProps(
  withoutTooltip: boolean,
  ellipsis: boolean,
  tooltipPosition: DialogPosition,
  children: ElementContent
) {
  const isTooltipRendered = !withoutTooltip && ellipsis && typeof children === "string";
  return isTooltipRendered ? { position: tooltipPosition, content: children } : {};
}
