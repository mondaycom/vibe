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

      // Border-radius is applied to the inner Text element (marked with data-celebration-text),
      // not the outer wrapper that childRef points to. Resolve the inner element so the stroke
      // matches the label's actual shape regardless of size, token overrides, or non-uniform
      // corners (e.g. labels with a leg, where one corner is squared off).
      const shapeElement = childRef.current?.querySelector<HTMLElement>("[data-celebration-text]") ?? childRef.current;
      const radii = readCornerRadii(shapeElement);

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
  // Inset every edge by half the stroke width so the 1px stroke stays fully inside the label box.
  const offset = strokeWidth / 2;

  // Trace the rounded rectangle clockwise, starting just below the top-right corner on the right
  // edge. Each edge endpoint is inset by `offset` and each corner is a clean quarter-circle of its
  // own radius, so the drawn length matches getPerimeter() exactly and the stroke loops smoothly.
  return `M ${width - offset} ${offset + tr} V ${height - offset - br} A ${br} ${br} 0 0 1 ${width - offset - br} ${
    height - offset
  } H ${offset + bl} A ${bl} ${bl} 0 0 1 ${offset} ${height - offset - bl} V ${offset + tl} A ${tl} ${tl} 0 0 1 ${
    offset + tl
  } ${offset} H ${width - offset - tr} A ${tr} ${tr} 0 0 1 ${width - offset} ${offset + tr} Z`;
}

function getPerimeter({
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
  const totalRadius = tl + tr + br + bl;
  // Mirror getPath(): every edge loses 2*offset to the stroke inset at its two ends (4 edges ->
  // 4 * strokeWidth total) plus its two corner radii, and each corner adds a quarter-circle of its
  // own radius. Keeping this equal to the drawn path length makes stroke-dasharray land exactly on
  // the seam, so the looping stroke doesn't overshoot and jump.
  const straightEdges = 2 * width + 2 * height - 4 * strokeWidth - 2 * totalRadius;
  const corners = (Math.PI / 2) * totalRadius;
  return straightEdges + corners;
}
