import React, { useState } from "react";
import { RelatedComponentsDecorator } from "../../layout/related-components/related-components-decorator";
import { RelatedComponents } from "vibe-storybook-components";
import { DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP } from "../../layout/related-components/component-description-map";
import { Search, Flex } from "@vibe/core";
import { CatalogEmptyState } from "./EmptyState/CatalogEmptyState";

const RELATED_COMPONENT_NAMES: string[] = Array.from(
  DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP.keys()
).sort();

export const CatalogTemplate = () => {
  const [query, setQuery] = useState("");
  const componentsToDisplay = RELATED_COMPONENT_NAMES.filter(name =>
    name.toLowerCase().replaceAll("-", "").includes(query.toLowerCase())
  );

  return (
    <Flex direction="column" gap="large" align="stretch" style={{ width: "100%" }}>
      <Search placeholder="Search by component name..." value={query} onChange={setQuery} />
      <RelatedComponentsDecorator
        componentsNames={componentsToDisplay}
        linkTarget={RelatedComponents.linkTargets.PARENT}
      />
      {componentsToDisplay.length === 0 && <CatalogEmptyState />}
    </Flex>
  );
};
