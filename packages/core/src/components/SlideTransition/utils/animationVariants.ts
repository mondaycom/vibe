import { SlideDirection } from "../SlideTransition.types";

export const slideAnimationVariants = {
  initial: (direction: SlideDirection) => ({
    x: direction === "forward" ? "3%" : "-3%"
  }),
  enter: {
    x: 0
  }
};

export const slideAnimationTransition = {
  duration: 0.25,
  ease: [0.0, 0.0, 0.4, 1.0]
};
