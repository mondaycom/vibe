import cx from "classnames";
import { COMPONENT_ID, BEM_PREFIX } from "./SliderConstants";

export function _calcDimension({ max, min, value }) {
  const valuePoints = max - min;
  const dimension = Math.round(((value - min) * 100) / valuePoints);
  return [dimension, dimension];
}

function _createBemBlockHelper(block, { isConsume } = {}) {
  if (!block || block === "") {
    return () => "";
  }
  const blockClass = isConsume ? block : `${BEM_PREFIX}-${block}`;
  return function bem(element, modifiers = "", extraClasses = "") {
    const elClass = element !== "" ? `${blockClass}__${element}` : blockClass;
    const modClasses = cx(modifiers)
      .split(" ")
      .map(modClass => (modClass === "" ? "" : `${elClass}--${modClass}`));
    return cx(elClass, modClasses, extraClasses);
  };
}

function _ensureSingleValueText(valueText, value, formatter) {
  if (valueText) {
    return valueText;
  }
  if (typeof value === "undefined") {
    return undefined;
  }
  if (typeof formatter !== "function") {
    return value;
  }
  return formatter(value);
}

function _ensureStepModulo(pageStep, step) {
  const moduloToStep = pageStep % step;
  if (moduloToStep === 0) {
    return pageStep;
  }
  return pageStep - moduloToStep;
}

export const bem = _createBemBlockHelper(COMPONENT_ID);

export function calcDimensions({ max, min, ranged, value }) {
  if (!ranged) {
    const [dimension, position] = _calcDimension({ max, min, value });
    return { dimension, offset: 0, positions: [position], thumbKeys: ["start"] };
  }
  const [val1, val2] = value;
  const [offset, position] = _calcDimension({ max, min, value: val1 });
  const [dimension, position2] = _calcDimension({ max, min, value: val2 });
  return { dimension, offset, positions: [position, position2], thumbKeys: ["start", "end"] };
}

export function calculatePageStep({ max, min, step }) {
  const pageStep = (max - min) / 10;
  if (pageStep < step) {
    // too small pageSize --> return step
    return step;
  }
  const fixedPageStep = _ensureStepModulo(Math.round(pageStep), step);
  if ((max - min) / fixedPageStep > 10) {
    // too many steps with fixedPageStep - multiply it
    return 2 * fixedPageStep;
  }
  // basic page size is ok
  return fixedPageStep;
}

export function ensureDefaultValue({ defaultValue, min, max, ranged }) {
  if (ranged && !Array.isArray(defaultValue)) {
    return [min, max];
  }
  if (defaultValue < min) {
    return min;
  }
  if (defaultValue > max) {
    return max;
  }
  return defaultValue;
}

export function ensureValueText(valueText, value, formatter) {
  if (!Array.isArray(value)) {
    return _ensureSingleValueText(valueText, value, formatter);
  }
  return value.map((valueSingle, index) => {
    const valueTextSingle = Array.isArray(valueText) ? valueText[index] : undefined;
    return _ensureSingleValueText(valueTextSingle, valueSingle, formatter);
  });
}

export function getNearest({ newValue, ranged, value }) {
  if (!ranged) {
    return 0;
  }
  const diff0 = Math.abs(value[0] - newValue);
  const diff1 = Math.abs(value[1] - newValue);
  return diff0 > diff1 ? 1 : 0;
}

export function moveToPx({ offsetInPx, min, max, railCoords, step }) {
  const valuePoints = max - min;
  const pxToValuePoints = railCoords.width / valuePoints;
  const offsetInValuePoints = Math.round(offsetInPx / pxToValuePoints) + min;
  const newValue = Math.round(offsetInValuePoints / step) * step;
  if (newValue < min) {
    return min;
  }
  if (newValue > max) {
    return max;
  }
  return newValue;
}
