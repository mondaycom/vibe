import { COMPONENT_ID, createBemHelper, ensureId, ensureValueText } from "../SliderCommons";

export function useSliderEnsure({ componentId, id, value, valueDefault, valueText }) {
  const idEnsured = ensureId(id, componentId);
  const thumbId = `${idEnsured}-thumb`;
  const valueEnsured = value || valueDefault;
  const valueTextEnsured = ensureValueText(valueText, valueEnsured);
  return { idEnsured, valueTextEnsured, valueEnsured, thumbId };
}

export function usePlainSlider({
  ariaLabel,
  ariaLabeledBy,
  classNameBase,
  id,
  max,
  min,
  size,
  value,
  valueDefault,
  valueText
}) {
  const { valueTextEnsured, valueEnsured, thumbId } = useSliderEnsure({
    componentId: COMPONENT_ID,
    id,
    value,
    valueDefault,
    valueText
  });
  const consumerBem = createBemHelper(classNameBase);
  const railProps = {
    className: consumerBem("rail")
  };
  const thumpProps = {
    ariaLabel,
    ariaLabeledBy,
    className: consumerBem("thumb"),
    id: thumbId,
    max,
    min,
    size,
    value: valueEnsured,
    valueText: valueTextEnsured
  };
  const trackProps = {
    className: consumerBem("track")
  };
  const filledTrackProps = {
    className: consumerBem("filled-track"),
    dimension: 0
  };
  return { filledTrackProps, trackProps, railProps, thumpProps };
}
