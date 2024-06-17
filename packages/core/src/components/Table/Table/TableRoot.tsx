import React, { forwardRef } from "react";
import { ITableProps } from "./Table";

type TableRootProps = Pick<ITableProps, "id" | "className" | "data-testid" | "style" | "children">;

const TableRoot = forwardRef(
  (
    { id, className, "data-testid": dataTestId, style, children }: TableRootProps,
    ref: React.ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div ref={ref} id={id} className={className} data-testid={dataTestId} role="table" style={style}>
        {children}
      </div>
    );
  }
);

export default TableRoot;
