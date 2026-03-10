import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Search } from "@ezds/core";

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
      href="/?path=/docs/components-search--docs"
      description="Displays content classification."
    />
  );
};
