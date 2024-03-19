import React, { AriaAttributes } from "react";
import { ITableColumn, TableLoadingStateType } from "./Table";
import Sort from "../../Icon/Icons/components/Sort";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import { SortAscending, SortDescending } from "../../Icon/Icons";
import { SkeletonType } from "../../Skeleton/SkeletonConstants";

export function generateWidth(width: ITableColumn["width"]): string {
  if (typeof width === "number") {
    return `${width}px`;
  } else if (typeof width === "string") {
    return /%|px|fr$/.test(width) ? width : `${width}px`;
  } else if (width?.min && width?.max) {
    return `minmax(${generateWidth(width.min)}, ${generateWidth(width.max)})`;
  } else {
    return "minmax(112px, 1fr)";
  }
}

export function getTableRowLayoutStyles(columns: ITableColumn[], style: React.CSSProperties = {}): React.CSSProperties {
  return {
    ...style,
    display: "grid",
    gridTemplateColumns: columns.map(cell => generateWidth(cell.width)).join(" ")
  };
}

export function getSortIcon(sortState: ITableHeaderCellProps["sortState"]) {
  if (sortState === "asc") {
    return SortAscending;
  } else if (sortState === "desc") {
    return SortDescending;
  } else {
    return Sort;
  }
}

export function getNextSortState(sortState: ITableHeaderCellProps["sortState"]): ITableHeaderCellProps["sortState"] {
  if (sortState === "asc") {
    return "desc";
  } else if (sortState === "desc") {
    return "none";
  } else {
    return "asc";
  }
}

export function getAriaSort(sortState: ITableHeaderCellProps["sortState"]): AriaAttributes["aria-sort"] {
  if (sortState === "asc") {
    return "ascending";
  }
  if (sortState === "desc") {
    return "descending";
  }
  return "none";
}

export function getSkeletonType(loadingStateType: TableLoadingStateType): SkeletonType {
  if (loadingStateType === "circle") {
    return SkeletonType.CIRCLE;
  }
  if (loadingStateType === "rectangle") {
    return SkeletonType.RECTANGLE;
  }
  return SkeletonType.TEXT;
}

export function getLoadingTypeForCell(
  loadingStateType: TableLoadingStateType,
  rowIndex: number
): TableLoadingStateType {
  return loadingStateType === "long-text"
    ? (["long-text", "medium-text"] as TableLoadingStateType[])[rowIndex % 2]
    : loadingStateType;
}
