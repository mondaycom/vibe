import cx from "classnames";
import { BEM_PREFIX } from "../constants/general";

export function BEMClass(componentName) {
  return ({ element, state }) => {
    let className = componentName;
    if (element) className = `${className}_${element}`;
    if (state) className = `${className}--${state}`;
    return className;
  };
}

export function createBemBlockHelper(block) {
  if (!block || block === "") {
    return () => "";
  }
  const blockClass = `${BEM_PREFIX}-${block}`;
  return function bem(element, modifiers = "", extraClasses = "") {
    const elClass = element !== "" ? `${blockClass}__${element}` : blockClass;
    const modClasses = cx(modifiers)
      .split(" ")
      .map(modClass => (modClass === "" ? "" : `${elClass}--${modClass}`));
    return cx(elClass, modClasses, extraClasses);
  };
}
