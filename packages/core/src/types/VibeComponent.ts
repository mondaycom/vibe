import React from "react";

type VibeComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;

export default VibeComponent;
