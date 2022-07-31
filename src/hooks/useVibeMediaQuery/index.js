import { useLayoutEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import {
  VIBE_MEDIA_QUERIES,
  LARGE,
  SMALL1,
  XLARGE,
  MEDIUM1,
  MEDIUM2,
  SMALL2,
  MEDIA_QUERY_SIZES
} from "../../utils/media-query-utils";

export default function useVibeMediaQuery() {
  const [mediaSize, setMediaSize] = useState(SMALL1);
  const [isSmall1, isSmall2, isMedium1, isMedium2, isLarge, isXLarge] = useMediaQuery(VIBE_MEDIA_QUERIES);

  useLayoutEffect(() => {
    if (isSmall1) setMediaSize(SMALL1);
    if (isSmall2) setMediaSize(SMALL2);
    if (isMedium1) setMediaSize(MEDIUM1);
    if (isMedium2) setMediaSize(MEDIUM2);
    if (isLarge) setMediaSize(LARGE);
    if (isXLarge) setMediaSize(XLARGE);
  }, [isSmall1, isSmall2, isMedium1, isMedium2, isLarge, isXLarge, setMediaSize]);

  return mediaSize;
}

useVibeMediaQuery.sizes = MEDIA_QUERY_SIZES;
