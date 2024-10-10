import { Variants } from "framer-motion";

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
