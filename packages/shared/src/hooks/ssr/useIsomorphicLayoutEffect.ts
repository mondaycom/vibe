import { useEffect, useLayoutEffect } from "react";
import { isClient } from "../../utils/ssr-utils";

// In server side rendering, useEffect is used instead of useLayoutEffect to avoid the console warnings
export const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;
