import { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import LegacySearch from "../../../../components/LegacySearch/LegacySearch";

export const SearchDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <LegacySearch placeholder="Placeholder text here" size={LegacySearch.sizes.LARGE} />
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
