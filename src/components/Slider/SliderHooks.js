import { createBemHelper } from "./SliderCommons";

export function useSlider({
  ariaLabel,
  ariaLabeledBy,
  className,
  classNameBase,
  id,
  indicateSelection,
  max,
  min,
  size
}) {
  const consumerBem = createBemHelper(classNameBase);
  const subProps = {
    block: {
      id,
      className: consumerBem("", "", className)
    },
    plain: {
      ariaLabel,
      ariaLabeledBy,
      className: consumerBem("plain"),
      classNameBase,
      max,
      min,
      size
    },
    label: {
      className: consumerBem("label")
    }
  };
  const is = {
    label: indicateSelection
  };
  return { subProps, is };
}
