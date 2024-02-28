export function getOptionId(id: string, index: number) {
  return id !== undefined ? `combobox-item-${id}` : `combobox-item-${index}`;
}
