import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import { Update, Locked, Lines } from "../../../../components/Icon/Icons";
import Icon from "../../../../components/Icon/Icon";

export const IconsDescription = () => {
  const component = useMemo(() => {
    const style = {
      display: "flex",
      gap: "16px"
    };
    return (
      <div style={style}>
        <Icon icon={Update} iconSize={36} />
        <Icon icon={Lines} iconSize={36} />
        <Icon icon={Locked} iconSize={36} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Icons"
      description="Compact elements that represent an input, attribute, or action."
    />
  );
};
