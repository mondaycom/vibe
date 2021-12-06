import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
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
  return <RelatedComponent component={component} title="Search" description="Displays content classification." />;
};
