// Fixed names
export const SKELETON_CUSTOM_SIZE = "custom";

export enum SkeletonType {
  CIRCLE = "circle",
  RECTANGLE = "rectangle",
  TEXT = "text"
}

export enum TextSkeletonSize {
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
  H4 = "h4",
  H5 = "h5",
  H6 = "h6",
  P = "p",
  SMALL = "small"
}

export const SKELETON_SIZES = {
  CUSTOM: SKELETON_CUSTOM_SIZE,
  CIRCLE: {},
  RECTANGLE: {},
  TEXT: TextSkeletonSize
};

export type SkeletonSizeType = TextSkeletonSize | typeof SKELETON_CUSTOM_SIZE;
