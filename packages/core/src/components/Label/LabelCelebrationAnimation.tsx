import React, { cloneElement, forwardRef, useCallback, useRef, useState } from "react";
import cx from "classnames";
import { useResizeObserver } from "@vibe/hooks";
import styles from "./LabelCelebrationAnimation.module.scss";

const DEFAULT_STROKE_WIDTH = 1;

export interface LabelCelebrationAnimationProps {
  /**
   * The child component that will be wrapped by the animation.
   */
  children: React.ReactElement;
  /**
   * Callback fired when the celebration animation ends.
   */
  onAnimationEnd: () => void;
}

interface CornerRadii {
  tl: number;
  tr: number;
  br: number;
  bl: number;
}

function readCornerRadii(element: HTMLElement | null | undefined): CornerRadii {
  if (!element) return { tl: 0, tr: 0, br: 0, bl: 0 };
  const cs = getComputedStyle(element);
  return {
    tl: parseFloat(cs.borderTopLeftRadius) || 0,
    tr: parseFloat(cs.borderTopRightRadius) || 0,
    br: parseFloat(cs.borderBottomRightRadius) || 0,
    bl: parseFloat(cs.borderBottomLeftRadius) || 0
  };
}

function LabelCelebrationAnimation({ children, onAnimationEnd }: LabelCelebrationAnimationProps) {
  const wrapperRef = useRef<HTMLDivElement>();
  const childRef = useRef<HTMLDivElement>();

  const [path, setPath] = useState<string>();

  const resizeObserverCallback = useCallback(
    ({ borderBoxSize }: { borderBoxSize: { blockSize: number; inlineSize: number } }) => {
      const { blockSize: height, inlineSize: width } = borderBoxSize || {};

      if (!wrapperRef.current || !width || !height) return;

      // Read the actual rendered radii from the child so the stroke matches the label's
      // shape regardless of size or token overrides, and handles non-uniform corners
      // (e.g. labels with a leg, where one corner is squared off).
      const radii = readCornerRadii(childRef.current);

      setPath(getPath({ width, height, radii }));
      wrapperRef.current.style.setProperty("--container-perimeter", String(getPerimeter({ width, height, radii })));
    },
    []
  );

  useResizeObserver({
    ref: wrapperRef,
    callback: resizeObserverCallback,
    debounceTime: 0
  });

  const ChildComponentWithRef = forwardRef((_props, ref) =>
    cloneElement(children, {
      ref
    })
  );

  return (
    <div className={styles.celebration} ref={wrapperRef}>
      <svg className={styles.svg}>
        <path className={cx(styles.stroke, styles.base)} d={path} />
        <path className={cx(styles.stroke, styles.first)} d={path} />
        <path className={cx(styles.stroke, styles.second)} d={path} />
        <path className={cx(styles.stroke, styles.third)} d={path} onAnimationEnd={onAnimationEnd} />
      </svg>
      <ChildComponentWithRef ref={childRef} />
    </div>
  );
}

export default LabelCelebrationAnimation;

function getPath({
  width,
  height,
  radii,
  strokeWidth = DEFAULT_STROKE_WIDTH
}: {
  width: number;
  height: number;
  radii: CornerRadii;
  strokeWidth?: number;
}) {
  const { tl, tr, br, bl } = radii;
  const offset = strokeWidth / 2;

  // Trace the perimeter clockwise: start on the right edge below the top-right corner,
  // arc through each corner using that corner's own radius.
  return `M ${width - strokeWidth / 2}, ${tr} V ${height - br} A ${br} ${br} 0 0 1 ${width - br} ${
    height - strokeWidth / 2
  } H ${bl + offset} A ${bl} ${bl} 0 0 1 ${strokeWidth / 2} ${height - bl} V ${
    tl + offset
  } A ${tl} ${tl} 0 0 1 ${tl} ${strokeWidth / 2} L ${width - tr}, ${
    strokeWidth / 2
  } A ${tr} ${tr} 0 0 1 ${width - strokeWidth / 2} ${tr} Z`;
}

function getPerimeter({ width, height, radii }: { width: number; height: number; radii: CornerRadii }) {
  const { tl, tr, br, bl } = radii;
  const totalRadius = tl + tr + br + bl;
  // Straight segments: full perimeter minus the radius slice taken from each end of every edge.
  const straightEdges = 2 * width + 2 * height - 2 * totalRadius;
  // Each corner contributes a quarter-circle of its own radius.
  const corners = (Math.PI / 2) * totalRadius;
  return straightEdges + corners;
}
