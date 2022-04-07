import { useCallback } from "react";
import { ListItem, ListTitle } from "components";

const ITEM_CHILDREN_TYPES = {
  TITLE: "title",
  ITEM: "item"
};
export function useChildrenAsDataObjects(children) {
  return children
    .map((child, index) => {
      if (child.type === ListTitle) {
        return {
          type: ITEM_CHILDREN_TYPES.TITLE,
          id: child.props.id || `list-title-${index}`,
          children: child.children,
          height: 56
        };
      } else if (child.type === ListItem) {
        const { id, ...otherProps } = child.props;
        return {
          type: ITEM_CHILDREN_TYPES.ITEM,
          id: id || `list-item-${index}`,
          ...otherProps,
          height: 32
        };
      } else {
        return undefined;
      }
    })
    .filter(item => item !== undefined);
}

export function useListItemsRenderer() {
  return useCallback((item, index, style) => {
    debugger;
    const { type, ...otherProps } = item;
    let element;
    switch (type) {
      case ITEM_CHILDREN_TYPES.TITLE: {
        element = <ListTitle {...otherProps} />;
        break;
      }
      case ITEM_CHILDREN_TYPES.ITEM: {
        element = <ListItem {...otherProps} />;
        break;
      }
    }

    return (
      <div className="monday-style-list_virtualized-list-element" style={style}>
        {element}
      </div>
    );
  }, []);
}
