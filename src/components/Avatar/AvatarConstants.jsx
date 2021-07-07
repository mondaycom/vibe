const AVATAR_SMALL_SIZE = "small";
const AVATAR_MEDIUM_SIZE = "medium";
const AVATAR_LARGE_SIZE = "large";

export const AVATAR_SIZES = {
  SMALL: AVATAR_SMALL_SIZE,
  MEDIUM: AVATAR_MEDIUM_SIZE,
  LARGE: AVATAR_LARGE_SIZE
};
export const AVATAR_ALLOWED_SIZES = Object.values(AVATAR_SIZES);

// This is different from dialog positions terminology. but, start and end it's not clear (what is start? what is end?)
// and this css syntax is not yes work in all browsers
export const AVATAR_BADGE_POSITIONS = {
  TOP_RIGHT: "top-right",
  BOTTOM_RIGHT: "bottom-right",
  TOP_LEFT: "top-left",
  BOTTOM_LEFT: "bottom-right"
};
export const AVATAR_BADGE_ALLOWED_POSITIONS = Object.values(AVATAR_BADGE_POSITIONS);
