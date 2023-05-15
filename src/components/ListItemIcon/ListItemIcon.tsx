import { camelCase } from "lodash-es";
import cx from "classnames";
import React, { FC, forwardRef, useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import Icon from "../Icon/Icon";
import { LIST_ITEM_ICON_SIZE, ListItemIconMargin } from "./ListItemIconConstants";
import { SubIcon, VibeComponentProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./ListItemIcon.module.scss";

export interface ListItemIconProps extends VibeComponentProps {
  icon?: SubIcon;
  /**
   * the position of the icon inside the list item (this sets the margins of the icon)
   */
  margin?: ListItemIconMargin;
}

const ListItemIcon: FC<ListItemIconProps> & {
  margin?: typeof ListItemIconMargin;
} = forwardRef(({ className, id, icon, margin = ListItemIconMargin.START }, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });

  return (
    <div
      ref={mergedRef}
      className={cx(styles.listItemIcon, getStyle(styles, margin), className)}
      id={id}
      aria-hidden="true"
    >
      <Icon icon={icon} clickable={false} ignoreFocusStyle iconSize={LIST_ITEM_ICON_SIZE} />
    </div>
  );
});

Object.assign(ListItemIcon, {
  margin: ListItemIconMargin
});

export default ListItemIcon;
