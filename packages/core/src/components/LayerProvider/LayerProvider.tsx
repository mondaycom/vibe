import React, { FC, useRef, useEffect, Children } from "react";
import LayerContext from "./LayerContext";

interface LayerProviderType {
  children: JSX.Element;
}

const LayerProvider: FC<LayerProviderType> = ({ children }) => {
  const childrenRef = useRef();

  useEffect(() => {
    if (!childrenRef.current) {
      console.error("LayerProvider: The child component does not forward its ref");
    }
  }, []);

  const child = children && Children.only(children);

  if (!child) {
    console.error("LayerProvider: The child component must be a single element");
  }

  const childrenWithRef = React.cloneElement(child, { ref: childrenRef });

  return <LayerContext.Provider value={{ layerRef: childrenRef }}>{childrenWithRef}</LayerContext.Provider>;
};

export default LayerProvider;
