import React from "react";
import { RelatedComponents } from "@ezds/storybook-blocks";
import { DESCRIPTION_COMPONENTS_MAP } from "./component-description-map";

export const RelatedComponentsDecorator = ({ componentsNames = [], linkTarget }) => {
  return (
    <RelatedComponents
      componentsNames={componentsNames}
      descriptionComponentsMap={DESCRIPTION_COMPONENTS_MAP}
      linkTarget={linkTarget}
    />
  );
};

export default RelatedComponentsDecorator;
