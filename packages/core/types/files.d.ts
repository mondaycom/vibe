// SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

// SVG
declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.png";
declare module "*.mp4";
