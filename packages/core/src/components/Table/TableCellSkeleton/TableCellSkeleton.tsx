import React from "react";
import cx from "classnames";
import TableCell from "../TableCell/TableCell";
import Skeleton from "../../Skeleton/Skeleton";
import styles from "./TableCellSkeleton.module.scss";
import { VibeComponentProps } from "../../../types";
import { getStyle } from "../../../helpers/typesciptCssModulesHelper";
import { TableLoadingStateType } from "../Table/Table";
import { getSkeletonType } from "../Table/tableHelpers";
import { camelCase } from "lodash-es";

export interface TableCellSkeletonProps extends VibeComponentProps {
  type?: TableLoadingStateType;
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
