import React, { CSSProperties, ReactElement, useCallback, useMemo } from "react";
import cx from "classnames";
import ListItem, { ListItemProps } from "../../../components/ListItem/ListItem";
import ListTitle, { ListTitleProps } from "../../ListTitle/ListTitle";
import VirtualizedList from "../../../components/VirtualizedList/VirtualizedList";
import VibeComponentProps from "../../../types/VibeComponentProps";
import { ListItemIconProps } from "../../ListItemIcon/ListItemIcon";
import styles from "./VirtualizedListItems.module.scss";

const ITEM_CHILDREN_TYPES = {
  TITLE: "title",
  ITEM: "item"
};

const LIST_TITLE_HEIGHT = 48;
const LIST_ITEM_HEIGHT = 32;

export interface VirtualizedListItemsProps extends VibeComponentProps {
  children?: React.ReactElement<ListItemProps | ListTitleProps> | React.ReactElement<ListItemProps | ListTitleProps>[];
}

export const VirtualizedListItems: React.FC<VirtualizedListItemsProps> = ({ children }) => {
  const items = useMemo(() => {
    const childrenArr = Array.isArray(children) ? children : [children];
    return childrenArr
      .map((child, index) => {
        // @ts-ignore displayName is coming from Component assigned field: ListTitle, ListItem
        const childTypeDisplayName = child.type.displayName;
        if (childTypeDisplayName === ListTitle.displayName) {
          return {
            type: ITEM_CHILDREN_TYPES.TITLE,
            id: `list-title-${index}`,
            props: child.props,
            // avoid add spacing to the first category on the list
            height: LIST_TITLE_HEIGHT
          };
        } else if (childTypeDisplayName === ListItem.displayName) {
          const { id } = child.props;
          return {
            type: ITEM_CHILDREN_TYPES.ITEM,
            id: id || `list-item-${index}`,
            props: child.props,
            height: LIST_ITEM_HEIGHT
          };
        } else {
          return undefined;
        }
      })
      .filter(item => item !== undefined);
  }, [children]);

  const itemRenderer = useCallback(
    (item: ReactElement<ListItemProps | ListItemIconProps | ListTitleProps>, index: number, style: CSSProperties) => {
      const { type, props } = item;
      let element;
      switch (type) {
        case ITEM_CHILDREN_TYPES.TITLE: {
          element = <ListTitle {...(props as ListTitleProps)} />;
          break;
        }
        case ITEM_CHILDREN_TYPES.ITEM: {
          element = <ListItem {...(props as ListItemProps)} />;
          break;
        }
      }

      return <div style={style}>{element}</div>;
    },
    []
  );

  return (
    // @ts-ignore TODO TS-migration fix when VirtualizedList is converted to TS
    <VirtualizedList scrollableClassName={cx(styles.scrollableContainer)} items={items} itemRenderer={itemRenderer} />
  );
};
