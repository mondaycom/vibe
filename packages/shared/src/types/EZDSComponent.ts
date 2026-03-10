import { type ForwardRefExoticComponent, type RefAttributes } from "react";

type EZDSComponent<T, P = HTMLElement> = ForwardRefExoticComponent<T & RefAttributes<P>>;

export default EZDSComponent;
