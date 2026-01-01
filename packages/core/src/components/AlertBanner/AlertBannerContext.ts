import React from "react";
import { type TypographyColor } from "@vibe/typography";

type AlertBannerContextType = {
  textColor: Extract<TypographyColor, "onPrimary" | "onInverted" | "fixedDark">;
};

export const AlertBannerContext = React.createContext<AlertBannerContextType>({
  textColor: "onPrimary"
});
