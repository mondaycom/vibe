import React, { FC, useRef, useEffect, Children } from "react";
import LayerContext from "./LayerContext";

interface LayerProviderType {
  children: JSX.Element | JSX.Element[];
  layerRef?: React.RefObject<HTMLElement> | null;
}

const LayerProvider: FC<LayerProviderType> = ({ children, layerRef }) => {
  const childrenRef = useRef();

  useEffect(() => {
    if (!childrenRef.current && !layerRef) {
      console.warn(
        "LayerProvider: The child component does not forward its ref. Use forwardRef, or alternatively use the `layerRef` prop to pass a ref to the child component."
      );
    }
  }, [layerRef]);

  if (layerRef?.current) {
    return <LayerContext.Provider value={{ layerRef }}>{children}</LayerContext.Provider>;
  }

  const child = children && Children.only(children);

  if (!child) {
    console.warn("LayerProvider: The child component must be a single element");
  }

  const childrenWithRef = React.cloneElement(child, { ref: childrenRef });
  return <LayerContext.Provider value={{ layerRef: childrenRef }}>{childrenWithRef}</LayerContext.Provider>;
};

export default LayerProvider;
