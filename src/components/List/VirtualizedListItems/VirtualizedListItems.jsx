import { useCallback, useMemo } from "react";
import cx from "classnames";
import ListItem from "../../../components/ListItem/ListItem";
import ListTitle from "../../../components/ListTitle/ListTitle";
import VirtualizedList from "../../../components/VirtualizedList/VirtualizedList";
import styles from "./VirtualizedListItems.module.scss";

const ITEM_CHILDREN_TYPES = {
  TITLE: "title",
  ITEM: "item"
};

const LIST_TITLE_HEIGHT = 48;
const LIST_ITEM_HEIGHT = 32;

export const VirtualizedListItems = ({ children }) => {
  const items = useMemo(
    () =>
      children
        .map((child, index) => {
          if (child.type === ListTitle) {
            return {
              type: ITEM_CHILDREN_TYPES.TITLE,
              id: `list-title-${index}`,
              props: child.props,
              // avoid add spacing to the first category on the list
              height: LIST_TITLE_HEIGHT
            };
          } else if (child.type === ListItem) {
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
        .filter(item => item !== undefined),
    [children]
  );

  const itemRenderer = useCallback((item, index, style) => {
    const { type, props } = item;
    let element;
    switch (type) {
      case ITEM_CHILDREN_TYPES.TITLE: {
        element = <ListTitle {...props} />;
        break;
      }
      case ITEM_CHILDREN_TYPES.ITEM: {
        element = <ListItem {...props} />;
        break;
      }
    }

    return (
      <div className="monday-style-list_virtualized-list-element" style={style}>
        {element}
      </div>
    );
  }, []);

  return (
    <VirtualizedList scrollableClassName={cx(styles.scrollableContainer)} items={items} itemRenderer={itemRenderer} />
  );
};
