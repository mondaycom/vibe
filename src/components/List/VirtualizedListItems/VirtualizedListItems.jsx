import {
  useChildrenAsDataObjects,
  useListItemsRenderer
} from "components/List/VirtualizedListItems/VirtualizedListItemsHooks";
import { VirtualizedList } from "components";

export const VirtualizedListItems = ({ children }) => {
  const items = useChildrenAsDataObjects(children);
  const itemRenderer = useListItemsRenderer();

  return <VirtualizedList scrollableClassName="ddd" items={items} itemRenderer={itemRenderer} />;
};
