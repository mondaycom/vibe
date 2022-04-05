import {
  useChildrenAsDataObjects,
  useListItemsRenderer
} from "components/List/VirtualizedListItems/VirtualizedListItemsHooks";
import { VirtualizedList } from "components";
import cx from "classnames";
import styles from "components/Combobox/components/ComboboxItems/ComboboxItems.modules.scss";

export const VirtualizedLIstItems = ({ children }) => {
  const items = useChildrenAsDataObjects(children);
  const itemRenderer = useListItemsRenderer();

  return <VirtualizedList scrollableClassName="monday-style-list" items={items} itemRenderer={itemRenderer} />;
};
