import { BaseListItemData } from "../../BaseListItem";
import { ListGroup } from "../../BaseList";

export function normalizeOptions<T extends BaseListItemData>(
  options: ListGroup<T>[] | T[],
  filter?: string
): ListGroup<T>[] {
  let indexCounter = 0;
  return Array.isArray(options) && options.some(item => "options" in item)
    ? (options as ListGroup<T>[])
        .map(group => {
          const filteredOptions = group.options
            .filter(item => !filter || item.label.toLowerCase().includes(filter.toLowerCase()))
            .map(item => ({ ...item, index: indexCounter++ }));
          return {
            ...group,
            options: filteredOptions
          };
        })
        .filter(group => group.options.length > 0)
    : [{ label: undefined, options: (options as T[]).map(item => ({ ...item, index: indexCounter++ })) }];
}
