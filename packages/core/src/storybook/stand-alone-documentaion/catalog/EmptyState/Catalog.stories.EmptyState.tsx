import React from "react";
import emptyStateExample from "../../../stories-common-assets/emptyStateExample.svg";
import { Heading } from "../../../../next/next";
import { Text } from "../../../../components";
import styles from "./Catalog.stories.EmptyState.module.scss";

export const CatalogEmptyState = () => {
  return (
    <div className={styles.emptyStateContainer} aria-labelledby="empty-state-id">
      <img style={{ width: "290px" }} src={emptyStateExample} alt="" role="presentation" />
      <Heading type={Heading.types.H2} id="empty-state-id" className={styles.emptyStateHeading}>
        We haven&apos;t found this component in the catalog
      </Heading>
      <Text element="span" type={Text.types.TEXT1} style={{ width: "50%", textAlign: "center" }} ellipsis={false}>
        Not all the components have been added to the Catalog already, please, also check the{" "}
        <Text element="span" type={Text.types.TEXT1} weight={Text.weights.BOLD}>
          search in the left panel
        </Text>
        .
      </Text>
    </div>
  );
};
