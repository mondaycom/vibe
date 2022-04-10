import { useCallback } from "react";
import { ListItem, ListTitle } from "components";

const ITEM_CHILDREN_TYPES = {
  TITLE: "title",
  ITEM: "item"
};

const LIST_TITLE_SPACING = 24;
const LIST_ITEM_HEIGHT = 32;

export function useChildrenAsDataObjects(children) {
  return children
    .map((child, index) => {
      if (child.type === ListTitle) {
        const isFirstCategory = index === 0;
        const { id, ...otherProps } = child.props;
        return {
          type: ITEM_CHILDREN_TYPES.TITLE,
          id: id || `list-title-${index}`,
          ...otherProps,
          // avoid add spacing to the first category on the list
          height: isFirstCategory ? LIST_ITEM_HEIGHT : LIST_ITEM_HEIGHT + LIST_TITLE_SPACING
        };
      } else if (child.type === ListItem) {
        const { id, ...otherProps } = child.props;
        return {
          type: ITEM_CHILDREN_TYPES.ITEM,
          id: id || `list-item-${index}`,
          ...otherProps,
          height: LIST_ITEM_HEIGHT
        };
      } else {
        return undefined;
      }
    })
    .filter(item => item !== undefined);
}

export function useListItemsRenderer() {
  return useCallback((item, index, style) => {
    const { type, ...otherProps } = item;
    let element;
    switch (type) {
      case ITEM_CHILDREN_TYPES.TITLE: {
        console.log(otherProps);
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
