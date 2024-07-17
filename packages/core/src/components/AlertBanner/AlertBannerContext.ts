import React from "react";

type AlertBannerContextType = {
  textColor: "onPrimary" | "onInverted" | "fixedDark";
};

export const AlertBannerContext = React.createContext<AlertBannerContextType>({
  textColor: "onPrimary"
});
