import { useMemo, useEffect } from "react";
import { focusElementWithDirection } from "../../GridKeyboardNavigationContext/helper";
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
      focusElementWithDirection(childRef, lastNavigationDirectionRef.current);
    } else {
      wrapperRef?.current?.blur?.();
    }
  }, [childRef, isActive, lastNavigationDirectionRef, wrapperRef, useDocumentEventListeners]);
};
