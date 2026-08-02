import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { IconButton, Tooltip } from "@vibe/core";
import {
  DropdownChevronLeft,
  DropdownChevronRight,
} from "@mondaydotcomorg/icons";
import styles from "./ChipsNav.module.scss";

const SCROLL_EDGE_TOLERANCE_PX = 1;

const cx = (...classes: (string | false | undefined)[]) =>
  classes.filter(Boolean).join(" ");

interface ChipsNavProps {
  children: ReactNode;
  className?: string;
}

// Ported from the mini-home redesign's components/chips-nav/ChipsNav.tsx:
// a horizontal scroller with edge fades and hover-revealed prev/next arrows
// that step one chip at a time.
export function ChipsNav({ children, className }: ChipsNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const updateArrowVisibility = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const { scrollLeft, clientWidth, scrollWidth } = scroller;
    setShowLeft(scrollLeft > SCROLL_EDGE_TOLERANCE_PX);
    setShowRight(
      scrollLeft + clientWidth < scrollWidth - SCROLL_EDGE_TOLERANCE_PX,
    );
  }, []);

  const scrollByOneChip = useCallback((direction: "left" | "right") => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const chips = [...scroller.querySelectorAll<HTMLElement>("[data-chip]")];
    if (chips.length === 0) return;

    const { scrollLeft } = scroller;
    let activeIndex = 0;
    for (let i = 0; i < chips.length; i++) {
      if (chips[i].offsetLeft <= scrollLeft + SCROLL_EDGE_TOLERANCE_PX) {
        activeIndex = i;
      }
    }

    const targetIndex =
      direction === "right"
        ? Math.min(activeIndex + 1, chips.length - 1)
        : Math.max(activeIndex - 1, 0);
    if (targetIndex === activeIndex) return;

    scroller.scrollTo({
      left: chips[targetIndex].offsetLeft,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    const container = containerRef.current;
    if (!scroller) return;

    updateArrowVisibility();
    scroller.addEventListener("scroll", updateArrowVisibility, {
      passive: true,
    });

    const resizeObserver = container
      ? new ResizeObserver(() => updateArrowVisibility())
      : null;
    if (container && resizeObserver) {
      resizeObserver.observe(container);
    }

    return () => {
      scroller.removeEventListener("scroll", updateArrowVisibility);
      resizeObserver?.disconnect();
    };
  }, [updateArrowVisibility]);

  useEffect(() => {
    const frameId = requestAnimationFrame(updateArrowVisibility);
    return () => cancelAnimationFrame(frameId);
  }, [children, updateArrowVisibility]);

  return (
    <div ref={containerRef} className={cx(styles.nav, className)}>
      <div ref={scrollerRef} className={styles.scroller}>
        {children}
      </div>
      {showLeft && (
        <>
          <div
            className={cx(
              styles.edgeFade,
              styles.edgeFadeLeft,
              styles.navControl,
            )}
            aria-hidden
          />
          <div
            className={cx(
              styles.arrowSlot,
              styles.arrowSlotLeft,
              styles.navControl,
            )}
          >
            <Tooltip content="Previous">
              <IconButton
                className={styles.arrowButton}
                icon={DropdownChevronLeft}
                size="xs"
                kind="secondary"
                aria-label="Previous"
                onClick={() => scrollByOneChip("left")}
              />
            </Tooltip>
          </div>
        </>
      )}
      {showRight && (
        <>
          <div
            className={cx(styles.edgeFade, styles.edgeFadeRight)}
            aria-hidden
          />
          <div
            className={cx(
              styles.arrowSlot,
              styles.arrowSlotRight,
              styles.navControl,
            )}
          >
            <Tooltip content="Next">
              <IconButton
                className={styles.arrowButton}
                icon={DropdownChevronRight}
                size="xs"
                kind="secondary"
                aria-label="Next"
                onClick={() => scrollByOneChip("right")}
              />
            </Tooltip>
          </div>
        </>
      )}
    </div>
  );
}
