import React, { ForwardRefExoticComponent, RefAttributes } from "react";

type Required<T> = {
  [P in keyof T]-?: T[P];
};

export const withStaticProps = <Props, StaticProps, Ref = HTMLElement>(
  component: ForwardRefExoticComponent<Props & RefAttributes<Ref>>,
  staticProps: Required<StaticProps>
) => Object.assign(component, staticProps);

export const withStaticPropsWithoutForwardRef = <Props, StaticProps>(
  component: React.FC<Props>,
  staticProps: Required<StaticProps>
) => Object.assign(component, staticProps);
