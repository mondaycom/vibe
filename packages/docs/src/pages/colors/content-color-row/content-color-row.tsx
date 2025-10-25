import React from "react";
import { useMemo } from "react";
import { ColorUtils } from "@vibe/shared";
import { ContentColorCell } from "../content-color-cell/content-color-cell";
import { Text } from "@vibe/core";

interface ContentColorRowProps {
  colorName: string;
}

export const ContentColorRow: React.FC<ContentColorRowProps> = ({ colorName }) => {
  const regularStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getMondayColorAsStyle(colorName, "regular")
    }),
    [colorName]
  );
  const hoverStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getMondayColorAsStyle(colorName, "hover")
    }),
    [colorName]
  );
  const selectedStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getMondayColorAsStyle(colorName, "selected")
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
