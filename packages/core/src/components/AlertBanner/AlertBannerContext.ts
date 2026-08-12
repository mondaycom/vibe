import React from "react";
import { type TypographyColor } from "@vibe/typography";

export type AlertBannerContextType = {
  textColor: Extract<TypographyColor, "onPrimary" | "onInverted" | "fixedDark">;
};

export const AlertBannerContext = React.createContext<AlertBannerContextType>({
  textColor: "onPrimary"
});
