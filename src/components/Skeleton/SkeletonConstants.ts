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

export enum ShapeSkeletonSize {
  CUSTOM = "custom"
}
export const SKELETON_SIZES = {
  CUSTOM: ShapeSkeletonSize.CUSTOM,
  CIRCLE: {},
  RECTANGLE: {},
  TEXT: TextSkeletonSize
};

export type SkeletonSizeType = TextSkeletonSize | ShapeSkeletonSize;

export const SKELETON_ALLOWED_SIZES = {
  CIRCLE: [SKELETON_CUSTOM_SIZE],
  RECTANGLE: [SKELETON_CUSTOM_SIZE],
  TEXT: [...Object.values(SKELETON_SIZES.TEXT), SKELETON_CUSTOM_SIZE]
};
