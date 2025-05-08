import { Modifier } from "react-popper";

export const createObserveReferenceResizeModifier = (isEnabled = false): Modifier<"observeReferenceResize"> => ({
  name: "observeReferenceResize",
  enabled: isEnabled,
  phase: "beforeWrite",
  fn() {},
  effect({ state, instance }) {
    if (!state.elements.reference) return;

    const observer = new ResizeObserver(() => {
      instance.update();
    });

    const reference = state.elements.reference as Element;
    observer.observe(reference);

    return () => {
      observer.disconnect();
    };
  }
});
