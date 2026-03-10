import React from "react";
import { useMemo } from "react";
import { ColorUtils } from "@ezds/shared";
import { ContentColorCell } from "../content-color-cell/content-color-cell";
import { Text } from "@ezds/core";

interface ContentColorRowProps {
  colorName: string;
}

export const ContentColorRow: React.FC<ContentColorRowProps> = ({ colorName }) => {
  const regularStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getEZDSColorAsStyle(colorName, "regular")
    }),
    [colorName]
  );
  const hoverStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getEZDSColorAsStyle(colorName, "hover")
    }),
    [colorName]
  );
  const selectedStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getEZDSColorAsStyle(colorName, "selected")
    }),
    [colorName]
  );

  return (
    <tr className="content-color-row">
      <ContentColorCell>
        <Text>{`--color-${colorName}`}</Text>
      </ContentColorCell>
      <ContentColorCell style={regularStyle} />
      <ContentColorCell style={hoverStyle} />
      <ContentColorCell style={selectedStyle} />
    </tr>
  );
};
