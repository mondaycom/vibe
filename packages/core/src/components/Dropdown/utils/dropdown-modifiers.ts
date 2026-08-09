import { type Middleware } from "@floating-ui/react-dom";

export const matchWidthMiddleware: Middleware = {
  name: "matchWidth",
  fn: ({ rects, elements }) => {
    Object.assign(elements.floating.style, {
      width: `${rects.reference.width}px`
    });
    return {};
  }
};
