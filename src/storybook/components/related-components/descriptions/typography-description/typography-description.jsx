import { useMemo } from "react";
import { RelatedComponent } from "../../../related-component/related-component";
import { Heading } from "../../../../../components";

export const TypographyDescription = () => {
  const component = useMemo(() => {
    const style = { display: "flex", justifyContent: "center", alignItems: "center" };
    return (
      <div style={style}>
        <Heading type={Heading.types.h1} ellipsis={false} value="H1" size="small" />
        <Heading type={Heading.types.h2} ellipsis={false} value="H2" />
        <Heading type={Heading.types.h3} ellipsis={false} value="H3" />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Typography"
      description="Typography expresses hierarchy and brand presence."
    />
  );
};
