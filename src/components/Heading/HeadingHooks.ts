import { HeadingSizes, HeadingTypes } from "./HeadingConstants";

export function useLegacyHeadingClassNameByType(
  type: HeadingTypes,
  size: typeof HeadingSizes[keyof typeof HeadingSizes]
) {
  if (type === HeadingTypes.h1 && size !== HeadingSizes.MEDIUM && size !== HeadingSizes.SMALL) return "vibe-h1-normal";
  if (
    (type === HeadingTypes.h2 && size !== HeadingSizes.MEDIUM && size !== HeadingSizes.SMALL) ||
    (type === HeadingTypes.h1 && (size === HeadingSizes.MEDIUM || size === HeadingSizes.SMALL))
  )
    return "vibe-h2-normal";
  if (type === HeadingTypes.h3 && size !== HeadingSizes.MEDIUM && size !== HeadingSizes.SMALL) return "vibe-h2-light";
  if (
    (type === HeadingTypes.h2 && (size === HeadingSizes.MEDIUM || size === HeadingSizes.SMALL)) ||
    (type === HeadingTypes.h3 && (size === HeadingSizes.MEDIUM || size === HeadingSizes.SMALL)) ||
    type === HeadingTypes.h4
  )
    return "vibe-h3-normal";
  if (type === HeadingTypes.h5) return "vibe-text-medium-normal";
  if (type === HeadingTypes.h6) return "vibe-text-small-normal";
}
