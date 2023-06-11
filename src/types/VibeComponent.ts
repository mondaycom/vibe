import React from "react";

export type VibeComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;

export const withStaticProps = <T, P, S>(forwarded: VibeComponent<T, P>, staticProps: S) =>
  Object.assign(forwarded, staticProps);
