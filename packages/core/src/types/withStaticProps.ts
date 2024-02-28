import VibeComponent from "./VibeComponent";
import React from "react";

type Required<T> = {
  [P in keyof T]-?: T[P];
};

export const withStaticProps = <T, P, S>(
  forwarded: (VibeComponent<T, P> & Partial<S>) | (React.FC<T> & Partial<S>),
  staticProps: Required<S>
) => Object.assign(forwarded, staticProps);
