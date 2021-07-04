export function BEMClass(componentName) {
  return ({ element, state }) => {
    debugger;
    let className = componentName;
    if (element) className = `${className}_${element}`;
    if (state) className = `${className}--${state}`;
    return className;
  };
}
