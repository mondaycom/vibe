import { type Modifier } from "react-popper";

export const createObserveContentResizeModifier = (isEnabled = false): Modifier<"observeContentResize"> => ({
  name: "observeContentResize",
  enabled: isEnabled,
  phase: "beforeWrite",
  fn() {},
  effect({ state, instance }) {
    const observer = new ResizeObserver(() => {
      instance.update();
    });
    observer.observe(state.elements.popper);

    return () => {
      observer.disconnect();
    };
  }
});
