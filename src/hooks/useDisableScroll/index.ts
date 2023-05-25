import { useCallback, useEffect } from "react";

const useDisableScroll = (scrollableQuerySelector: string) => {
    const _disableScroll = useCallback((e: Event) => {
        e.preventDefault();
        e.stopPropagation();

        return false;
    }, []);

    const enableScroll = useCallback(() => {
        document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
            item.addEventListener("wheel", _disableScroll);
        });
    }, [_disableScroll, scrollableQuerySelector]);

    const disableScroll = useCallback(() => {
        document.querySelectorAll(scrollableQuerySelector).forEach((item: Element) => {
            item.removeEventListener("wheel", _disableScroll);
        });
    }, [_disableScroll, scrollableQuerySelector]);

    useEffect(() => {
        return disableScroll;
    }, [disableScroll]);

    return {
        enableScroll,
        disableScroll
    };
};

export default useDisableScroll