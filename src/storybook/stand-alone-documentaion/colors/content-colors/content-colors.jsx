import { useMemo } from "react";
import { ContentColorRow } from "../content-color-row/content-color-row";
import { contentColorsByName } from "../../../../utils/colors-vars-map";
import { Frame } from "../../../components";
import { ContentColorCell } from "../content-color-cell/content-color-cell";
import classes from "./content-colors.module.scss";

export const ContentColors = () => {
  const colorsCells = useMemo(
    () =>
      Object.values(contentColorsByName).map(colorName => <ContentColorRow key={colorName} colorName={colorName} />),
    []
  );

  return (
    <Frame>
      <table className={classes["content-colors-table"]} cellSpacing={1}>
        <tr>
          <ContentColorCell />
          <ContentColorCell>Default</ContentColorCell>
          <ContentColorCell>Hover</ContentColorCell>
          <ContentColorCell>Selected</ContentColorCell>
        </tr>
        {colorsCells}
      </table>
    </Frame>
  );
};
