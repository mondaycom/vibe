import React, { useState } from "react";
import { RelatedComponentsDecorator } from "../../../components";
import { RelatedComponents } from "vibe-storybook-components";
import { DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP } from "../../../components/related-components/component-description-map";
import Search from "../../../../components/Search/Search";
import { CatalogEmptyState } from "../EmptyState/Catalog.stories.EmptyState";
import Flex from "../../../../components/Flex/Flex";

const RELATED_COMPONENT_NAMES = Array.from(DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP.keys())
  .map(name => name.toLowerCase())
  .sort();

export const CatalogTemplate = () => {
  const [query, setQuery] = useState("");
  const componentsToDisplay = RELATED_COMPONENT_NAMES.filter(name =>
    name.replaceAll("-", "").includes(query.toLowerCase())
  );

  return (
    <Flex direction={Flex.directions.COLUMN} gap={Flex.gaps.LARGE} align={Flex.align.STRETCH} style={{ width: "100%" }}>
      <Search placeholder="Search by component name..." value={query} onChange={setQuery} />
      <RelatedComponentsDecorator
        componentsNames={componentsToDisplay}
        linkTarget={RelatedComponents.linkTargets.PARENT}
      />
      {componentsToDisplay.length === 0 && <CatalogEmptyState />}
    </Flex>
  );
};
