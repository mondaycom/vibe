import React, { FC } from "react";
import LayerContext from "./LayerContext";

interface LayerProviderType {
  children: JSX.Element | JSX.Element[];
  layerRef: React.RefObject<HTMLElement> | null;
}

const LayerProvider: FC<LayerProviderType> = ({ children, layerRef }) => {
  return <LayerContext.Provider value={{ layerRef }}>{children}</LayerContext.Provider>;
};

export default LayerProvider;
