import cx from "classnames";
import { VirtualizedList } from "components";
import {
  useChildrenAsDataObjects,
  useListItemsRenderer
} from "components/List/VirtualizedListItems/VirtualizedListItemsHooks";

export const VirtualizedListItems = ({ children }) => {
  const items = useChildrenAsDataObjects(children);
  const itemRenderer = useListItemsRenderer();

  return (
    <VirtualizedList
      scrollableClassName={cx("monday-style-list", "monday-style-list--virtualized")}
      items={items}
      itemRenderer={itemRenderer}
    />
  );
};
