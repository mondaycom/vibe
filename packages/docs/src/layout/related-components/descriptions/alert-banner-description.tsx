import React, { useMemo } from "react";
import { RelatedComponent } from "@ezds/storybook-blocks";
import { AlertBanner, AlertBannerText } from "@ezds/core";

export const AlertBannerDescription = () => {
  const component = useMemo(() => {
    const style = {
      width: "90%"
    };
    return (
      <div style={style}>
        <AlertBanner>
          <AlertBannerText text="Alert banner message" />
        </AlertBanner>
      </div>
    );
  }, []);
  return (
    <RelatedComponent
      component={component}
      title="AlertBanner"
      href="/?path=/docs/components-alertbanner--docs"
      description="Noticed high-signal messages, such as system alerts."
    />
  );
};
