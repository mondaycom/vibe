import React from "react";

export interface LayersContextType {
  /**
   * A reference to the layer container element.
   */
  layerRef: React.RefObject<HTMLElement>;
}

const LayerContext = React.createContext<LayersContextType>({
  layerRef: null
});

export default LayerContext;
