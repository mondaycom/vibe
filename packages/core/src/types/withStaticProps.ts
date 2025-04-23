import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Component<P, R> = React.FC<P> | ForwardRefExoticComponent<P & RefAttributes<R>>;

export const withStaticProps = <Props, StaticProps, Ref = HTMLElement>(
  component: Component<Props, Ref>,
  staticProps: Required<StaticProps>
) => Object.assign(component, staticProps) as Component<Props, Ref> & Required<StaticProps>;
