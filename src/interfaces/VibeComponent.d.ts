import React from "react";

export default interface VibeComponent<T, P> extends React.ForwardRefExoticComponent<T & React.RefAttributes<P>> {}
