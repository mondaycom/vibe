import { useState } from "react";
import useIsomorphicLayoutEffect from "../ssr/useIsomorphicLayoutEffect";
import useMediaQuery from "../useMediaQuery";
import {
  EZDS_MEDIA_QUERIES,
  LARGE,
  SMALL1,
  XLARGE,
  MEDIUM1,
  MEDIUM2,
  SMALL2,
  MEDIA_QUERY_SIZES
} from "../../utils/media-query-utils";

export default function useEZDSMediaQuery() {
  const [mediaSize, setMediaSize] = useState(SMALL1);
  const [isSmall1, isSmall2, isMedium1, isMedium2, isLarge, isXLarge] = useMediaQuery(EZDS_MEDIA_QUERIES);

  useIsomorphicLayoutEffect(() => {
    if (isSmall1) setMediaSize(SMALL1);
    if (isSmall2) setMediaSize(SMALL2);
    if (isMedium1) setMediaSize(MEDIUM1);
    if (isMedium2) setMediaSize(MEDIUM2);
    if (isLarge) setMediaSize(LARGE);
    if (isXLarge) setMediaSize(XLARGE);
  }, [isSmall1, isSmall2, isMedium1, isMedium2, isLarge, isXLarge, setMediaSize]);

  return mediaSize;
}

useEZDSMediaQuery.sizes = MEDIA_QUERY_SIZES;
