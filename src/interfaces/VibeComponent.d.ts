import React from "react";

export default interface VibeComponent<T> extends React.ForwardRefExoticComponent<T & React.RefAttributes<unknown>> {}
