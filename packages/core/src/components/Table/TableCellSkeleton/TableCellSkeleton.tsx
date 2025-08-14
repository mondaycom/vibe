import React from "react";
import cx from "classnames";
import TableCell from "../TableCell/TableCell";
import Skeleton from "../../Skeleton/Skeleton";
import styles from "./TableCellSkeleton.module.scss";
import { type VibeComponentProps } from "../../../types";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { type TableLoadingStateType } from "../Table/Table";
import { getSkeletonType } from "../Table/tableHelpers";
import { camelCase } from "lodash-es";

export interface TableCellSkeletonProps extends VibeComponentProps {
  /**
   * The type of loading state for the skeleton.
   */
  type?: TableLoadingStateType;
  /**
   * If true, renders a shorter skeleton for text-based loading states.
   */
  short?: boolean;
}

const TableCellSkeleton: React.FC<TableCellSkeletonProps> = ({ type = "long-text" }) => {
  const isText = ["long-text", "medium-text"].includes(type);
  return (
    <TableCell>
      <Skeleton
        type={getSkeletonType(type)}
        wrapperClassName={cx(styles.tableCellSkeletonWrapper, getStyle(styles, camelCase(type)))}
        className={cx(styles.tableCellSkeleton, { [getStyle(styles, camelCase(type))]: !isText })}
        fullWidth
      />
    </TableCell>
  );
};

export default TableCellSkeleton;
