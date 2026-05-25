import React, { type HTMLProps, type ReactElement } from "react";
import { chainFunctions, chainRefFunctions, type VibeComponentProps } from "@vibe/shared";

export interface RefableProps extends React.PropsWithChildren<HTMLProps<HTMLElement> & VibeComponentProps> {
  children: ReactElement | ReactElement[] | string;
  /**
   * The wrapper element type to use for React components. Defaults to "span".
   */
  wrapperElement?: "span" | "div";
}

/**
 * Refable is a utility component that enables ref forwarding to children elements.
 *
 * For native HTML elements: Clones the child and merges refs and event handlers.
 * For React components: Wraps in a span/div and attaches the ref to the wrapper.
 *
 * This allows Dialog to get a reference to the trigger element for positioning.
 */
export const Refable = React.forwardRef<HTMLElement, RefableProps>(
  ({ children, wrapperElement = "span", ...rest }, ref) => {
    return React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null;

      // For React components, wrap in a native element to attach the ref
      if (typeof child.type !== "string") {
        const WrapperElement = wrapperElement;
        return (
          // @ts-expect-error - TypeScript can't infer the correct ref type when using a variable as JSX tag
          <WrapperElement ref={ref} {...rest}>
            {child}
          </WrapperElement>
        );
      }

      // For native HTML elements, clone and merge props/refs
      const childProps = child.props as React.HTMLProps<HTMLElement>;

      return React.cloneElement(child, {
        ...rest,
        ...childProps,
        // Chain all event handlers to preserve both parent and child handlers
        onClick: getChainedFunction("onClick", childProps, rest),
        onBlur: getChainedFunction("onBlur", childProps, rest),
        onFocus: getChainedFunction("onFocus", childProps, rest),
        onMouseEnter: getChainedFunction("onMouseEnter", childProps, rest),
        onMouseLeave: getChainedFunction("onMouseLeave", childProps, rest),
        onMouseDown: getChainedFunction("onMouseDown", childProps, rest),
        onKeyDown: getChainedFunction("onKeyDown", childProps, rest),
        onContextMenu: getChainedFunction("onContextMenu", childProps, rest),
        ref: chainRefFunctions([(child as any).ref, ref])
      } as any);
    }) as any;
  }
);

function getChainedFunction(
  name: keyof React.HTMLProps<unknown>,
  childProps: React.PropsWithChildren<React.HTMLProps<unknown>>,
  wrapperProps: React.HTMLProps<unknown>
) {
  return chainFunctions([childProps[name], wrapperProps[name]], true);
}
