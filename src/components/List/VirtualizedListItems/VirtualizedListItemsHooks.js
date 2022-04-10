import { useCallback, useMemo } from "react";
import { ListItem, ListTitle } from "components";

const ITEM_CHILDREN_TYPES = {
  TITLE: "title",
  ITEM: "item"
};

const LIST_TITLE_SPACING = 24;
const LIST_ITEM_HEIGHT = 32;

export function useChildrenAsDataObjects(children) {
  return useMemo(
    () =>
      children
        .map((child, index) => {
          if (child.type === ListTitle) {
            const isFirstCategory = index === 0;
            return {
              type: ITEM_CHILDREN_TYPES.TITLE,
              id: `list-title-${index}`,
              props: child.props,
              // avoid add spacing to the first category on the list
              height: isFirstCategory ? LIST_ITEM_HEIGHT : LIST_ITEM_HEIGHT + LIST_TITLE_SPACING
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
}

export function useListItemsRenderer() {
  return useCallback((item, index, style) => {
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
}
