import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Tab, TabList } from "@ezds/core";

export const TabsDescription = () => {
  const component = useMemo(() => {
    return (
      <div>
        <TabList>
          <Tab>Tab</Tab>
          <Tab>Tab</Tab>
          <Tab>Tab</Tab>
        </TabList>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Tabs"
      href="/?path=/docs/components-tabs-tabs--docs"
      description="Allow users to navigate between related views of content."
    />
  );
};
