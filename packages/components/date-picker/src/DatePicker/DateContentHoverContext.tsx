import React, { createContext, useContext, useMemo, useState } from "react";
import { noop } from "es-toolkit";

export const DayContentHoverContext = createContext<{
  hover: Date | undefined;
  setHover: (_hover: Date | undefined) => void;
}>({ hover: undefined, setHover: noop });

export const DayContentHoverProvider = ({ children }: { children: React.ReactNode }) => {
  const [hover, setHover] = useState<Date | undefined>(undefined);
  const value = useMemo(() => ({ hover, setHover }), [hover]);
  return <DayContentHoverContext.Provider value={value}>{children}</DayContentHoverContext.Provider>;
};

export const useDayContentHoverContext = () => useContext(DayContentHoverContext);
