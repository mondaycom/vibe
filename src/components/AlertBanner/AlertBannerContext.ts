import React from "react";
import { TypographyColor } from "../Typography/TypographyConstants";

type AlertBannerContextType = {
  textColor: TypographyColor.ON_PRIMARY | TypographyColor.ON_INVERTED | TypographyColor.FIXED_DARK;
};

export const AlertBannerContext = React.createContext<AlertBannerContextType>({
  textColor: TypographyColor.ON_PRIMARY
});
