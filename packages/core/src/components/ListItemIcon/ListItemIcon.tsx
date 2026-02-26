import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import { Icon, type SubIcon } from "@vibe/icon";
import { type ListItemElement } from "../ListItem";
import { type VibeComponentProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./ListItemIcon.module.scss";
import { type ListItemIconMargin } from "./ListItemIcon.types";

export const LIST_ITEM_ICON_SIZE = 18;

export interface ListItemIconProps extends VibeComponentProps {
  /**
   * The HTML element used for the list item icon.
   */
  component?: ListItemElement;
  /**
   * The icon displayed inside the list item.
   */
  icon?: SubIcon;
  /**
   * The position of the icon inside the list item, determining its margins.
   */
  margin?: ListItemIconMargin;
}

const ListItemIcon = forwardRef(
  (
    { className, id, icon, margin = "start", component: Component = "div" }: ListItemIconProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    const componentRef = useRef(null);
    const mergedRef = useMergeRef(ref, componentRef);

    return (
      <Component
        ref={mergedRef}
        className={cx(styles.listItemIcon, getStyle(styles, margin), className)}
        id={id}
        aria-hidden="true"
      >
        <Icon icon={icon} ignoreFocusStyle size={LIST_ITEM_ICON_SIZE} />
      </Component>
    );
  }
);

export default ListItemIcon;
