/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.module.scss" {
  const styles: { [className: string]: string };
  export default styles;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module "*.png";
declare module "*.mp4";
declare module "*.pdf";

