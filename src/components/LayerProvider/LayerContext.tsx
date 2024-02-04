import React from "react";

export type LayersContextType = {
  layerRef: React.RefObject<HTMLElement>;
};

const LayerContext = React.createContext<LayersContextType>({
  layerRef: null
});

export default LayerContext;
