import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import ExpandCollapse from "../../../../../components/ExpandCollapse/ExpandCollapse";
import Text from "../../../../../components/Text/Text";
import Icon from "../../../../../components/Icon/Icon";
import Robot from "../../../../../components/Icon/Icons/components/Robot";
import styles from "./expand-collapse-description.module.scss";

export const ExpandCollapseDescription = () => {
  const component = useMemo(() => {
    return (
      <ExpandCollapse title="ExpandCollapse" className={styles.expandCollapseDescription}>
        <Text maxLines={2}>Insert any component that you want, here is a robot for you</Text>
        <Icon iconType={Icon.type.SVG} icon={Robot} iconSize={40} clickable={false} />
      </ExpandCollapse>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="ExpandCollapse"
      href="/?path=/docs/data-display-expandcollapse--docs"
      description="ExpandCollapse is a component that allows you to hide and show content."
    />
  );
};
