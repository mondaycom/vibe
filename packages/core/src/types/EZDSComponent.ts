import type React from "react";

type EZDSComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;

export default EZDSComponent;
