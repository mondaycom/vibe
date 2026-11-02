import { type RefObject, useEffect } from "react";

const INSET_PX = 4;

type IndicatorState = {
  el: HTMLSpanElement;
  ready: boolean;
};

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function findTabListWrapper(from: Element | null): HTMLElement | null {
  return from?.closest?.('[data-testid="tab-list"]') as HTMLElement | null;
}

function hasCoreIndicator(wrapper: HTMLElement) {
  return Boolean(wrapper.querySelector('[class*="selectedIndicator"]:not([data-tabs-glide-indicator])'));
}

/**
 * Gallery polyfill: Sense Motion `slide-transition` for the selected tab stroke.
 * Tokens: position · ease-transition · duration-long-250
 * Skips wrappers that already ship a core selectedIndicator.
 */
export function useGlidingTabIndicators(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const states = new WeakMap<HTMLElement, IndicatorState>();

    const ensureIndicator = (wrapper: HTMLElement): IndicatorState | null => {
      if (hasCoreIndicator(wrapper)) return null;

      const existing = states.get(wrapper);
      if (existing) return existing;

      let el = wrapper.querySelector("[data-tabs-glide-indicator]") as HTMLSpanElement | null;
      if (!el) {
        el = document.createElement("span");
        el.dataset.tabsGlideIndicator = "true";
        el.setAttribute("aria-hidden", "true");
        el.className = "tabs-glide-indicator";
        wrapper.appendChild(el);
      }

      const state: IndicatorState = { el, ready: false };
      states.set(wrapper, state);
      return state;
    };

    const update = (wrapper: HTMLElement, animate: boolean) => {
      if (hasCoreIndicator(wrapper)) {
        wrapper.querySelectorAll("[data-tabs-glide-indicator]").forEach(node => node.remove());
        return;
      }

      const state = ensureIndicator(wrapper);
      if (!state) return;

      const selected = wrapper.querySelector('[role="tab"][aria-selected="true"]') as HTMLElement | null;
      if (!selected) return;

      const wrapperRect = wrapper.getBoundingClientRect();
      const tabRect = selected.getBoundingClientRect();
      const toLeft = tabRect.left - wrapperRect.left + wrapper.scrollLeft + INSET_PX;
      const toWidth = Math.max(0, tabRect.width - INSET_PX * 2);

      const shouldAnimate = animate && state.ready && !prefersReducedMotion();
      if (!shouldAnimate) {
        const previous = state.el.style.transition;
        state.el.style.transition = "none";
        state.el.style.left = `${toLeft}px`;
        state.el.style.width = `${toWidth}px`;
        // Force reflow so disabling transition takes effect before re-enabling
        void state.el.offsetWidth;
        state.el.style.transition = previous;
      } else {
        state.el.style.left = `${toLeft}px`;
        state.el.style.width = `${toWidth}px`;
      }

      state.el.classList.add("is-visible");
      state.ready = true;
    };

    const syncAll = (animate: boolean) => {
      root.querySelectorAll('[data-testid="tab-list"]').forEach(node => {
        update(node as HTMLElement, animate);
      });
    };

    syncAll(false);

    const mutationObserver = new MutationObserver(mutations => {
      const wrappers = new Set<HTMLElement>();
      let structureChanged = false;

      for (const mutation of mutations) {
        if (mutation.type === "childList") {
          structureChanged = true;
          continue;
        }
        const wrapper = findTabListWrapper(mutation.target as Element);
        if (wrapper) wrappers.add(wrapper);
      }

      if (structureChanged) {
        syncAll(false);
        return;
      }

      wrappers.forEach(wrapper => update(wrapper, true));
    });

    mutationObserver.observe(root, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ["aria-selected"],
    });

    const resizeObserver = new ResizeObserver(() => syncAll(false));
    resizeObserver.observe(root);

    return () => {
      mutationObserver.disconnect();
      resizeObserver.disconnect();
      root.querySelectorAll("[data-tabs-glide-indicator]").forEach(node => node.remove());
    };
  }, [rootRef]);
}
