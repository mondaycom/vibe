import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Update, Locked, Lines } from "@ezds/icons";
import { Icon } from "@ezds/core";

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
      href="/?path=/story/components-icon--icons-list-story"
      description="Catalog of publicly avaliable icons."
    />
  );
};
