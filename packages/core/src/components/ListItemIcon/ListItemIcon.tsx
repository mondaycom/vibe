import cx from "classnames";
import React, { forwardRef, useRef } from "react";
import useMergeRef from "../../hooks/useMergeRef";
import Icon from "../Icon/Icon";
import { ListItemIconMargin as ListItemIconMarginEnum } from "./ListItemIconConstants";
import { ListItemComponentType as ListItemComponentTypeEnum } from "../ListItem/ListItemConstants";
import { ListItemElement } from "../ListItem/ListItem.types";
import { SubIcon, VibeComponent, VibeComponentProps, withStaticProps } from "../../types";
import { getStyle } from "../../helpers/typesciptCssModulesHelper";
import styles from "./ListItemIcon.module.scss";
import { ListItemIconMargin } from "./ListItemIcon.types";

export const LIST_ITEM_ICON_SIZE = 18;

export interface ListItemIconProps extends VibeComponentProps {
  /**
   * the ListItem component [li, div, a]
   */
  component?: ListItemElement;
  icon?: SubIcon;
  /**
   * the position of the icon inside the list item (this sets the margins of the icon)
   */
  margin?: ListItemIconMargin;
}

const ListItemIcon: VibeComponent<ListItemIconProps> & {
  margin?: typeof ListItemIconMarginEnum;
  components?: typeof ListItemComponentTypeEnum;
} = forwardRef(({ className, id, icon, margin = "start", component: Component = "div" }: ListItemIconProps, ref) => {
  const componentRef = useRef(null);
  const mergedRef = useMergeRef(ref, componentRef);

  return (
    <Component
      ref={mergedRef}
      className={cx(styles.listItemIcon, getStyle(styles, margin), className)}
      id={id}
      aria-hidden="true"
    >
      <Icon icon={icon} ignoreFocusStyle iconSize={LIST_ITEM_ICON_SIZE} />
    </Component>
  );
});

export default withStaticProps(ListItemIcon, {
  margin: ListItemIconMarginEnum,
  components: ListItemComponentTypeEnum
});
