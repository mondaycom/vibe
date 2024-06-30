import React from "react";
import { TableContainerProvider } from "../context/TableContainerContext/TableContainerContext";
import TableContainerRoot from "./TableContainerRoot";
import { TableContainerProps } from "./TableContainer.types";
import { getTestId } from "../../../tests/test-ids-utils";
import { ComponentDefaultTestId } from "../../../tests/constants";

const TableContainer = ({ id, className, "data-testid": dataTestId, style, children }: TableContainerProps) => {
  return (
    <TableContainerProvider>
      <TableContainerRoot
        id={id}
        className={className}
        data-testid={dataTestId || getTestId(ComponentDefaultTestId.TABLE_CONTAINER, id)}
        style={style}
      >
        {children}
      </TableContainerRoot>
    </TableContainerProvider>
  );
};

export default TableContainer;
