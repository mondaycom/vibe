import { useCallback, useEffect } from "react";

const useScrollLock = (scrollableQuerySelector: string) => {
    const preventScroll = useCallback((e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }, []);

    const lockScroll = useCallback(() => {
        document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
            item.addEventListener("wheel", preventScroll);
        });
    }, [preventScroll, scrollableQuerySelector]);

    const unlockScroll = useCallback(() => {
        document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
            item.removeEventListener("wheel", preventScroll);
        });
    }, [preventScroll, scrollableQuerySelector]);

    useEffect(() => {
        return unlockScroll;
    }, [unlockScroll]);

    return {
        lockScroll,
        unlockScroll
    };
};

export default useScrollLock