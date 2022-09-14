import React from 'react';
import Icon from "../../Icon/Icon";
import { MoveArrowLeft, MoveArrowRight } from "../../Icon/Icons";
import "./DateNavigationItem.scss";

const ICONS = {
  prev: MoveArrowLeft,
  next: MoveArrowRight
};

interface DateNavigationItemProps {
  kind: keyof typeof ICONS
  onClick?: () => void
}

const DateNavigationItem = ({ kind, onClick }: DateNavigationItemProps) => {
  return (
    <div className="ds-date-navigation-item-component" onClick={() => onClick && onClick()}>
      <Icon
        iconType={Icon?.type?.SVG}
        // @ts-ignore
        icon={ICONS[kind]}
        iconSize={24}
        clickable={false}
        ignoreFocusStyle />
    </div>
  )
}

export default DateNavigationItem;