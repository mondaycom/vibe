import { RefObject } from "react";

export default function useSupportFirefoxLabelClick({ ref }: { ref: RefObject<HTMLElement> }): number {
  return +(Math.random() * 1000).toFixed(0);
}
