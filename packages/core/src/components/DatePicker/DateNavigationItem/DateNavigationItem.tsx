import React from "react";
import { Icon } from "@vibe/icon";
import { MoveArrowLeft, MoveArrowRight } from "@vibe/icons";
import styles from "./DateNavigationItem.module.scss";

const ICONS = {
  prev: MoveArrowLeft,
  next: MoveArrowRight
};

export interface DateNavigationItemProps {
  /**
   * The type of navigation button.
   */
  kind: keyof typeof ICONS;
  /**
   * Callback fired when the button is clicked.
   */
  onClick?: () => void;
}

const DateNavigationItem = ({ kind, onClick }: DateNavigationItemProps) => {
  return (
    <button type="button" className={styles.navigationItemContainer} onClick={() => onClick && onClick()}>
      <Icon type="svg" icon={ICONS[kind]} size={24} />
    </button>
  );
};

export default DateNavigationItem;
