import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { ExpandCollapse, Text, Icon } from "@ezds/core";
import { Robot } from "@ezds/icons";
import styles from "./expand-collapse-description.module.scss";

export const ExpandCollapseDescription = () => {
  const component = useMemo(() => {
    return (
      <ExpandCollapse title="ExpandCollapse" className={styles.expandCollapseDescription}>
        <Text maxLines={2}>Insert any component that you want, here is a robot for you</Text>
        <Icon iconType="svg" icon={Robot} iconSize={40} />
      </ExpandCollapse>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="ExpandCollapse"
      href="/?path=/docs/components-expandcollapse--docs"
      description="ExpandCollapse is a component that allows you to hide and show content."
    />
  );
};
