import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Search from "../../../../components/Search/Search";

export const SearchDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <Search placeholder="Placeholder text here" size="large" />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Search"
      href="/?path=/docs/inputs-search--docs"
      description="Displays content classification."
    />
  );
};
