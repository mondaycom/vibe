import type { ColumnWidths } from "@/components/types";

export const BOARD_GRID_CHECKBOX_COL_PX = 50;
export const BOARD_GRID_ADD_COL_PX = 40;

/** Applied in `App` and inside resize math so columns never collapse unusably thin. */
export const MIN_COLUMN_WIDTH_PX = 50;

export function boardGridTemplateColumns(widths: ColumnWidths): string {
  return `${BOARD_GRID_CHECKBOX_COL_PX}px minmax(${widths.task}px, 1fr) ${widths.owner}px ${widths.status}px ${widths.priority}px ${widths.eta}px ${BOARD_GRID_ADD_COL_PX}px`;
}

/** Footer row mirrors data columns (owner → add). */
export function boardFooterDataColumnsTemplate(widths: ColumnWidths): string {
  return `${widths.owner}px ${widths.status}px ${widths.priority}px ${widths.eta}px ${BOARD_GRID_ADD_COL_PX}px`;
}
