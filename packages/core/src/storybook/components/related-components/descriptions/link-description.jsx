import React, { useMemo } from "react";
import { RelatedComponent } from "vibe-storybook-components";
import Link from "../../../../components/Link/Link";
import { ExternalPage } from "../../../../components/Icon/Icons";

export const LinkDescription = () => {
  const component = useMemo(
    () => <Link text="Read more" icon={ExternalPage} iconPosition={Link.iconPositions.START} />,
    []
  );
  return (
    <RelatedComponent
      component={component}
      href="/?path=/docs/navigation-link--docs"
      title="Link"
      description="Actionable text component with connection to another web pages."
    />
  );
};
