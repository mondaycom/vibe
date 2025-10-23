import React from "react";
import emptyStateExample from "./emptyStateExample.svg";
import { Heading, Text } from "@vibe/core";
import styles from "./CatalogEmptyState.module.scss";

export const CatalogEmptyState = () => {
  return (
    <div className={styles.emptyStateContainer} aria-labelledby="empty-state-id">
      <img style={{ width: "290px" }} src={emptyStateExample} alt="" role="presentation" />
      <Heading type="h2" id="empty-state-id" className={styles.emptyStateHeading}>
        We haven&apos;t found this component in the catalog
      </Heading>
      <Text element="span" type="text1" style={{ width: "50%", textAlign: "center" }} ellipsis={false}>
        Not all the components have been added to the Catalog already, please, also check the{" "}
        <Text element="span" type="text1" weight="bold">
          search in the left panel
        </Text>
        .
      </Text>
    </div>
  );
};
