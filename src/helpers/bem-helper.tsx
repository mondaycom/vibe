export function BEMClass(componentName: string) {
  return ({ element, state }: { element?: string; state?: string }) => {
    let className = componentName;
    if (element) className = `${className}_${element}`;
    if (state) className = `${className}--${state}`;
    return className;
  };
}
