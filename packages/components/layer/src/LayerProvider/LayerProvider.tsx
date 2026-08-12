import React, { type FC, type ReactNode, type RefObject, useMemo } from "react";
import LayerContext from "./LayerContext";

export interface LayerProviderType {
  /**
   * The child elements.
   */
  children: ReactNode | ReactNode[];
  /**
   * A reference to the layer container element.
   */
  layerRef: RefObject<HTMLElement> | null;
}

const LayerProvider: FC<LayerProviderType> = ({ children, layerRef }) => {
  const value = useMemo(() => ({ layerRef }), [layerRef]);
  return <LayerContext.Provider value={value}>{children}</LayerContext.Provider>;
};

export default LayerProvider;
