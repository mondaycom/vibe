import cx from "classnames";
import { COMPONENT_ID, BEM_PREFIX } from "./SliderCommons";

export function createBemBlockHelper(block, { isConsume } = {}) {
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

export const bem = createBemBlockHelper(COMPONENT_ID);

function ensureStepModulo(pageStep, step) {
  const moduloToStep = pageStep % step;
  if (moduloToStep === 0) {
    return pageStep;
  }
  // console.log("modulo", { pageStep, step, moduloToStep, new: pageStep - moduloToStep });
  return pageStep - moduloToStep;
}
export function calculatePageStep({ max, min, step }) {
  const pageStep = (max - min) / 10;
  if (pageStep < step) {
    // too small pageSize --> return step
    return step;
  }
  const fixedPageStep = ensureStepModulo(Math.round(pageStep), step);
  if ((max - min) / fixedPageStep > 10) {
    // too many steps with fixedPageStep - multiply it
    return 2 * fixedPageStep;
  }
  // basic page size is ok
  return fixedPageStep;
}

export function getCurrentValue(actualValue, isRange, focused) {
  if (!isRange) {
    return actualValue;
  }
  return actualValue[focused];
}

export function calcDimensions({ isRange, max, min, value }) {
  if (!isRange) {
    const [dimension, position] = calcDimension({ max, min, value });
    return { dimension, offset: 0, positions: [position] };
  }
  const [val1, val2] = value;
  const [offset, position] = calcDimension({ max, min, value: val1 });
  const [dimension, position2] = calcDimension({ max, min, value: val2 });
  return { dimension, offset, positions: [position, position2] };
}

export function calcDimension({ max, min, value }) {
  const valuePoints = max - min;
  const dimension = Math.round(((value - min) * 100) / valuePoints);
  return [dimension, dimension];
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

export function getNearest({ isRange, newValue, value }) {
  if (!isRange) {
    return 0;
  }
  const diff0 = Math.abs(value[0] - newValue);
  const diff1 = Math.abs(value[1] - newValue);
  return diff0 > diff1 ? 1 : 0;
}

export function ensureValueDefault({ valueDefault, isRange, min, max }) {
  if (isRange && !Array.isArray(valueDefault)) {
    return [min, max];
  }
  if (valueDefault < min) {
    return min;
  }
  if (valueDefault > max) {
    return max;
  }
  return valueDefault;
}
