import { useEffect, useState } from "react";
import { useEventListener } from "hooks";

export function useLineNavigation({ elementRefs, isVertical = false }) {
  useEventListener({eventName: "keydown");
}
