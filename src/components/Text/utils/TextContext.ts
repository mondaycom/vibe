import React from "react";

type TextContextType = {
    ignoreHeightOverflow: boolean;
}

export const TextContext = React.createContext<TextContextType>({ignoreHeightOverflow: false});