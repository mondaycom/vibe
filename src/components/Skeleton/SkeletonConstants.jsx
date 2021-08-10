// Fixed names
export const SKELETON_CIRCLE_TYPE = "circle";
export const SKELETON_TEXT_TYPE = "text";
export const SKELETON_RECTANGLE_TYPE = "rectangle";
export const SKELETON_CUSTOM_SIZE = "custom";

export const SKELETON_TYPES = {
  CIRCLE: SKELETON_CIRCLE_TYPE,
  RECTANGLE: SKELETON_RECTANGLE_TYPE,
  TEXT: SKELETON_TEXT_TYPE
};

export const SKELETON_ALLOWED_TYPES = Object.values(SKELETON_TYPES);
export const SKELETON_SIZES = {
  CUSTOM: SKELETON_CUSTOM_SIZE,
  CIRCLE: {},
  RECTANGLE: {},
  TEXT: {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    P: "p",
    SMALL: "small"
  }
};

export const SKELETON_ALLOWED_SIZES = {
  CIRCLE: [SKELETON_CUSTOM_SIZE],
  RECTANGLE: [SKELETON_CUSTOM_SIZE],
  TEXT: [...Object.values(SKELETON_SIZES.TEXT), SKELETON_CUSTOM_SIZE]
};
