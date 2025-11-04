import { useEffect, useLayoutEffect } from "react";
import { isClient } from "../../utils/ssr-utils";

// In server side rendering, useEffect is used instead of useLayoutEffect to avoid the console warnings
const useIsomorphicLayoutEffect = isClient() ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
