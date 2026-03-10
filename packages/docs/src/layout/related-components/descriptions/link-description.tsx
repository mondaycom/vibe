import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { Link } from "@ezds/core";
import { ExternalPage } from "@ezds/icons";

export const LinkDescription = () => {
  const component = useMemo(() => <Link text="Read more" icon={ExternalPage} iconPosition="start" />, []);
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/components-link--docs"
      title="Link"
      description="Actionable text component with connection to another web pages."
    />
  );
};
