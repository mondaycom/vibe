import React from "react";
import { useMemo } from "react";
import { ContentColorRow } from "../content-color-row/content-color-row";
import { ContentColorByName } from "../../../../utils/colors-vars-map";
import { ContentColorCell } from "../content-color-cell/content-color-cell";
import classes from "./content-colors.module.scss";

export const ContentColors = () => {
  const colorsCells = useMemo(
    () => Object.values(ContentColorByName).map(colorName => <ContentColorRow key={colorName} colorName={colorName} />),
    []
  );

  return (
    <table className={classes["content-colors-table"]} cellSpacing={1}>
      <tr>
        <ContentColorCell />
        <ContentColorCell>Default</ContentColorCell>
        <ContentColorCell>Hover</ContentColorCell>
        <ContentColorCell>Selected</ContentColorCell>
      </tr>
      {colorsCells}
    </table>
  );
};
