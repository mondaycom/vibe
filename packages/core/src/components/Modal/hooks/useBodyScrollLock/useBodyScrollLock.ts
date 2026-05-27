import { useEffect } from "react";

// Reference-counted body scroll lock so multiple stacked modals don't
// fight over `document.body` styles. The first lock captures and applies
// the styles; the last unlock restores them.
let activeLockCount = 0;
let savedBodyOverflow = "";
let savedBodyPaddingRight = "";

const useBodyScrollLock = (locked: boolean) => {
  useEffect(() => {
    if (!locked || typeof document === "undefined") return undefined;

    if (activeLockCount === 0) {
      const { body, documentElement } = document;
      savedBodyOverflow = body.style.overflow;
      savedBodyPaddingRight = body.style.paddingRight;

      const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        const currentPaddingRight = parseFloat(getComputedStyle(body).paddingRight) || 0;
        body.style.paddingRight = `${currentPaddingRight + scrollbarWidth}px`;
      }
    }

    activeLockCount += 1;
    return () => {
      activeLockCount -= 1;
      if (activeLockCount === 0) {
        document.body.style.overflow = savedBodyOverflow;
        document.body.style.paddingRight = savedBodyPaddingRight;
      }
    };
  }, [locked]);
};

export default useBodyScrollLock;
