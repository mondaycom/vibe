import { useCallback, useEffect } from "react";

const useDisableScroll = (scrollableQuerySelector: string) => {
  const _disableScroll = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();

    return false;
  }, []);

  const disableScroll = useCallback(() => {
    if (scrollableQuerySelector?.length > 0) {
      document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
        item.addEventListener("wheel", _disableScroll);
      });
    }
  }, [_disableScroll, scrollableQuerySelector]);

  const enableScroll = useCallback(() => {
    if (scrollableQuerySelector?.length > 0) {
      document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
        item.removeEventListener("wheel", _disableScroll);
      });
    }
  }, [_disableScroll, scrollableQuerySelector]);

  useEffect(() => {
    return () => {
      if (scrollableQuerySelector?.length > 0) {
        enableScroll();
      }
    };
  }, [enableScroll, scrollableQuerySelector?.length]);

  return {
    disableScroll,
    enableScroll
  };
};

export default useDisableScroll;
