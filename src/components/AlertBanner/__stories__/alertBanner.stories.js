import AlertBanner from "../AlertBanner";
import AlertBannerText from "../AlertBannerText/AlertBannerText";
import AlertBannerLink from "../AlertBannerLink/AlertBannerLink";

export const alertBannerTemplate = args => {
  return (
    <AlertBanner {...args}>
      <AlertBannerText text={args.bannerText} />
      <AlertBannerLink text={args.linkText} href="https://monday.com" />
    </AlertBanner>
  );
};
