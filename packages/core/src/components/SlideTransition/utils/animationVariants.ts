import { SlideDirection } from "../SlideTransition.types";

export const slideAnimationVariants = {
  initial: (direction: SlideDirection) => ({
    x: direction === "forward" ? "10%" : "-10%"
  }),
  enter: {
    x: 0
  },
  exit: (direction: SlideDirection) => ({
    x: direction === "forward" ? "-100%" : "100%"
  })
};

export const slideAnimationTransition = {
  duration: 0.2,
  ease: [0.0, 0.0, 0.4, 1.0]
};
