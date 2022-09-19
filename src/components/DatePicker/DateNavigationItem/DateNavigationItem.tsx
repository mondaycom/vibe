import React from "react";
import Icon from "../../Icon/Icon";
import { MoveArrowLeft, MoveArrowRight } from "../../Icon/Icons";
import "./DateNavigationItem.scss";

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
    <button type="button" className="ds-date-navigation-item-component" onClick={() => onClick && onClick()}>
      <Icon iconType={Icon?.type?.SVG} icon={ICONS[kind]} iconSize={24} clickable={false} ignoreFocusStyle />
    </button>
  );
};

export default DateNavigationItem;
