import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import { Link } from "@vibe/core";
import { ExternalPage } from "@vibe/icons";

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
