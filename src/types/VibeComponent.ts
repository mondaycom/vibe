import React from "react";
type VibeComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>> & {
  defaultTestId?: string;
};

export default VibeComponent;
