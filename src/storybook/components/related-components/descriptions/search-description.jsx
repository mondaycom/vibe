import { useMemo } from "react";
import { RelatedComponent } from "monday-ui-storybook-blocks";
import Search from "../../../../components/Search/Search";

export const SearchDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "80%"
    };
    return (
      <div style={style}>
        <Search placeholder="Placeholder text here" size={Search.sizes.LARGE} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Search"
      href="/?path=/docs/inputs-search--overview"
      description="Displays content classification."
    />
  );
};
