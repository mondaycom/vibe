import React, { FC } from "react";
import { VibeComponentProps } from "../../../types";
import Text from "../../Text/Text";
import styles from "./TableCell.module.scss";

export interface ITableCellProps extends VibeComponentProps {
  children?: React.ReactNode;
}

const TableCell: FC<ITableCellProps> = ({ children }) => {
  const isSingleChild = React.Children.count(children) === 1;
  const typeOfFirstChild = typeof React.Children.toArray(children)[0];
  const isFirstChildString = typeOfFirstChild === "string" || typeOfFirstChild === "number";

  return (
    <div role="cell" className={styles.tableCell}>
      {isSingleChild && isFirstChildString ? (
        <Text type={Text.types.TEXT2} color={Text.colors.PRIMARY}>
          {children}
        </Text>
      ) : (
        children
      )}
    </div>
  );
};

export default TableCell;
