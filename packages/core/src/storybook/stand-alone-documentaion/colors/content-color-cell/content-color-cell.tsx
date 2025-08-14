import React, { type ReactNode, type CSSProperties } from "react";
import classes from "./content-color-cell.module.scss";

interface ContentColorCellProps {
  children?: ReactNode;
  style?: CSSProperties;
}

export const ContentColorCell: React.FC<ContentColorCellProps> = ({ children, style }) => {
  return (
    <td className={classes["content-colors-cell"]} style={style}>
      {children}
    </td>
  );
};
