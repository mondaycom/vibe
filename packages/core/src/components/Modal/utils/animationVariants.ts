import { Variants } from "framer-motion";
import { RefObject } from "react";

export const modalAnimationOverlayVariants: Variants = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.7,
    transition: {
      duration: 0.1,
      ease: [0.0, 0.0, 0.4, 1.0]
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
      ease: [0.6, 0.0, 1.0, 1.0]
    }
  }
};

export const modalAnimationCenterPopVariants: Variants = {
  initial: {
    opacity: 1,
    scale: 1,
    x: "-50%",
    y: "-50%"
  },
  enter: {
    opacity: [0, 1, 1],
    scale: [0.8, 1, 1],
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.15,
      ease: [0.0, 0.0, 0.4, 1.0],
      times: [0, 0.5, 1]
    }
  },
  exit: {
    opacity: [1, 1, 0],
    scale: [1, 1, 0.8],
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.1,
      ease: [0.6, 0.0, 1.0, 1.0],
      times: [0, 0.5, 1]
    }
  }
};

export const modalAnimationAnchorPopVariants: Variants = {
  initial: (anchorElementRef: RefObject<HTMLElement>) => {
    const anchorRect = anchorElementRef.current.getBoundingClientRect();
    const anchorCenterX = anchorRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top + anchorRect.height / 2;

    const x = `calc(-50% + ${anchorCenterX}px)`;
    const y = `calc(-50% + ${anchorCenterY}px)`;

    return {
      opacity: 0,
      scale: 0.8,
      top: "50%",
      left: "50%",
      x,
      y
    };
  },
  enter: {
    opacity: [0, 0, 1],
    scale: [0.8, 0.8, 1],
    top: "50%",
    left: "50%",
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.2,
      ease: [0.0, 0.0, 0.4, 1.0],
      times: [0, 0.4, 1]
    }
  },
  exit: (anchorElementRef: RefObject<HTMLElement>) => {
    const anchorRect = anchorElementRef.current.getBoundingClientRect();
    const anchorCenterX = anchorRect.left + anchorRect.width / 2;
    const anchorCenterY = anchorRect.top + anchorRect.height / 2;

    const x = `calc(-50% + ${anchorCenterX}px)`;
    const y = `calc(-50% + ${anchorCenterY}px)`;

    return {
      opacity: [1, 0, 0],
      scale: [1, 0.8, 0.8],
      top: 0,
      left: 0,
      x,
      y,
      transition: {
        duration: 0.15,
        ease: [0.6, 0.0, 1.0, 1.0],
        times: [0, 0.6, 1]
      }
    };
  }
};
