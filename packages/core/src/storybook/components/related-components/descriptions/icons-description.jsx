import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
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
      href="/?path=/story/media-icon--icons-list-story"
      description="Catalog of publicly avaliable icons."
    />
  );
};
