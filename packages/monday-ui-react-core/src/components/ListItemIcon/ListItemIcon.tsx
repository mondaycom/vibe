import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import Icon from "../Icon/Icon";
import { LIST_ITEM_ICON_SIZE, ListItemIconMargin } from "./ListItemIconConstants";
import { ListItemComponentType } from "../ListItem/ListItemConstants";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./ListItemIcon.module.scss";

export interface ListItemIconProps extends VibeComponentProps {
  /**
   * the ListItem component [li, div, a]
   */
  component?: ListItemComponentType;
  icon?: SubIcon;
  /**
   * the position of the icon inside the list item (this sets the margins of the icon)
   */
  margin?: ListItemIconMargin;
}

const ListItemIcon: VibeComponent<ListItemIconProps> & {
  margin?: typeof ListItemIconMargin;
  components?: typeof ListItemComponentType;
} = forwardRef(
  (
    { className, id, icon, margin = ListItemIcon.margin.START, component: Component = ListItemIcon.components.DIV },
    ref
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
        <Icon icon={icon} clickable={false} ignoreFocusStyle iconSize={LIST_ITEM_ICON_SIZE} />
      </Component>
    );
  }
);

export default withStaticProps(ListItemIcon, {
  margin: ListItemIconMargin,
  components: ListItemComponentType
});
