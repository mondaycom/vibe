import { createBemBlockHelper } from "../../helpers/bem-helper";

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
  const consumerBem = createBemBlockHelper(classNameBase);
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
