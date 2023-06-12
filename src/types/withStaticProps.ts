import VibeComponent from "./VibeComponent";
import React from "react";

export const withStaticProps = <T, P, S>(forwarded: VibeComponent<T, P> | React.FC<T>, staticProps: S) =>
  Object.assign(forwarded, staticProps);
