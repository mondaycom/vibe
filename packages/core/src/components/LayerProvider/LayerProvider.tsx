import React, { FC, ReactNode, RefObject } from "react";
import LayerContext from "./LayerContext";

export interface LayerProviderType {
  /**
   * The child elements that will have access to the layer context.
   */
  children: ReactNode | ReactNode[];
  /**
   * A reference to the layer container element.
   */
  layerRef: RefObject<HTMLElement> | null;
}

const LayerProvider: FC<LayerProviderType> = ({ children, layerRef }) => {
  return <LayerContext.Provider value={{ layerRef }}>{children}</LayerContext.Provider>;
};

export default LayerProvider;
