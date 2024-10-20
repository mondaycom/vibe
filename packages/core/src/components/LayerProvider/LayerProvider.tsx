import React, { FC, ReactNode, RefObject } from "react";
import LayerContext from "./LayerContext";

export interface LayerProviderType {
  children: ReactNode | ReactNode;
  layerRef: RefObject<HTMLElement> | null;
}

const LayerProvider: FC<LayerProviderType> = ({ children, layerRef }) => {
  return <LayerContext.Provider value={{ layerRef }}>{children}</LayerContext.Provider>;
};

export default LayerProvider;
