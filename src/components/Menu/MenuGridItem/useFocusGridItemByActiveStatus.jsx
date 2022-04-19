import { useMemo, useEffect } from "react";
import { useLastNavigationDirection } from "../Menu/hooks/useLastNavigationDirection";

export const useFocusGridItemByActiveStatus = ({
  wrapperRef,
  childRef,
  index,
  activeItemIndex,
  useDocumentEventListeners = false
}) => {
  const { lastNavigationDirectionRef } = useLastNavigationDirection();
  const isActive = useMemo(() => index === activeItemIndex, [activeItemIndex, index]);

  useEffect(() => {
    if (useDocumentEventListeners) return;
    if (isActive) {
      childRef.current?.focus();
    } else {
      wrapperRef?.current?.blur?.();
    }
  }, [childRef, isActive, lastNavigationDirectionRef, wrapperRef, useDocumentEventListeners]);
};
