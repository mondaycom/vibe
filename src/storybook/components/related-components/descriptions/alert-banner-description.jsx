import { useMemo } from "react";
import { RelatedComponent } from "../../related-component/related-component";
import AlertBanner from "../../../../components/AlertBanner/AlertBanner";
import AlertBannerText from "../../../../components/AlertBanner/AlertBannerText/AlertBannerText";

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
      title="Alert banner"
      href="/?path=/docs/feedback-alertbanner--overview"
      description="Noticed high-signal messages, such as system alerts."
    />
  );
};
