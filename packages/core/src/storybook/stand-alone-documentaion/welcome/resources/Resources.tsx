import React, { useEffect, useRef, useState, useCallback } from "react";
import styles from "./Resources.module.scss";
import Card from "./Card";
import HeartIcon from "./icons/HeartIcon";
import CircleIcon from "./icons/CircleIcon";
import CirclesIcon from "./icons/CirclesIcon";
import LineIcon from "./icons/LineIcon";
import AsteriskIcon from "./icons/AsteriskIcon";
import useResizeObserver from "../../../../hooks/useResizeObserver";
import cx from "classnames";

export default function Resources() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftFade, setShowLeftFade] = useState(false);
  const [showRightFade, setShowRightFade] = useState(false);

  const updateFadeState = useCallback(() => {
    const element = scrollRef.current;
    if (!element) return;

    const { scrollLeft, scrollWidth, clientWidth } = element;
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth;
    const hasOverflow = scrollWidth > clientWidth;

    setShowLeftFade(hasOverflow && canScrollLeft);
    setShowRightFade(hasOverflow && canScrollRight);
  }, []);

  useResizeObserver({
    ref: scrollRef,
    callback: updateFadeState,
    debounceTime: 100
  });

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    updateFadeState();

    element.addEventListener("scroll", updateFadeState);

    return () => {
      element.removeEventListener("scroll", updateFadeState);
    };
  }, [updateFadeState]);

  return (
    <div
      ref={scrollRef}
      className={cx(styles.resourcesScroll, {
        [styles.fadeLeft]: showLeftFade,
        [styles.fadeRight]: showRightFade
      })}
    >
      <div className={styles.resources}>
        <Card
          icon={<HeartIcon />}
          title="Foundations"
          description="Foundations inform the basis of any great user interface."
          page="Foundations/Accessibility"
        />
        <Card
          icon={<CircleIcon />}
          title="Components"
          description="Components are reusable building blocks."
          page="Components/Accordion"
        />
        <Card
          icon={<CirclesIcon />}
          title="Patterns"
          description="A UI pattern is one step up from a component. "
          page=""
        />
        <Card
          icon={<LineIcon />}
          title="Processes"
          description="Processes outline the design workflows and methods"
          page=""
        />
        <Card
          icon={<AsteriskIcon />}
          title="Other resources"
          description="Internal tools and utils that streamline our daily workflows"
          page=""
        />
      </div>
    </div>
  );
}
