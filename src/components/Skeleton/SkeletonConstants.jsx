import PropTypes from "prop-types";

// Fixed names
export const SKELETON_CIRCLE_TYPE = "circle";
export const SKELETON_TEXT_TYPE = "text";
export const SKELETON_RECTANGLE_TYPE = "rectangle";
export const SKELETON_COSTUME_SIZE = "costume";

export const SKELETON_TYPES = {
  CIRCLE: SKELETON_CIRCLE_TYPE,
  RECTANGLE: SKELETON_RECTANGLE_TYPE,
  TEXT: SKELETON_TEXT_TYPE
};

export const SKELETON_ALLOWED_TYPES = Object.values(SKELETON_TYPES);
export const SKELETON_SIZES = {
  COSTUME: SKELETON_COSTUME_SIZE,
  CIRCLE: {},
  RECTANGLE: {},
  TEXT: {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5"
  }
};

export const SKELETON_ALLOWED_SIZES = {
  CIRCLE: [SKELETON_COSTUME_SIZE],
  RECTANGLE: [SKELETON_COSTUME_SIZE],
  TEXT: [...Object.values(SKELETON_SIZES.TEXT), SKELETON_COSTUME_SIZE]
};
