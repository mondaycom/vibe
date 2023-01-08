import React, { forwardRef, useRef } from "react";
import cx from "classnames";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import { ListItemIconMargin } from "./ListItemIconConstants";
import { SubIcon, VibeComponentProps } from "../../types";
import "./ListItemIcon.scss";

export interface ListItemIconProps extends VibeComponentProps {
  icon?: SubIcon;
  /**
   * the position of the icon inside the list item (this sets the margins of the icon)
   */
  margin?: ListItemIconMargin;
}

const ListItemIcon: React.FC<ListItemIconProps> = forwardRef(
  ({ className, id, icon, margin = ListItemIconMargin.START }, ref) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

    return (
      <div
        ref={mergedRef}
        className={cx("list-item-icon", className, `list-item-icon--${margin}`)}
        id={id}
        aria-hidden="true"
      >
        <Icon icon={icon} clickable={false} ignoreFocusStyle iconSize={20} />
      </div>
    );
  }
);

Object.assign(ListItemIcon, {
  margin: ListItemIconMargin
});

export default ListItemIcon;
