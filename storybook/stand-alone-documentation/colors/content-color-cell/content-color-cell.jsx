import classes from "./content-color-cell.module.scss";

export const ContentColorCell = ({ children, style }) => {
  return (
    <td className={classes["content-colors-cell"]} style={style}>
      {children}
    </td>
  );
};
