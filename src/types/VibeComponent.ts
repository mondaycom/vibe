import React from "react";

export default interface VibeComponent<T, P = HTMLElement>
  extends React.ForwardRefExoticComponent<T & React.RefAttributes<P>> {}
