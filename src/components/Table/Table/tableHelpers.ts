import React, { AriaAttributes } from "react";
import { ITableColumn } from "./Table";
import MoveArrowUp from "../../Icon/Icons/components/MoveArrowUp";
import MoveArrowDown from "../../Icon/Icons/components/MoveArrowDown";
import Sort from "../../Icon/Icons/components/Sort";
import { ITableHeaderCellProps } from "../TableHeaderCell/TableHeaderCell";

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
    return MoveArrowUp;
  } else if (sortState === "desc") {
    return MoveArrowDown;
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
