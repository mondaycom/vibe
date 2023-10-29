import React from "react";

type TypographyContext = {
  ignoreHeightOverflow: boolean;
};

export const TypographyContext = React.createContext<TypographyContext>({ ignoreHeightOverflow: false });
