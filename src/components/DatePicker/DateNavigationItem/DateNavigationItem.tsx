import React from "react";
import Icon from "../../Icon/Icon";
import { MoveArrowLeft, MoveArrowRight } from "../../Icon/Icons";
import styles from "./DateNavigationItem.module.scss";

const ICONS = {
  prev: MoveArrowLeft,
  next: MoveArrowRight
};

interface DateNavigationItemProps {
  kind: keyof typeof ICONS;
  onClick?: () => void;
}

const DateNavigationItem = ({ kind, onClick }: DateNavigationItemProps) => {
  return (
    <button type="button" className={styles.navigationItemContainer} onClick={() => onClick && onClick()}>
      <Icon
        iconType={Icon?.type?.SVG}
        // @ts-ignore
        icon={ICONS[kind]}
        iconSize={24}
        clickable={false}
        ignoreFocusStyle
      />
    </button>
  );
};

export default DateNavigationItem;
