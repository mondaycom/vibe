import React from "react";
import Icon from "../../Icon/Icon";
import MoveArrowLeft from "../../Icon/Icons/components/MoveArrowLeft";
import MoveArrowRight from "../../Icon/Icons/components/MoveArrowRight";
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
      <Icon iconType={Icon?.type?.SVG} icon={ICONS[kind]} iconSize={24} clickable={false} />
    </button>
  );
};

export default DateNavigationItem;
