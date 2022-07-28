export const SMALL1 = 1;
export const SMALL2 = 2;
export const MEDIUM1 = 3;
export const MEDIUM2 = 4;
export const LARGE = 5;
export const XLARGE = 6;

export const MEDIA_QUERY_QUERIES = {
  [SMALL1]: "screen and (max-width: 767px)",
  [SMALL2]: "screen and (max-width: 1023px) and (min-width: 768px)",
  [MEDIUM1]: "screen and (max-width: 1279px) and (min-width: 1024px)",
  [MEDIUM2]: "screen and (max-width: 1439px) and (min-width: 1280px)",
  [LARGE]: "screen and (max-width: 1919px) and (min-width: 1440px)",
  [XLARGE]: "screen and (min-width: 1920px)"
};

export const VIBE_MEDIA_QUERIES = [
  MEDIA_QUERY_QUERIES[SMALL1],
  MEDIA_QUERY_QUERIES[SMALL2],
  MEDIA_QUERY_QUERIES[MEDIUM1],
  MEDIA_QUERY_QUERIES[MEDIUM2],
  MEDIA_QUERY_QUERIES[LARGE],
  MEDIA_QUERY_QUERIES[XLARGE]
];

export const MEDIA_QUERY_SIZES = {
  SMALL1,
  SMALL2,
  MEDIUM1,
  MEDIUM2,
  LARGE,
  XLARGE
};
