import { useBaseListItem } from "../../BaseList/context/BaseListContext";
import { type BaseItemProps } from "../BaseItem.types";

type ListItemPropsInput<Item extends Record<string, unknown>> = Pick<
  BaseItemProps<Item>,
  "id" | "component" | "size" | "highlighted" | "role" | "itemProps"
>;

interface ListItemPropsOutput {
  id: string | undefined;
  component: string;
  size: "small" | "medium" | "large";
  highlighted: boolean;
  role: string | undefined;
  itemProps: Record<string, unknown>;
  refCallback: ((element: HTMLElement | null) => void) | undefined;
}

/**
 * Merges explicit BaseItem props with context values from BaseList.
 * Explicit props always take precedence over context.
 *
 * @param props - The explicit props passed to BaseItem
 * @returns Merged props with context values as defaults
 */
export function useListItemProps<Item extends Record<string, unknown>>(
  props: ListItemPropsInput<Item>
): ListItemPropsOutput {
  const context = useBaseListItem();

  if (!context) {
    return {
      id: props.id,
      component: props.component ?? "li",
      size: props.size ?? "medium",
      highlighted: props.highlighted ?? false,
      role: props.role,
      itemProps: props.itemProps ?? {},
      refCallback: undefined
    };
  }

  return {
    id: props.id ?? context.id,
    component: props.component !== "li" ? props.component! : context.component,
    size: props.size !== "medium" ? props.size! : context.size,
    highlighted: props.highlighted !== undefined ? props.highlighted : context.highlighted,
    role: props.role ?? context.role,
    itemProps: {
      tabIndex: context.tabIndex,
      ...props.itemProps
    },
    refCallback: context.refCallback
  };
}
