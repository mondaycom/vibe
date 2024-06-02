import { useEffect } from "react";

type DeprecatedProps = Record<string, string>;

export function useWarnDeprecatedProps<T extends Record<string, any>>(
  props: T,
  deprecatedProps: DeprecatedProps,
  componentName: string
): void {
  useEffect(() => {
    Object.keys(deprecatedProps).forEach(prop => {
      if (prop in props && props[prop] !== undefined) {
        console.warn(
          `${componentName}: '${prop}' prop is deprecated and will be removed in the next major version. Use '${deprecatedProps[prop]}' instead. [monday-ui-react-core]`
        );
      }
    });
  }, [props, deprecatedProps, componentName]);
}
