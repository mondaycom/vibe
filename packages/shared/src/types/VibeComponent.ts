import { type ForwardRefExoticComponent, type RefAttributes } from "react";

type VibeComponent<T, P = HTMLElement> = ForwardRefExoticComponent<T & RefAttributes<P>>;

export default VibeComponent;
