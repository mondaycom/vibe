import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Update, Locked, Lines } from "@vibe/icons";
import { Icon } from "@vibe/core";

export const IconsDescription = () => {
  const component = useMemo(() => {
    const style = {
      display: "flex",
      gap: "16px"
    };
    return (
      <div style={style}>
        <Icon icon={Update} size={36} />
        <Icon icon={Lines} size={36} />
        <Icon icon={Locked} size={36} />
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="Icons"
      href="/?path=/story/components-icon--icons-list-story"
      description="Catalog of publicly avaliable icons."
    />
  );
};
