import { useCallback, useEffect } from "react";

const useDisableScroll = (scrollableQuerySelector: string) => {
    const preventScroll = useCallback((e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }, []);

    const enableScroll = useCallback(() => {
        document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
            item.addEventListener("wheel", preventScroll);
        });
    }, [preventScroll, scrollableQuerySelector]);

    const disableScroll = useCallback(() => {
        document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
            item.removeEventListener("wheel", preventScroll);
        });
    }, [preventScroll, scrollableQuerySelector]);

    useEffect(() => {
        return disableScroll;
    }, [disableScroll]);

    return {
        enableScroll,
        disableScroll
    };
};

export default useDisableScroll