import { type RefObject, useEffect } from "react";

export interface StrokeSpotlightOptions {
  /** How far outside the box (px) the glow still responds. */
  proximity?: number;
  /** Fraction of half-min-side; inside this radius from center, glow is off. */
  inactiveZone?: number;
  /**
   * Outward distance from the outer margins (px) over which the stroke fades
   * from full to off. Inside the box stays full strength.
   */
  edgeFade?: number;
  /** Angular width of the glowing arc (degrees). */
  spread?: number;
  /** Seconds for angle interpolation. */
  movementDuration?: number;
}

const DEFAULTS = {
  proximity: 64,
  inactiveZone: 0.01,
  edgeFade: 48,
  spread: 40,
  movementDuration: 1.5
} as const;

/** Mark controls that should not trigger the click pulse (e.g. attach, model picker). */
export const STROKE_NO_PULSE_ATTR = "data-stroke-no-pulse";
const STROKE_NO_PULSE_SELECTOR = `[${STROKE_NO_PULSE_ATTR}]`;

/**
 * Pointer-following conic border glow via `--start` / `--active`, plus one-shot
 * click pulse. Traveling stroke is suppressed while the box is `:focus-within`
 * and resumes on hover after focus leaves.
 */
export function useStrokeSpotlight(
  ref: RefObject<HTMLElement | null>,
  activeClassName: string,
  clickPulsingClassName: string,
  options: StrokeSpotlightOptions = {}
) {
  const proximity = options.proximity ?? DEFAULTS.proximity;
  const inactiveZone = options.inactiveZone ?? DEFAULTS.inactiveZone;
  const edgeFade = options.edgeFade ?? DEFAULTS.edgeFade;
  const spread = options.spread ?? DEFAULTS.spread;
  const movementDuration = options.movementDuration ?? DEFAULTS.movementDuration;

  useEffect(() => {
    const el = ref.current;
    if (!el || !activeClassName || !clickPulsingClassName) return;

    const pulseEl = el.querySelector<HTMLElement>("[data-stroke-click-pulse]");
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = mql.matches;
    // One-shot click pulse: after the first choose, don't re-pulse until blur.
    let engaged = false;
    let cachedRect = el.getBoundingClientRect();
    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;
    let hasPointer = false;
    let angleRafId: number | null = null;
    let angleFrom = 0;
    let angleTo = 0;
    let angleStartMs = 0;

    el.style.setProperty("--spread", String(spread));
    el.style.setProperty("--start", "0");
    el.style.setProperty("--active", "0");

    const clearClickPulse = () => {
      el.classList.remove(clickPulsingClassName);
    };

    const stopAngleAnimation = () => {
      if (angleRafId !== null) {
        cancelAnimationFrame(angleRafId);
        angleRafId = null;
      }
    };

    const easeOutExpo = (t: number) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const tickAngle = (now: number) => {
      const t = Math.min(1, (now - angleStartMs) / (movementDuration * 1000));
      const value = angleFrom + (angleTo - angleFrom) * easeOutExpo(t);
      el.style.setProperty("--start", String(value));
      if (t < 1) {
        angleRafId = requestAnimationFrame(tickAngle);
      } else {
        angleRafId = null;
      }
    };

    const animateAngle = (from: number, to: number) => {
      stopAngleAnimation();
      angleFrom = from;
      angleTo = to;
      angleStartMs = performance.now();
      angleRafId = requestAnimationFrame(tickAngle);
    };

    const deactivate = () => {
      el.style.setProperty("--active", "0");
      el.classList.remove(activeClassName);
      stopAngleAnimation();
    };

    const applyGlow = (clientX: number, clientY: number, rect: DOMRect) => {
      // No traveling stroke while the prompt (or anything inside) is focused.
      if (el.matches(":focus-within")) {
        deactivate();
        return;
      }

      if (rect.width <= 0 || rect.height <= 0) return;

      const centerX = rect.left + rect.width * 0.5;
      const centerY = rect.top + rect.height * 0.5;
      const distanceFromCenter = Math.hypot(clientX - centerX, clientY - centerY);
      const inactiveRadius = 0.5 * Math.min(rect.width, rect.height) * inactiveZone;

      if (distanceFromCenter < inactiveRadius) {
        deactivate();
        return;
      }

      const isActive =
        clientX > rect.left - proximity &&
        clientX < rect.left + rect.width + proximity &&
        clientY > rect.top - proximity &&
        clientY < rect.top + rect.height + proximity;

      if (!isActive) {
        deactivate();
        return;
      }

      const localX = clientX - rect.left;
      const localY = clientY - rect.top;
      const outsideX = Math.max(0 - localX, 0, localX - rect.width);
      const outsideY = Math.max(0 - localY, 0, localY - rect.height);
      const distOutside = Math.sqrt(outsideX * outsideX + outsideY * outsideY);
      const fadeRange = edgeFade > 0 ? edgeFade : proximity;
      const active = distOutside <= 0 ? 1 : Math.max(0, Math.min(1, 1 - distOutside / fadeRange));

      el.style.setProperty("--active", String(active));
      el.classList.add(activeClassName);

      const currentAngle = parseFloat(el.style.getPropertyValue("--start")) || 0;
      const targetAngle = (180 * Math.atan2(clientY - centerY, clientX - centerX)) / Math.PI + 90;
      const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
      animateAngle(currentAngle, currentAngle + angleDiff);
    };

    const scheduleGlow = (clientX: number, clientY: number) => {
      lastX = clientX;
      lastY = clientY;
      hasPointer = true;
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        cachedRect = el.getBoundingClientRect();
        applyGlow(lastX, lastY, cachedRect);
      });
    };

    const onMotionChange = () => {
      reducedMotion = mql.matches;
      if (reducedMotion) {
        deactivate();
        clearClickPulse();
      }
    };
    mql.addEventListener("change", onMotionChange);

    const refreshRect = () => {
      cachedRect = el.getBoundingClientRect();
    };

    const onWindowPointerMove = (e: PointerEvent) => {
      if (reducedMotion || !el.isConnected) {
        deactivate();
        return;
      }

      if (e.clientX < 0 || e.clientY < 0 || e.clientX > window.innerWidth || e.clientY > window.innerHeight) {
        if (!el.matches(":focus-within")) engaged = false;
        hasPointer = false;
        deactivate();
        return;
      }

      scheduleGlow(e.clientX, e.clientY);
    };

    const onWindowBlur = () => {
      engaged = false;
      hasPointer = false;
      deactivate();
    };

    const restartClickPulse = () => {
      el.classList.remove(clickPulsingClassName);
      void el.offsetWidth;
      el.classList.add(clickPulsingClassName);
    };

    const onPulseAnimationEnd = (e: AnimationEvent) => {
      if (e.target !== pulseEl) return;
      clearClickPulse();
    };

    const onFocusIn = () => {
      engaged = true;
      deactivate();
    };

    const onFocusOut = () => {
      // Wait a frame so :focus-within reflects the new target.
      requestAnimationFrame(() => {
        if (!el.isConnected || el.matches(":focus-within")) return;
        engaged = false;
        // Resume hover stroke immediately if the pointer is still nearby.
        if (hasPointer) {
          cachedRect = el.getBoundingClientRect();
          applyGlow(lastX, lastY, cachedRect);
        }
      });
    };

    const onDown = (e: PointerEvent) => {
      if (reducedMotion) return;
      const target = e.target;
      if (target instanceof Element && target.closest(STROKE_NO_PULSE_SELECTOR)) return;
      if (engaged || el.matches(":focus-within")) {
        deactivate();
        return;
      }
      engaged = true;
      deactivate();
      restartClickPulse();
    };

    window.addEventListener("pointermove", onWindowPointerMove, {
      passive: true
    });
    window.addEventListener("blur", onWindowBlur);
    window.addEventListener("scroll", refreshRect, { passive: true });
    window.addEventListener("resize", refreshRect, { passive: true });
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("focusin", onFocusIn);
    el.addEventListener("focusout", onFocusOut);
    pulseEl?.addEventListener("animationend", onPulseAnimationEnd);

    return () => {
      mql.removeEventListener("change", onMotionChange);
      if (rafId !== null) cancelAnimationFrame(rafId);
      stopAngleAnimation();
      el.classList.remove(activeClassName);
      clearClickPulse();
      el.style.setProperty("--active", "0");
      window.removeEventListener("pointermove", onWindowPointerMove);
      window.removeEventListener("blur", onWindowBlur);
      window.removeEventListener("scroll", refreshRect);
      window.removeEventListener("resize", refreshRect);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("focusin", onFocusIn);
      el.removeEventListener("focusout", onFocusOut);
      pulseEl?.removeEventListener("animationend", onPulseAnimationEnd);
    };
  }, [ref, activeClassName, clickPulsingClassName, proximity, inactiveZone, edgeFade, spread, movementDuration]);
}
