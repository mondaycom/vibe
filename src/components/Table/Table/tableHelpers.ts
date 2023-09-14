import React, { AriaAttributes } from "react";
import { ITableColumn, TableContentSkeletonType } from "./Table";
import Sort from "../../Icon/Icons/components/Sort";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";
import { SortAscending, SortDescending } from "../../Icon/Icons";
import { SkeletonType } from "../../Skeleton/SkeletonConstants";

function generateWidth(width: ITableColumn["width"]) {
  if (typeof width === "number") {
    return `${width}px`;
  } else if (width?.min && width?.max) {
    return `minmax(${width.min}px, ${width.max}px)`;
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
  } else if (sortState === "desc") {
    return "descending";
  }
}

export function getSkeletonType(tableContentSkeletonType: TableContentSkeletonType): SkeletonType {
  if (tableContentSkeletonType === "circle") {
    return SkeletonType.CIRCLE;
  }
  if (tableContentSkeletonType === "rectangle") {
    return SkeletonType.RECTANGLE;
  }
  return SkeletonType.TEXT;
}
