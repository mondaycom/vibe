import { useRef } from "react";
import useMergeRefs from "../../hooks/useMergeRefs";
import { COMPONENT_ID, createBemHelper } from "./SliderCommons";
import { useSliderEnsure } from "./PlainSlider/PlainSliderHooks";

export function useSlider(
  {
    ariaLabel,
    ariaLabeledBy,
    className,
    classNameBase,
    id,
    indicateSelection,
    max,
    min,
    size,
    value,
    valueDefault,
    valueText
  },
  ref
) {
  const componentRef = useRef(null);
  const mergedRef = useMergeRefs({ refs: [ref, componentRef] });
  const { idEnsured, valueTextEnsured, valueEnsured } = useSliderEnsure({
    componentId: COMPONENT_ID,
    id,
    value,
    valueDefault,
    valueText
  });
  const consumerBem = createBemHelper(classNameBase);
  const is = {
    label: indicateSelection
  };
  const blockProps = {
    id: idEnsured,
    className: consumerBem("", "", className)
  };
  const plainProps = {
    ariaLabel,
    ariaLabeledBy,
    className: consumerBem("plain"),
    classNameBase,
    id: idEnsured,
    max,
    min,
    size,
    value: valueEnsured,
    valueText: valueTextEnsured
  };
  const labelProps = {
    className: consumerBem("label"),
    id: `${idEnsured}-value-label`,
    value
  };

  return { blockProps, plainProps, labelProps, is, mergedRef };
}
