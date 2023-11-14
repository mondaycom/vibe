import { useState } from "react";
import { RelatedComponentsDecorator } from "../../../components";
import { descriptionComponentsWithoutGeneralDescriptionMap } from "../../../components/related-components/component-description-map";
import { Search } from "../../../../components";
import { CatalogEmptyState } from "../EmptyState/Catalog.stories.EmptyState";
import styles from "./Catalog.stories.module.scss";

const RELATED_COMPONENT_NAMES = Array.from(descriptionComponentsWithoutGeneralDescriptionMap.keys())
  .map(name => name.toLowerCase())
  .sort();

export const Catalog = () => {
  const [query, setQuery] = useState("");
  const componentsToDisplay = RELATED_COMPONENT_NAMES.filter(name => name.includes(query.toLowerCase()));

  return (
    <>
      <Search
        placeholder="Search by component name..."
        value={query}
        onChange={setQuery}
        wrapperClassName={styles.search}
      />
      <RelatedComponentsDecorator componentsNames={componentsToDisplay} />
      {componentsToDisplay.length === 0 && <CatalogEmptyState />}
    </>
  );
};
