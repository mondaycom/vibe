import { Variants } from "framer-motion";
import { RefObject } from "react";

const easeInOut = [0, 0, 0.4, 1];

const modalEnterTransition = {
  duration: 0.15,
  ease: easeInOut
};

const modalExitTransition = {
  duration: 0.1,
  ease: easeInOut
};

export const modalAnimationOverlayVariants: Variants = {
  enter: {
    opacity: 1,
    transition: modalEnterTransition
  },
  exit: {
    opacity: 0,
    transition: modalExitTransition
  }
};

export const modalAnimationCenterPopVariants: Variants = {
  enter: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: modalEnterTransition
  },
  exit: {
    opacity: 0,
    scale: 0.65,
    x: "-50%",
    y: "-50%",
    transition: modalExitTransition
  }
};

export const modalAnimationAnchorPopVariants: Variants = {
  enter: {
    opacity: 1,
    scale: 1,
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    transition: modalEnterTransition
  },
  exit: (anchorElementRef: RefObject<HTMLElement>) => {
    const anchorRect = anchorElementRef.current.getBoundingClientRect();
    const anchorCenterX = anchorRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top + anchorRect.height / 2;

    const x = `calc(-50% + ${anchorCenterX}px)`;
    const y = `calc(-50% + ${anchorCenterY}px)`;

    return {
      opacity: 0,
      scale: 0.65,
      top: 0,
      left: 0,
      x,
      y,
      transition: modalExitTransition
    };
  }
};
