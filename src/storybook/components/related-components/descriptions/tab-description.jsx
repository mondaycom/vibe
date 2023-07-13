import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Tab from "../../../../components/Tabs/Tab/Tab";
import TabList from "../../../../components/Tabs/TabList/TabList";

export const TabsDescription = () => {
  const component = useMemo(() => {
    const style = {
      marginLeft: "-40px"
    };
    return (
      <div style={style}>
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
      href="/?path=/docs/navigation-tabs-tabs--overview"
      description="Allow users to navigate between related views of content."
    />
  );
};
