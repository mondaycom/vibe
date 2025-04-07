import { ForwardRefExoticComponent, RefAttributes, ComponentType } from "react";

type Required<T> = {
  [P in keyof T]-?: T[P];
};

export const withStaticProps = <Props, StaticProps, Ref = HTMLElement>(
  component: ComponentType<Props> | ForwardRefExoticComponent<Props & RefAttributes<Ref>>,
  staticProps: Required<StaticProps>
) =>
  Object.assign(component, staticProps) as (
    | ComponentType<Props>
    | ForwardRefExoticComponent<Props & RefAttributes<Ref>>
  ) &
    Required<StaticProps>;
