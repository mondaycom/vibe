import React from "react";
import Icon from "../../Icon/Icon";
import { MoveArrowLeft, MoveArrowRight } from "@vibe/icons";
import styles from "./DateNavigationItem.module.scss";

const ICONS = {
  prev: MoveArrowLeft,
  next: MoveArrowRight
};

export interface DateNavigationItemProps {
  kind: keyof typeof ICONS;
  onClick?: () => void;
}

const DateNavigationItem = ({ kind, onClick }: DateNavigationItemProps) => {
  return (
    <button type="button" className={styles.navigationItemContainer} onClick={() => onClick && onClick()}>
      <Icon iconType="svg" icon={ICONS[kind]} iconSize={24} />
    </button>
  );
};

export default DateNavigationItem;
