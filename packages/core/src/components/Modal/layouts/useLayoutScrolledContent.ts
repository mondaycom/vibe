import { type UIEventHandler, useCallback, useEffect, useRef, useState } from "react";

const useLayoutScrolledContent = () => {
  const [isContentScrolled, setContentScrolled] = useState<boolean>(false);
  const [isScrollable, setScrollable] = useState<boolean>(false);
  const [isScrolledToEnd, setScrolledToEnd] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const checkScroll = useCallback(() => {
    const element = ref.current;
    if (element) {
      const { scrollTop, scrollHeight, clientHeight } = element;
      setScrollable(scrollHeight > clientHeight);
      setContentScrolled(scrollTop > 0);
      setScrolledToEnd(scrollTop + clientHeight >= scrollHeight);
    }
  }, []);

  const onScroll: UIEventHandler<HTMLDivElement> = useCallback(() => {
    checkScroll();
  }, [checkScroll]);

  useEffect(() => {
    if (!window.ResizeObserver) {
      return;
    }

    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver(() => {
      checkScroll();
    });

    resizeObserver.observe(element);

    checkScroll();

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkScroll]);

  return { ref, isContentScrolled, isScrollable, isScrolledToEnd, onScroll };
};

export default useLayoutScrolledContent;
