import React from "react";
import { TypographyColor } from "../Typography/Typography.types";

type AlertBannerContextType = {
  textColor: Extract<TypographyColor, "onPrimary" | "onInverted" | "fixedDark">;
};

export const AlertBannerContext = React.createContext<AlertBannerContextType>({
  textColor: "onPrimary"
});
