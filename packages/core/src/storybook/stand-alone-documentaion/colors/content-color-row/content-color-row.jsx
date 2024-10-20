import React from "react";
import { useMemo } from "react";
import ColorUtils from "../../../../utils/colors-utils";
import { ContentColorCell } from "../content-color-cell/content-color-cell";
import Text from "../../../../components/Text/Text";

export const ContentColorRow = ({ colorName }) => {
  const regularStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getMondayColorAsStyle(colorName, ColorUtils.modes.REGULAR)
    }),
    [colorName]
  );
  const hoverStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getMondayColorAsStyle(colorName, ColorUtils.modes.HOVER)
    }),
    [colorName]
  );
  const selectedStyle = useMemo(
    () => ({
      backgroundColor: ColorUtils.getMondayColorAsStyle(colorName, ColorUtils.modes.SELECTED)
    }),
    [colorName]
  );

  return (
    <tr className="content-color-row">
      <ContentColorCell>
        <Text>{`--${colorName}`}</Text>
      </ContentColorCell>
      <ContentColorCell style={regularStyle} />
      <ContentColorCell style={hoverStyle} />
      <ContentColorCell style={selectedStyle} />
    </tr>
  );
};
