import { SlideDirection } from "../SlideTransition.types";

export const slideAnimationVariants = {
  initial: (direction: SlideDirection) => ({
    x: direction === "forward" ? "10%" : "-10%",
    opacity: 0
  }),
  enter: {
    x: 0,
    opacity: 1
  },
  exit: (direction: SlideDirection) => ({
    x: direction === "forward" ? "-10%" : "10%",
    opacity: 0
  })
};

export const slideAnimationTransition = {
  duration: 0.1,
  ease: [0.0, 0.0, 0.4, 1.0]
};
