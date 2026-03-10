import React from 'react';

export type EZDSComponent<T, P = HTMLElement> = React.ForwardRefExoticComponent<T & React.RefAttributes<P>>;
