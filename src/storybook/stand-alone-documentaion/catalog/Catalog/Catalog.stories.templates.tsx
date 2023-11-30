import { useState } from "react";
import { RelatedComponentsDecorator } from "../../../components";
import { RelatedComponents } from "vibe-storybook-components";
import { DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP } from "../../../components/related-components/component-description-map";
import { Search } from "../../../../components";
import { CatalogEmptyState } from "../EmptyState/Catalog.stories.EmptyState";
import styles from "./Catalog.stories.templates.module.scss";

const RELATED_COMPONENT_NAMES = Array.from(DESCRIPTION_COMPONENTS_WITHOUT_GENERAL_DESCRIPTION_MAP.keys())
  .map(name => name.toLowerCase())
  .sort();

export const CatalogTemplate = () => {
  const [query, setQuery] = useState("");
  const componentsToDisplay = RELATED_COMPONENT_NAMES.filter(name =>
    name.replaceAll("-", "").includes(query.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Search
        placeholder="Search by component name..."
        value={query}
        onChange={setQuery}
        wrapperClassName={styles.search}
      />
      <RelatedComponentsDecorator
        componentsNames={componentsToDisplay}
        linkTarget={RelatedComponents.linkTargets.PARENT}
      />
      {componentsToDisplay.length === 0 && <CatalogEmptyState />}
    </div>
  );
};
