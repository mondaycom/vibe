import React from 'react';
import { LinkTarget } from '../link/LinkConstants';

type RelatedComponentsContextType = {
  linkTarget?: LinkTarget;
};

export const RelatedComponentsContext = React.createContext<RelatedComponentsContextType>({
  linkTarget: LinkTarget.NEW_WINDOW,
});
