export function BEMClass(componentName) {
  return className => `${componentName}--${className}`;
}
