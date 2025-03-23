import React from "react";
import { useMemo } from "react";
import { ContentColorRow } from "../content-color-row/content-color-row";
import { ContentColorByName } from "../../../../utils/colors-vars-map";
import { ContentColorCell } from "../content-color-cell/content-color-cell";
import classes from "./content-colors.module.scss";
import Text from "../../../../components/Text/Text";

export const ContentColors = () => {
  const colorsCells = useMemo(
    () => Object.values(ContentColorByName).map(colorName => <ContentColorRow key={colorName} colorName={colorName} />),
    []
  );

  return (
    <table className={classes["content-colors-table"]} cellSpacing={1}>
      <tr>
        <ContentColorCell />
        <ContentColorCell>
          <Text>Default</Text>
        </ContentColorCell>
        <ContentColorCell>
          <Text>Hover</Text>
        </ContentColorCell>
        <ContentColorCell>
          <Text>Selected</Text>
        </ContentColorCell>
      </tr>
      {colorsCells}
    </table>
  );
};
